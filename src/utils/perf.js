function logMetric(label, value, extra = {}) {
  console.info(`[perf] ${label}`, { value, ...extra });
}

export function setupPerformanceLogging() {
  if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
    return;
  }

  window.addEventListener("load", () => {
    const navigation = performance.getEntriesByType("navigation")[0];

    if (navigation) {
      logMetric("navigation", {
        domContentLoaded:
          navigation.domContentLoadedEventEnd - navigation.startTime,
        loadEvent: navigation.loadEventEnd - navigation.startTime,
        responseEnd: navigation.responseEnd - navigation.startTime,
      });
    }
  });

  try {
    let clsValue = 0;

    const layoutShiftObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.hadRecentInput) continue;

        clsValue += entry.value;
        logMetric("layout-shift", entry.value, { total: clsValue });
      }
    });

    layoutShiftObserver.observe({ type: "layout-shift", buffered: true });
  } catch {
    // Some browsers do not support this observer type.
  }

  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const lastEntry = list.getEntries().at(-1);

      if (lastEntry) {
        logMetric("lcp", Math.round(lastEntry.startTime), {
          element: lastEntry.element?.tagName ?? null,
        });
      }
    });

    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
  } catch {
    // Some browsers do not support this observer type.
  }

  try {
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        logMetric("long-task", Math.round(entry.duration), {
          start: Math.round(entry.startTime),
        });
      }
    });

    longTaskObserver.observe({ type: "longtask", buffered: true });
  } catch {
    // Some browsers do not support this observer type.
  }

  try {
    const eventObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration < 100) continue;

        logMetric("slow-event", Math.round(entry.duration), {
          name: entry.name,
          start: Math.round(entry.startTime),
        });
      }
    });

    eventObserver.observe({
      type: "event",
      buffered: true,
      durationThreshold: 100,
    });
  } catch {
    // Some browsers do not support this observer type.
  }
}
