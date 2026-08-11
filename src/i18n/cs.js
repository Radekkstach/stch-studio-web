const cs = {
  nav: {
    projects: "Projekty",
    services: "Služby",
    studio: "Studio",
    pricing: "Ceník",
    mystch: "mySTCH",
    about: "O mně",
    contact: "Kontakt",
    writeUs: "Napsat nám",
    menu: "Navigace",
    openMenu: "Otevřít menu",
    closeMenu: "Zavřít menu",
    toLight: "Přepnout na světlý režim",
    toDark: "Přepnout na tmavý režim",
    switchLanguage: "Switch to English",
  },

  hero: {
    badge: "Weby a aplikace na míru",
    titleStatic: "Budoucnost",
    titleEnd: "začíná právě teď",
    rotating: ["webu", "vaší značky", "podnikání", "vašeho e-shopu", "značky", "firmy"],
    ctaPrimary: "Chci se odlišit",
    ctaSecondary: "Prozkoumat projekty",
  },

  projects: {
    eyebrow: "Vybrané projekty",
    viewArchive: "Zobrazit celý archiv",
  },

  services: {
    eyebrow: "Co děláme",
    title: ["Od webu po aplikaci", "na jednom místě."],
    items: [
      {
        id: "01",
        title: "Weby na míru",
        description:
          "Navrhneme a postavíme web přesně podle vašeho podnikání — od prvního nápadu až po spuštění. Žádné šablony, ze kterých čiší, že je má každý druhý. Vše originální a hlavně rychlé.",
      },
      {
        id: "02",
        title: "E-shopy",
        description:
          "Postavíme e-shop, který se zákazníkovi snadno používá a přirozeně ho dovede až k objednávce. Méně tápání v košíku, víc dokončených nákupů.",
      },
      {
        id: "03",
        title: "Aplikace na míru",
        description:
          "Postavíme vám aplikaci jakéhokoliv rozsahu — od jednoduché evidence až po systém, na kterém stojí celá firma. Přizpůsobí se tomu, jak pracujete vy, místo aby se vaši lidé ohýbali podle předraženého programu, za který navíc platíte každý měsíc.",
      },
      {
        id: "04",
        title: "Rychlost a viditelnost",
        description:
          "Postaráme se, aby vás zákazníci našli na Googlu a aby se web načítal okamžitě. Pomalý web totiž lidi odežene dřív, než si u vás stihnou cokoliv přečíst.",
      },
    ],
  },

  studio: {
    eyebrow: "Jak přemýšlíme",
    titleStart: "Spojujeme",
    titleHighlight: "krásný design",
    titleEnd: "s tím, co reálně funguje.",
    pillars: [
      {
        title: "Přehledný design",
        desc: "Neděláme jen hezké weby. Děláme weby, které dávají smysl — přehledné, jednoduché na používání a sladěné s vaší značkou. Návštěvník se hned zorientuje a ví, co má udělat.",
      },
      {
        title: "Rychlost",
        desc: "Vteřiny rozhodují. Stavíme weby tak, aby se načetly okamžitě, na mobilu i na počítači. Pomalý web zákazníky ztrácí — a často o tom ani nevíte.",
      },
      {
        title: "Výsledky",
        desc: "Hezký web sám o sobě nestačí. Soustředíme se hlavně na to, aby vám web reálně vydělával — přiváděl poptávky, objednávky a nové zákazníky.",
      },
    ],
  },

  cms: {
    eyebrow: "Vlastní administrace",
    title: ["Web si spravujete", "sami."],
    lead:
      "Ke každému webu dostanete vlastní jednoduchou administraci mySTCH. Text i fotky si změníte sami, kdykoliv potřebujete — žádné volání programátorovi za každou maličkost.",
    points: [
      {
        title: "Jedno heslo",
        desc: "Přihlásíte se jedním heslem. Žádné složité účty ani školení.",
      },
      {
        title: "Bez měsíčních poplatků",
        desc: "Za úpravy obsahu neplatíte. Měníte, kolik chcete.",
      },
      {
        title: "Změny na pár kliknutí",
        desc: "Upravíte text nebo fotku a jedním tlačítkem to pustíte na web.",
      },
    ],
    cta: "Chci web, který si spravím sám",
    more: "Prohlédnout administraci",
    previewLabel: "náhled administrace",
  },

  pricing: {
    eyebrow: "Ceník",
    title: ["Orientační ceny", "bez překvapení."],
    lead:
      "Každý web je jiný, proto jsou ceny orientační. Přesnou nabídku dostanete po krátké konzultaci zdarma — žádné skryté poplatky.",
    tiers: [
      {
        name: "Web na míru",
        price: "od 10 000 Kč",
        desc: "Jednodušší web na míru — vizitka nebo prezentace firmy, včetně vlastní administrace.",
        features: ["Originální návrh, žádná šablona", "Rychlé a vyladěné na mobil", "Vlastní administrace obsahu"],
        exampleSlug: "bar-praha",
      },
      {
        name: "Vícestránkový web",
        price: "od 20 000 Kč",
        desc: "Rozsáhlejší web s více sekcemi, blogem nebo ve více jazycích.",
        features: ["Vše z webu na míru", "Více stránek, blog, jazyky", "Napojení rezervací a dalších služeb"],
        exampleSlug: "octagon-trebic",
      },
      {
        name: "Aplikace na míru",
        price: "od 40 000 Kč",
        desc: "Webová aplikace nebo e-shop s funkcemi přesně podle vašeho podnikání.",
        features: ["Aplikace nebo e-shop na míru", "Funkce přesně podle potřeb", "Podpora i rozvoj po spuštění"],
      },
    ],
    note: "K tomu provoz: doména + hosting od 500 Kč/rok.",
    cta: "Chci nezávaznou nabídku",
    exampleLabel: "Ukázka",
    exampleSoon: "Ukázka už brzy",
  },

  questionnaire: {
    back: "Zpět domů",
    eyebrow: "Nezávazný dotazník",
    title: ["Pár otázek a víme,", "co potřebujete."],
    lead:
      "Zabere to asi tři minuty a k ničemu vás to nezavazuje. Díky odpovědím vám pošleme nabídku, která sedí na vaše podnikání — ne obecný ceník.",
    duration: "3 minuty · 15 otázek · zdarma",
    start: "Začít",
    resumed: "Načetli jsme vaše rozepsané odpovědi.",
    progress: "Otázka",
    of: "z",
    next: "Pokračovat",
    prev: "Zpět",
    skip: "Přeskočit",
    optional: "nepovinné",
    multiHint: "Vyberte klidně víc možností.",
    maxReached: "Víc už jich vybrat nejde — nejdřív nějakou odznačte.",
    submit: "Odeslat dotazník",
    submitting: "Odesílám...",
    genericError: "Něco se pokazilo. Zkuste to prosím znovu.",
    networkError: "Chyba připojení. Zkontrolujte internet.",
    requiredError: "Vyplňte prosím jméno a e-mail, ať se vám máme jak ozvat.",
    summaryLabel: "Shrnutí odpovědí",
    unanswered: "(nevyplněno)",
    success: {
      title: "Máme to, děkujeme!",
      description:
        "Odpovědi nám dorazily. Projdeme je a do 24 hodin se vám ozveme s nezávaznou nabídkou.",
      home: "Zpět na hlavní stránku",
    },
    questions: {
      business: {
        title: "Čemu se vaše firma věnuje?",
        hint: "Stačí jedna věta, ať víme, s čím pracujeme.",
        placeholder: "Např. rodinná restaurace v Třebíči",
      },
      hasWeb: {
        title: "Máte dnes web?",
        options: [
          "Zatím žádný nemáme",
          "Máme, ale chceme úplně nový",
          "Máme a chceme ho jen vylepšit",
        ],
      },
      webUrl: {
        title: "Jakou má adresu?",
        hint: "Podíváme se na něj ještě před schůzkou.",
        placeholder: "www.vasefirma.cz",
      },
      webPain: {
        title: "Co vám na něm nejvíc vadí?",
        options: [
          "Vypadá zastarale",
          "Načítá se pomalu",
          "Nejde si ho upravit sám",
          "Nechodí přes něj poptávky",
          "Špatně se používá na mobilu",
          "Nejde nás najít na Googlu",
          "Něco jiného / nevím",
        ],
      },
      goal: {
        title: "Co má web hlavně přinést?",
        hint: "Vyberte tu nejdůležitější věc.",
        options: [
          "Víc poptávek a nových zákazníků",
          "Prodávat online",
          "Aby nás lidé našli na Googlu",
          "Působit důvěryhodně a profesionálně",
          "Ušetřit nám čas — rezervace, objednávky, formuláře",
        ],
      },
      action: {
        title: "Co má návštěvník na webu udělat?",
        options: [
          "Zavolat nebo napsat",
          "Vyplnit poptávku",
          "Objednat zboží",
          "Rezervovat si termín",
          "Přijít k nám na provozovnu",
          "Něco jiného",
        ],
      },
      success: {
        title: "Podle čeho poznáte za půl roku, že se to povedlo?",
        hint: "Klidně konkrétně — třeba „chodí nám dvakrát víc poptávek“.",
        placeholder: "Napište vlastními slovy...",
      },
      audience: {
        title: "Kdo jsou vaši zákazníci?",
        hint: "Pro koho web hlavně stavíme.",
        placeholder: "Např. rodiny z okolí, firmy, turisté",
      },
      features: {
        title: "Co má na webu určitě být?",
        options: [
          "Ceník",
          "Fotogalerie",
          "Nabídka nebo jídelní lístek",
          "Rezervace termínu",
          "E-shop",
          "Novinky nebo blog",
          "Reference zákazníků",
          "Kontaktní formulář",
          "Mapa a otevírací doba",
          "Web i v cizím jazyce",
          "Zatím nevím",
        ],
      },
      feel: {
        title: "Jak má web působit?",
        hint: "Vyberte maximálně tři.",
        options: [
          "Elegantně a luxusně",
          "Moderně a technologicky",
          "Přátelsky a rodinně",
          "Čistě a minimalisticky",
          "Hravě a barevně",
          "Seriózně a tradičně",
        ],
      },
      inspiration: {
        title: "Líbí se vám nějaké weby?",
        hint: "Klidně i z úplně jiného oboru. Stačí adresy — hodně nám to pomůže.",
        placeholder: "www.priklad.cz — líbí se mi, jak...",
      },
      assets: {
        title: "Máte logo a fotky?",
        options: [
          "Máme logo i fotky",
          "Máme logo, fotky ne",
          "Nemáme ani jedno",
          "Nevím, poradíme se",
        ],
      },
      copy: {
        title: "Kdo dodá texty na web?",
        options: [
          "Texty dodáme my",
          "Máme je jen zčásti",
          "Potřebujeme s nimi pomoct",
        ],
      },
      deadline: {
        title: "Kdy byste web chtěli mít hotový?",
        options: ["Co nejdřív", "Do měsíce", "Do tří měsíců", "Nespěchá to"],
      },
      budget: {
        title: "Jaký rozpočet máte v hlavě?",
        hint: "Pomáhá nám to navrhnout rozsah, který dává smysl. Ceny jsou orientační.",
        options: [
          "10 000 – 20 000 Kč",
          "20 000 – 50 000 Kč",
          "50 000 – 100 000 Kč",
          "Nad 100 000 Kč",
          "Nevím, poraďte mi",
        ],
      },
      contact: {
        title: "Kam vám máme poslat nabídku?",
        hint: "Ozveme se do 24 hodin. Nikomu vaše údaje nedáváme.",
        name: "Jméno",
        namePlaceholder: "Jan Novák",
        email: "E-mail",
        emailPlaceholder: "jan@firma.cz",
        phone: "Telefon",
        phonePlaceholder: "nepovinné",
        note: "Chcete něco doplnit?",
        notePlaceholder: "Cokoliv, na co jsme se nezeptali...",
      },
    },
  },

  process: {
    eyebrow: "Jak to probíhá",
    title: ["Od prvního nápadu", "k hotovému webu."],
    lead: "Žádné měsíce čekání a složitý proces. U menších webů bývá hotovo v řádu dní.",
    steps: [
      {
        num: "01",
        title: "Ozvete se",
        desc: "Napíšete nebo zavoláte a probereme, k čemu má web sloužit a co od něj čekáte. Nezávazně a zdarma.",
      },
      {
        num: "02",
        title: "Návrh",
        desc: "Připravím první návrh. Buď mi dáte volnou ruku a já vám pošlu varianty na výběr, nebo máte jasnou představu a tu společně doladíme do detailu.",
      },
      {
        num: "03",
        title: "Stavba",
        desc: "Web postavím, naplním obsahem a vyladím na mobil i počítač. U menších webů obvykle během několika dní.",
      },
      {
        num: "04",
        title: "Spuštění a předání",
        desc: "Web spustíme a předám vám vlastní administraci, ve které si text i fotky kdykoliv sami upravíte. A jsem tu i potom, když budete cokoliv potřebovat.",
      },
    ],
  },

  contact: {
    eyebrow: "Kontakt",
    titleLine1: "Začněme váš",
    titleLine2: "projekt.",
    lead:
      "Máte vizi? My máme nástroje. Napište nám a pojďme společně vytvořit něco výjimečného.",
    writeUs: "Napište nám",
    callUs: "Zavolejte",
    form: {
      name: "Jméno",
      namePlaceholder: "Jan Novák",
      email: "Email",
      emailPlaceholder: "jan@firma.cz",
      budget: "Orientační rozpočet",
      budgetOptions: ["Do 20 000 Kč", "20 000 – 50 000 Kč", "50 000 – 100 000 Kč", "100 000 Kč+"],
      about: "O projektu",
      aboutPlaceholder: "Potřebuji redesign webu pro realitní kancelář...",
      submit: "Odeslat poptávku",
      submitting: "Odesílám...",
      genericError: "Něco se pokazilo. Zkuste to prosím znovu.",
      networkError: "Chyba připojení. Zkontrolujte internet.",
      consentBefore: "Odesláním formuláře souhlasíte se",
      consentLink: "zpracováním osobních údajů",
      consentAfter: "za účelem vyřízení vaší poptávky.",
    },
    success: {
      title: "Zpráva odeslána.",
      description: "Děkujeme za poptávku. Ozveme se vám zpět do 24 hodin.",
      again: "Poslat další zprávu",
    },
  },

  footer: {
    brand: "STCH Studio",
    headline: "Tvoříme weby, které působí čistě, rychle a moderně.",
    description:
      "Design, vývoj a digitální prezentace pro značky, které chtějí zanechat silný první dojem.",
    cta: "Nezávazná konzultace",
    emailLabel: "E-mail",
    phoneLabel: "Telefon",
    locationLabel: "Lokace",
    location: "Třebíč, Česká republika",
    rights: "Všechna práva vyhrazena.",
    privacy: "Ochrana osobních údajů",
    cookies: "Nastavení cookies",
    modal: {
      title: "Ochrana osobních údajů",
      close: "Zavřít",
      sections: [
        {
          title: "1. Kdo jsme?",
          body:
            "Správcem vašich osobních údajů je STCH Studio, se sídlem Třebíč – Zámostí, L. Pokorného 29/42, 674 01, IČ: 21738068.",
        },
        {
          title: "2. Co sbíráme?",
          body:
            "Zpracováváme pouze údaje, které nám sami poskytnete v kontaktním formuláři, abychom vám mohli odpovědět na vaši poptávku.",
        },
        {
          title: "3. Proč to děláme?",
          body:
            "Účelem zpracování je jednání o smlouvě a zodpovězení vašich dotazů. Vaše data nikomu neprodáváme.",
        },
        {
          title: "4. Vaše práva",
          body:
            "Máte právo požadovat výpis dat, jejich opravu nebo výmaz. Stačí nám napsat na info@stchstudio.cz.",
        },
        {
          title: "5. Cookies",
          body:
            "Web používá nezbytné technické cookies pro správné fungování a volitelně analytické cookies (Google Analytics) pro měření návštěvnosti. Souhlas můžete kdykoliv změnit v patičce přes „Nastavení cookies\".",
        },
      ],
      understood: "Rozumím",
    },
  },

  archive: {
    back: "Zpět na hlavní",
    titleStart: "Kompletní",
    titleHighlight: "Archiv.",
    description:
      "Prozkoumejte všechny naše dosavadní práce. Od malých prezentací až po komplexní webové aplikace.",
    totalLabel: "Celkem prací",
    viewDetail: "Zobrazit case study",
  },

  caseStudy: {
    backToArchive: "Zpět do archivu",
    visitLive: "Zobrazit živý web",
    client: "Klient",
    year: "Rok",
    timeline: "Doba realizace",
    category: "Kategorie",
    tech: "Tech stack",
    challengeTitle: "Výzva",
    approachTitle: "Řešení",
    galleryTitle: "Z projektu",
    noCaseStudy:
      "Pro tento projekt zatím chystáme detailní case study. Mezitím si můžeš prohlédnout živý web.",
    nextProject: "Další projekt",
    prevProject: "Předchozí projekt",
    notFound: {
      title: "Projekt nenalezen",
      description: "Tento projekt v archivu neexistuje. Vrať se prosím zpět.",
      action: "Zpět do archivu",
    },
  },

  aboutMe: {
    back: "Zpět domů",
    eyebrow: "O mně",
    name: "Radek Stach",
    role: "Web Designer & Developer",
    location: "Třebíč, Česká republika",
    intro:
      "Zakladatel STCH Studia. Pomáhám firmám prosadit se v digitálním světě — weby, aplikace a řešení na míru. Čistě, rychle a srozumitelně.",
    storyTitle: "Kdo jsem",
    storyBody:
      "Nezůstávám jen u webů — postavím i aplikaci na míru nebo pomůžu zapojit umělou inteligenci tam, kde ušetří čas a práci. Ať přijdete s čímkoliv, najdeme řešení — a u projektu zůstávám i po spuštění.\n\nJdu do každého projektu naplno. Cílem je vybudovat z STCH studio, které pro firmy bude jasná volba.",
    ctaTitle: "Pojďme postavit něco, co funguje.",
    ctaText:
      "Máte projekt nebo jen nápad? Napište mi a zjistíme, jak ho proměnit ve web, na který budete hrdí.",
    ctaButton: "Napsat mi",
  },

  myStch: {
    back: "Zpět domů",
    eyebrow: "Vlastní administrace",
    title: ["mySTCH — web si", "upravíte sami."],
    lead:
      "Ke každému webu dostanete vlastní administraci. Žádné technické znalosti, žádné měsíční poplatky za úpravy. Přihlásíte se heslem, změníte text nebo fotky a jedním tlačítkem to pustíte na web.",
    ctaTop: "Chci takový web",
    urlBar: "vasefirma.cz/cms",
    screens: [
      {
        label: "Přehled",
        caption: "Všechen obsah — články, reference, stránky — přehledně na jednom místě.",
      },
      {
        label: "Úprava obsahu",
        caption: "Text přepíšete jako ve Wordu, fotku vyměníte na pár kliknutí.",
      },
      {
        label: "Fotky",
        caption: "Fotku nahrajete a doplníte popis. Sama se zmenší, ať je web rychlý.",
      },
      {
        label: "Nastavení",
        caption: "Telefon, adresa, otevírací doba i odkazy — vše na jednom místě a po ruce.",
      },
    ],
    previewLabel: "náhled administrace",
    howTitle: "Jak to funguje",
    steps: [
      {
        num: "01",
        title: "Přihlásíte se heslem",
        desc: "Jedno heslo, žádné zakládání účtů ani složité přihlašování.",
      },
      {
        num: "02",
        title: "Upravíte obsah",
        desc: "Změníte text, vyměníte fotku nebo přidáte novou položku.",
      },
      {
        num: "03",
        title: "Pustíte to na web",
        desc: "Kliknete na „Propsat na web“ a změny jsou během chvíle živě.",
      },
    ],
    ctaTitle: "Chcete web, který si spravíte sami?",
    ctaText: "Ozvěte se a ukážu vám administraci naživo na vašem budoucím webu.",
    ctaButton: "Napsat mi",
  },

  cookies: {
    title: "Tento web používá cookies",
    description:
      "Používáme nezbytné cookies pro fungování webu a volitelně analytické cookies (Google Analytics) pro lepší pochopení návštěvnosti. Souhlas můžete kdykoliv změnit v patičce.",
    settings: "Nastavení",
    reject: "Odmítnout",
    accept: "Přijmout vše",
    panelTitle: "Nastavení cookies",
    panelSubtitle: "Vyberte, které cookies smíme používat.",
    closeSettings: "Zavřít nastavení",
    necessary: "Nezbytné",
    necessaryBadge: "vždy aktivní",
    necessaryDesc:
      "Bez nich web nemůže správně fungovat (např. uložení vašeho rozhodnutí o cookies).",
    analytics: "Analytické",
    analyticsDesc:
      "Google Analytics — anonymní statistiky o návštěvnosti, které nám pomáhají web zlepšovat.",
    rejectAll: "Odmítnout vše",
    save: "Uložit volbu",
  },
};

export default cs;
