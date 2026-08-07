const en = {
  nav: {
    projects: "Projects",
    services: "Services",
    studio: "Studio",
    pricing: "Pricing",
    mystch: "mySTCH",
    about: "About",
    contact: "Contact",
    writeUs: "Get in touch",
    menu: "Navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    switchLanguage: "Přepnout do češtiny",
  },

  hero: {
    badge: "Custom websites & apps",
    titleStatic: "The future of",
    titleEnd: "starts right now",
    rotating: ["the web", "your brand", "your business", "your store", "your brand", "your company"],
    ctaPrimary: "Make me stand out",
    ctaSecondary: "Explore projects",
  },

  projects: {
    eyebrow: "Selected work",
    viewArchive: "View the full archive",
  },

  services: {
    eyebrow: "What we do",
    title: ["From a website to an app", "in one place."],
    items: [
      {
        id: "01",
        title: "Custom websites",
        description:
          "We design and build your website exactly around your business — from the first idea to launch. No off-the-shelf templates that everyone else is using. Everything original, and above all fast.",
      },
      {
        id: "02",
        title: "Online stores",
        description:
          "We build a store that's easy for customers to use and naturally guides them all the way to checkout. Less fumbling in the cart, more completed orders.",
      },
      {
        id: "03",
        title: "Custom apps",
        description:
          "We'll build you an app of any size — from a simple record book to the system your whole company runs on. It bends around the way you work, instead of your people bending around an overpriced program you also pay for every month.",
      },
      {
        id: "04",
        title: "Speed & visibility",
        description:
          "We make sure customers find you on Google and that your site loads instantly. A slow website drives people away before they even read anything.",
      },
    ],
  },

  studio: {
    eyebrow: "How we think",
    titleStart: "We combine",
    titleHighlight: "beautiful design",
    titleEnd: "with what actually works.",
    pillars: [
      {
        title: "Clear design",
        desc: "We don't just build pretty websites. We build sites that make sense — clean, easy to use and aligned with your brand. Visitors instantly get their bearings and know what to do.",
      },
      {
        title: "Speed",
        desc: "Seconds matter. We build sites that load instantly, on mobile and desktop alike. A slow website loses customers — and often you never even know it.",
      },
      {
        title: "Results",
        desc: "A pretty website alone isn't enough. We focus above all on making your site actually pay off — bringing in enquiries, orders and new customers.",
      },
    ],
  },

  cms: {
    eyebrow: "Your own admin",
    title: ["Manage the website", "yourself."],
    lead:
      "With every website you get your own simple admin panel, mySTCH. Change text and photos yourself, whenever you need — no calling the developer for every little thing.",
    points: [
      {
        title: "One password",
        desc: "Log in with a single password. No complex accounts or training.",
      },
      {
        title: "No monthly fees",
        desc: "Editing content costs nothing. Change as much as you like.",
      },
      {
        title: "Changes in a few clicks",
        desc: "Edit text or a photo and push it live with one button.",
      },
    ],
    cta: "I want a site I can manage myself",
    more: "See the admin panel",
    previewLabel: "admin preview",
  },

  pricing: {
    eyebrow: "Pricing",
    title: ["Ballpark prices", "with no surprises."],
    lead:
      "Every website is different, so these prices are indicative. You'll get an exact quote after a short free consultation — no hidden fees.",
    tiers: [
      {
        name: "Custom website",
        price: "from €400",
        desc: "A simpler custom website — a one-pager or company presentation, incl. your own admin.",
        features: ["Original design, no template", "Fast and tuned for mobile", "Your own content admin"],
        exampleSlug: "bar-praha",
      },
      {
        name: "Multi-page website",
        price: "from €800",
        desc: "A larger site with more sections, a blog or in several languages.",
        features: ["Everything in the custom website", "More pages, blog, languages", "Reservations and other integrations"],
        exampleSlug: "octagon-trebic",
      },
      {
        name: "Custom app",
        price: "from €1,600",
        desc: "A custom web application or online store with features built around your business.",
        features: ["Custom app or online store", "Features tailored to your needs", "Support and growth after launch"],
      },
    ],
    note: "Plus running costs: domain + hosting from €20/year.",
    cta: "Get a no-obligation quote",
    exampleLabel: "Example",
    exampleSoon: "Example coming soon",
  },

  questionnaire: {
    back: "Back home",
    eyebrow: "No-obligation questionnaire",
    title: ["A few questions and we'll know", "what you need."],
    lead:
      "It takes about three minutes and commits you to nothing. Your answers let us send you a quote that fits your business — not a generic price list.",
    duration: "3 minutes · 15 questions · free",
    start: "Start",
    resumed: "We've restored your unfinished answers.",
    progress: "Question",
    of: "of",
    next: "Continue",
    prev: "Back",
    skip: "Skip",
    optional: "optional",
    multiHint: "Pick as many as you like.",
    maxReached: "That's the maximum — deselect one first.",
    submit: "Send questionnaire",
    submitting: "Sending...",
    genericError: "Something went wrong. Please try again.",
    networkError: "Connection error. Please check your internet.",
    requiredError: "Please add your name and email so we can get back to you.",
    summaryLabel: "Summary of answers",
    unanswered: "(not answered)",
    success: {
      title: "Got it, thank you!",
      description:
        "Your answers came through. We'll go over them and get back to you within 24 hours with a no-obligation quote.",
      home: "Back to the homepage",
    },
    questions: {
      business: {
        title: "What does your business do?",
        hint: "One sentence is enough — just so we know what we're working with.",
        placeholder: "e.g. a family restaurant in Třebíč",
      },
      hasWeb: {
        title: "Do you have a website today?",
        options: [
          "We don't have one yet",
          "We do, but we want a brand new one",
          "We do and just want to improve it",
        ],
      },
      webUrl: {
        title: "What's the address?",
        hint: "We'll take a look before we talk.",
        placeholder: "www.yourcompany.com",
      },
      webPain: {
        title: "What bothers you about it most?",
        options: [
          "It looks dated",
          "It loads slowly",
          "We can't edit it ourselves",
          "It doesn't bring in enquiries",
          "It's hard to use on a phone",
          "People can't find us on Google",
          "Something else / not sure",
        ],
      },
      goal: {
        title: "What should the website mainly bring you?",
        hint: "Pick the single most important one.",
        options: [
          "More enquiries and new customers",
          "Selling online",
          "Getting found on Google",
          "Looking credible and professional",
          "Saving us time — bookings, orders, forms",
        ],
      },
      action: {
        title: "What should a visitor do on the site?",
        options: [
          "Call or write to us",
          "Fill in an enquiry",
          "Order a product",
          "Book a slot",
          "Come to our premises",
          "Something else",
        ],
      },
      success: {
        title: "Six months in, how will you know it worked?",
        hint: "Be as specific as you like — e.g. \"we get twice as many enquiries\".",
        placeholder: "In your own words...",
      },
      audience: {
        title: "Who are your customers?",
        hint: "Who we're mainly building the site for.",
        placeholder: "e.g. local families, companies, tourists",
      },
      features: {
        title: "What must the website have?",
        options: [
          "Pricing",
          "Photo gallery",
          "Menu or list of services",
          "Online booking",
          "Online shop",
          "News or a blog",
          "Customer testimonials",
          "Contact form",
          "Map and opening hours",
          "The site in another language",
          "Not sure yet",
        ],
      },
      feel: {
        title: "How should the website feel?",
        hint: "Pick up to three.",
        options: [
          "Elegant and premium",
          "Modern and technical",
          "Friendly and family-run",
          "Clean and minimal",
          "Playful and colourful",
          "Serious and traditional",
        ],
      },
      inspiration: {
        title: "Are there websites you like?",
        hint: "From any industry at all. Just the addresses — it helps us a lot.",
        placeholder: "www.example.com — I like how they...",
      },
      assets: {
        title: "Do you have a logo and photos?",
        options: [
          "We have both",
          "We have a logo, no photos",
          "We have neither",
          "Not sure, let's talk about it",
        ],
      },
      copy: {
        title: "Who will write the text for the site?",
        options: [
          "We'll write it",
          "We have some of it",
          "We need help with it",
        ],
      },
      deadline: {
        title: "When would you like it finished?",
        options: [
          "As soon as possible",
          "Within a month",
          "Within three months",
          "There's no rush",
        ],
      },
      budget: {
        title: "What budget do you have in mind?",
        hint: "It helps us propose a scope that makes sense. Prices are indicative.",
        options: [
          "€400 – €800",
          "€800 – €2,000",
          "€2,000 – €4,000",
          "Over €4,000",
          "Not sure, please advise",
        ],
      },
      contact: {
        title: "Where should we send the quote?",
        hint: "We'll be in touch within 24 hours. We never share your details.",
        name: "Name",
        namePlaceholder: "John Smith",
        email: "Email",
        emailPlaceholder: "john@company.com",
        phone: "Phone",
        phonePlaceholder: "optional",
        note: "Anything to add?",
        notePlaceholder: "Anything we didn't ask about...",
      },
    },
  },

  process: {
    eyebrow: "How it works",
    title: ["From the first idea", "to a finished website."],
    lead: "No months of waiting and no complicated process. For smaller sites it's usually done within days.",
    steps: [
      {
        num: "01",
        title: "Get in touch",
        desc: "Drop me a message or call and we'll talk through what the site is for and what you expect from it. No strings attached, free of charge.",
      },
      {
        num: "02",
        title: "The design",
        desc: "I prepare the first design. Either you give me a free hand and I send you options to choose from, or you have a clear idea and we fine-tune it down to the detail together.",
      },
      {
        num: "03",
        title: "The build",
        desc: "I build the site, fill it with content and polish it for mobile and desktop alike. For smaller sites, usually within a few days.",
      },
      {
        num: "04",
        title: "Launch & handover",
        desc: "We launch the site and I hand over your own admin panel, where you can edit text and photos yourself any time. And I'm around afterwards whenever you need anything.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    titleLine1: "Let's start",
    titleLine2: "your project.",
    lead:
      "Have a vision? We have the tools. Write to us and let's build something exceptional together.",
    writeUs: "Write to us",
    callUs: "Call us",
    form: {
      name: "Name",
      namePlaceholder: "John Doe",
      email: "Email",
      emailPlaceholder: "john@company.com",
      budget: "Approximate budget",
      budgetOptions: [
        "Under €800",
        "€800 – €2,000",
        "€2,000 – €4,000",
        "€4,000+",
      ],
      about: "About the project",
      aboutPlaceholder: "I need a website redesign for a real-estate agency...",
      submit: "Send enquiry",
      submitting: "Sending...",
      genericError: "Something went wrong. Please try again.",
      networkError: "Connection error. Please check your internet.",
      consentBefore: "By submitting this form you agree to the",
      consentLink: "processing of personal data",
      consentAfter: "for the purpose of handling your enquiry.",
    },
    success: {
      title: "Message sent.",
      description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      again: "Send another message",
    },
  },

  footer: {
    brand: "STCH Studio",
    headline: "We build websites that feel clean, fast and modern.",
    description:
      "Design, development and digital presence for brands that want to leave a strong first impression.",
    cta: "Free consultation",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    location: "Třebíč, Czech Republic",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    cookies: "Cookie settings",
    modal: {
      title: "Privacy policy",
      close: "Close",
      sections: [
        {
          title: "1. Who we are",
          body:
            "Your personal data is processed by STCH Studio, registered at Třebíč – Zámostí, L. Pokorného 29/42, 674 01, ID: 21738068.",
        },
        {
          title: "2. What we collect",
          body:
            "We only process data you share with us through the contact form, so we can respond to your enquiry.",
        },
        {
          title: "3. Why we do it",
          body:
            "The purpose is to negotiate a contract and answer your questions. We never sell your data to anyone.",
        },
        {
          title: "4. Your rights",
          body:
            "You have the right to request a data export, correction or deletion. Just write to info@stchstudio.cz.",
        },
        {
          title: "5. Cookies",
          body:
            "The site uses essential technical cookies for proper operation and optional analytical cookies (Google Analytics) for traffic measurement. You can change your consent any time via \"Cookie settings\" in the footer.",
        },
      ],
      understood: "Got it",
    },
  },

  archive: {
    back: "Back to home",
    titleStart: "Complete",
    titleHighlight: "Archive.",
    description:
      "Explore everything we've worked on so far. From small presentations to complex web applications.",
    totalLabel: "Projects total",
    viewDetail: "View case study",
  },

  caseStudy: {
    backToArchive: "Back to archive",
    visitLive: "Visit live site",
    client: "Client",
    year: "Year",
    timeline: "Timeline",
    category: "Category",
    tech: "Tech stack",
    challengeTitle: "The challenge",
    approachTitle: "Our approach",
    noCaseStudy:
      "A detailed case study for this project is on the way. In the meantime, take a look at the live site.",
    nextProject: "Next project",
    prevProject: "Previous project",
    notFound: {
      title: "Project not found",
      description: "This project doesn't exist in the archive. Please go back.",
      action: "Back to archive",
    },
  },

  aboutMe: {
    back: "Back home",
    eyebrow: "About me",
    name: "Radek Stach",
    role: "Web Designer & Developer",
    location: "Třebíč, Czech Republic",
    intro:
      "Founder of STCH Studio. I help businesses thrive in the digital world — websites, apps and custom solutions. Clean, fast and to the point.",
    storyTitle: "Who I am",
    storyBody:
      "I don't stop at websites — I'll build a custom app too, or help you put AI to work where it saves you time and effort. Whatever you come with, we'll find a way — and I stick around after launch.\n\nI go all in on every project. My goal is to grow STCH into the studio businesses turn to first.",
    ctaTitle: "Let's build something that works.",
    ctaText:
      "Have a project or just an idea? Write to me and we'll figure out how to turn it into a site you're proud of.",
    ctaButton: "Write to me",
  },

  myStch: {
    back: "Back home",
    eyebrow: "Your own admin",
    title: ["mySTCH — manage the", "site yourself."],
    lead:
      "With every website you get your own admin panel. No technical skills, no monthly fees for edits. Log in with a password, change text or photos and push it live with one button.",
    ctaTop: "I want a site like this",
    urlBar: "yourcompany.com/cms",
    screens: [
      {
        label: "Overview",
        caption: "All your content — articles, references, pages — neatly in one place.",
      },
      {
        label: "Editing",
        caption: "Rewrite text like in Word, swap a photo in a couple of clicks.",
      },
      {
        label: "Photos",
        caption: "Upload a photo and add a description. It shrinks automatically to keep the site fast.",
      },
      {
        label: "Settings",
        caption: "Phone, address, opening hours and links — all in one handy place.",
      },
    ],
    previewLabel: "admin preview",
    howTitle: "How it works",
    steps: [
      {
        num: "01",
        title: "Log in with a password",
        desc: "One password, no account setup or complicated sign-in.",
      },
      {
        num: "02",
        title: "Edit the content",
        desc: "Change text, swap a photo or add a new item.",
      },
      {
        num: "03",
        title: "Push it live",
        desc: "Click “Publish” and your changes are live within moments.",
      },
    ],
    ctaTitle: "Want a site you can manage yourself?",
    ctaText: "Get in touch and I'll show you the admin live on your future website.",
    ctaButton: "Write to me",
  },

  cookies: {
    title: "This site uses cookies",
    description:
      "We use essential cookies to make the site work and optional analytical cookies (Google Analytics) for a better understanding of traffic. You can change your consent any time in the footer.",
    settings: "Settings",
    reject: "Reject",
    accept: "Accept all",
    panelTitle: "Cookie settings",
    panelSubtitle: "Choose which cookies we may use.",
    closeSettings: "Close settings",
    necessary: "Essential",
    necessaryBadge: "always active",
    necessaryDesc:
      "Without these the site can't work properly (e.g. storing your cookie choice).",
    analytics: "Analytical",
    analyticsDesc:
      "Google Analytics — anonymous traffic statistics that help us improve the site.",
    rejectAll: "Reject all",
    save: "Save choice",
  },
};

export default en;
