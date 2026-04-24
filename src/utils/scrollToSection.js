export function scrollToSection(targetId, options = {}) {
  if (typeof window === "undefined") return false;

  const { closeMenu, delay = 0, behavior = "smooth" } = options;

  const runScroll = () => {
    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior });
      return true;
    }

    const element = document.getElementById(targetId);
    if (!element) return false;

    element.scrollIntoView({ behavior, block: "start" });
    return true;
  };

  closeMenu?.();

  if (delay > 0) {
    window.setTimeout(runScroll, delay);
    return true;
  }

  return runScroll();
}
