import { appLoginUrl, ororaSoftAboutUrl } from "./shared";

export const enLandingContent = {
  common: {
    tryForFree: "Try for free",
    downloadMemoApp: "Download MemoApp",
    startWithMemoApp: "Start with MemoApp",
    tryDemo: "Try demo account",
    exploreFeatures: "Explore features",
    reviewFeatures: "Review features",
    contactMemoApp: "Contact MemoApp",
    menuLabel: "Menu",
    languageLabel: "Language",
    menuNavigationLabel: "Pages",
    menuLegalLabel: "Legal",
    productBy: "A product of",
    copyright: "All rights reserved.",
    talkWithUs: "Talk with us",
    talkWithUsMessage: "Hello MemoApp team, I would like to talk with you.",
  },
  footer: {
    description:
      "AI-powered business management software for Bangladeshi shops — billing, inventory, dues, reports, and backup in one place.",
    productTitle: "Product",
    companyTitle: "Company & support",
    officeTitle: "Office",
    legalTitle: "Trust & legal",
    contactTitle: "Need help choosing a plan?",
    contactDescription:
      "Talk with the MemoApp team about setup, pricing, or the right workflow for your shop.",
    emailSupport: "Email support",
    whatsappSupport: "WhatsApp support",
    whatsappMessage: "Hello MemoApp team, I need help choosing a MemoApp plan.",
    tryForFree: "Try MemoApp free",
    developedBy: "Developed and maintained by OroraSoft.",
    followUsTitle: "Follow us",
    productBy: "A product of OroraSoft",
    productLinks: [
      { label: "Home", href: "/", external: false },
      { label: "Features", href: "/features", external: false },
      { label: "Workflow", href: "/workflow", external: false },
      { label: "Pricing", href: "/pricing", external: false },
      { label: "FAQ", href: "/faq", external: false },
    ],
    companyLinks: [
      { label: "About Us", href: ororaSoftAboutUrl, external: true },
      { label: "Start free", href: appLoginUrl, external: true },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy", external: false },
      {
        label: "Terms of Service",
        href: "/terms-of-service",
        external: false,
      },
    ],
  },
  hero: {
    eyebrow: "Built for BD SMEs and modern retail counters",
    title: "Your Business Assistant, Inventory Manager, and POS — All in One",
    titlePrefix: "Your Business Assistant, Inventory Manager, and POS",
    titleHighlight: "All-in-One",
    description:
      "Bill in seconds, track stock in real time, collect dues without chasing, and see what's selling — all from one counter app built for Bangladeshi businesses. Start free for 30 days.",
  },
  heroStats: [
    { value: "৳48,320", label: "today's counter sales" },
    { value: "৳11,420", label: "estimated profit today" },
    { value: "12 items", label: "low-stock products" },
    { value: "৳38K", label: "customer baki due" },
    { value: "5 days", label: "predicted stockout" },
    { value: "3 actions", label: "AI suggested tasks" },
  ],
  stats: [
    { value: "All-in-One", label: "business management platform" },
    { value: "AI", label: "AI powered insights & automation" },
    { value: "10x", label: "faster billing & invoicing" },
    { value: "24/7", label: "sales monitoring anywhere" },
    { value: "360°", label: "complete business control" },
    { value: "Real-time", label: "inventory & profit tracking" },
  ],
  trusted: {
    eyebrow: "Trusted by Bangladeshi businesses",
    title: "Built for 100+ ambitious shops and business teams",
    description:
      "MemoApp is shaped around the daily needs of local retailers, wholesalers, and service businesses.",
    metrics: [
      { value: "100+", label: "businesses supported" },
      { value: "24/7", label: "sales visibility" },
      { value: "AI", label: "assistant-ready operations" },
      { value: "360°", label: "billing, stock, dues, reports" },
    ],
  },
  featuresHeading: {
    eyebrow: "Everything a shop needs",
    title: "A complete retail operating system, not just billing software.",
    description:
      "MemoApp connects the daily counter with the back-office details owners need: sales, stock, customers, suppliers, staff, and cash visibility.",
  },
  featureCards: [
    {
      title: "Counter-fast POS billing",
      description:
        "Create memos, invoices, quotations, and challans with a flow built for real retail counters.",
      badge: "POS",
    },
    {
      title: "Inventory that stays useful",
      description:
        "Track products, categories, stock in/out, purchase history, and low-stock signals before shelves go empty.",
      badge: "Stock",
    },
    {
      title: "Customer dues without confusion",
      description:
        "Maintain customer ledgers, collect baki payments, and understand who owes what at a glance.",
      badge: "Dues",
    },
    {
      title: "Purchases and suppliers",
      description:
        "Keep supplier ledgers, payable records, purchase bills, expenses, and cashflow sessions in one place.",
      badge: "Ledger",
    },
    {
      title: "Reports owners can act on",
      description:
        "See sales, profit, cash, inventory value, and due trends without waiting for manual spreadsheets.",
      badge: "Reports",
    },
    {
      title: "AI assistant for shop decisions",
      description:
        "Ask business questions in plain language and get guidance on stock, dues, sales trends, and next actions.",
      badge: "AI",
    },
    {
      title: "Full Bangla language support",
      description:
        "Let teams work comfortably in English, Bangla, or Banglish with local shop terms that feel familiar.",
      badge: "Bangla",
    },
    {
      title: "Export and backup your shop data",
      description:
        "Export customers, products, memos, and reports so you keep portable copies of important business records.",
      badge: "Export",
    },
    {
      title: "Automatic due reminders",
      description:
        "Help customers remember baki payments with clear due reminders that support healthier cash collection.",
      badge: "Reminder",
    },
    {
      title: "Business notes you can share",
      description:
        "Create quick shop notes, save them automatically, and share important updates with the right people.",
      badge: "Notes",
    },
    {
      title: "Social sharing made simple",
      description:
        "Share memos, business updates, and customer-ready information across common social channels faster.",
      badge: "Share",
    },
    {
      title: "Employee management",
      description:
        "Organize staff records, salary workflows, and role-aware operations as your shop team grows.",
      badge: "Team",
    },
  ],
  workflowHeading: {
    eyebrow: "Daily flow",
    title: "Designed for the rhythm of a real shop day.",
    description:
      "From opening cash to the final report, MemoApp keeps busy selling moments simple and gives owners the clarity to make better decisions.",
  },
  workflowSteps: [
    {
      step: "01",
      title: "Open counter",
      description:
        "Start the day with cashflow visibility, product shortcuts, and ready-to-use memo actions.",
    },
    {
      step: "02",
      title: "Sell, collect, sync",
      description:
        "Record sales, partial payments, and customer dues even when internet quality is uneven.",
    },
    {
      step: "03",
      title: "Review the business",
      description:
        "Close the day with reports, low-stock alerts, expense context, and owner-ready insights.",
    },
  ],
  showcase: {
    eyebrow: "Set up in minutes",
    title: "Bring your whole shop into MemoApp in minutes, not days.",
    description:
      "Start from the data you already have. Import customers, products, and purchase records in a few clicks, then control exactly who on your team can see and do what.",
    dashboardLabel: "Live dashboard preview",
    points: [
      {
        tag: "Bulk import",
        title: "Import customers from Excel or CSV",
        description:
          "Upload a customer spreadsheet and bulk-create ledgers in seconds — no manual typing.",
      },
      {
        tag: "Under 30 seconds",
        title: "Upload products & purchases from Excel",
        description:
          "Import products, purchases, or any record from your own Excel file in about 30 seconds.",
      },
      {
        tag: "Role-based",
        title: "Give the right access to each person",
        description:
          "Invite owners, managers, and staff, and control exactly what each person can view and do.",
      },

      {
        tag: "Offline-first",
        title: "Keep selling when the internet drops",
        description:
          "Billing and stock updates keep working during network issues, then sync when you are back online.",
      },
    ],
  },
  posPreview: {
    eyebrow: "Point of sale",
    title: "A counter built for speed, even on the busiest day.",
    description:
      "MemoApp's POS keeps every sale fast and accurate — scan products, juggle multiple bills, take any payment type, and print a memo in seconds.",
    previews: [
      {
        src: "/FashionPOS.png",
        label: "Fashion",
        alt: "MemoApp fashion store POS with clothing products, bill tabs, and checkout.",
      },
      {
        src: "/GrosaryPOS.png",
        label: "Grocery",
        alt: "MemoApp grocery POS with product grid, categories, stock counts, and current bill.",
      },
      {
        src: "/medicinePOS.png",
        label: "Pharmacy",
        alt: "MemoApp pharmacy POS showing medicine cards, MRP, stock, and payment options.",
      },
      {
        src: "/ResturentPOS.png",
        label: "Restaurant",
        alt: "MemoApp restaurant POS with menu items, multi-bill tabs, and table checkout.",
      },
    ],
    cards: [
      {
        tag: "Find fast",
        title: "Scan or search any product",
        description:
          "Scan a barcode or search by name, filter by category, and add items to the bill with live stock counts always in view.",
      },
      {
        tag: "Multi-bill",
        title: "Serve many customers at once",
        description:
          "Park and resume orders with Bill 1, Bill 2, and more, so a paused sale never blocks the next customer in line.",
      },
      {
        tag: "Any payment",
        title: "Cash, due, or mixed in one tap",
        description:
          "Take cash, put it on baki, or split across methods. Tendered cash, change, discount, and tax are calculated for you.",
      },
      {
        tag: "Print ready",
        title: "Save & print with one shortcut",
        description:
          "Close a sale with Ctrl+S or Ctrl+P — the memo prints instantly while stock and reports update in the background.",
      },
    ],
  },
  pricingHeading: {
    eyebrow: "Plans for every stage",
    title:
      "Simple packaging for small shops, busy counters, and growing teams.",
    description:
      "Start with the free plan for 30 days, then choose a paid plan in the live app. Upgrade anytime as your shop adds staff, reports, AI, and backup.",
  },
  pricingBenefits: [
    "Invoices",
    "Stock",
    "Collections",
    "Purchasing",
    "Insights",
    "AI",
  ],
  billing: {
    monthly: "Monthly",
    yearly: "Yearly",
    saveLabel: "Save 10%",
    yearlyBenefit:
      "Yearly billing charges for 10 months while you use 12 months - two bonus months baked in.",
    wasLabel: "Was",
  },
  trialBanner: {
    title: "Start with the free plan",
    subtitle: "Explore MemoApp free for 30 days before you choose a paid plan.",
    badge: "30 days free",
  },
  homeFreeCta: {
    eyebrow: "Start free",
    title: "Run your whole shop, free for 30 days.",
    description:
      "Try MemoApp with Zero Cost. See how billing, stock, dues, and reports work for your shop, then choose a plan only when you are ready.",
    benefits: [
      {
        title: "Faster billing at the counter",
        description:
          "Create memos and invoices in seconds so your queue keeps moving during the busiest hours.",
      },
      {
        title: "Never lose track of dues",
        description:
          "See who owes what, collect baki, and send reminders so your cash keeps coming in.",
      },
      {
        title: "Stock clarity without counting",
        description:
          "Know what is running low and what to restock before your shelves go empty.",
      },
      {
        title: "Decisions backed by reports and AI",
        description:
          "Understand sales, profit, and trends, and ask the AI assistant what to do next.",
      },
    ],
    primaryCta: "Start free for 30 days",
    secondaryCta: "See full pricing",
  },
  paidPlansHeading: {
    title: "Paid plans",
    subtitle:
      "Choose the plan that fits your shop — upgrade anytime as your team and data grow.",
  },
  pricingPlans: [
    {
      name: "Free",
      price: "Free",
      term: "30 days",
      yearly: "Explore before choosing a paid plan",
      description:
        "Try MemoApp with guided access to core shop workflows before your team commits.",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      yearlyWasPrice: "",
      monthlyTerm: "30 days",
      yearlyTerm: "30 days",
      target: "New shops · first-time setup · early exploration",
      blurb:
        "Try onboarding, invoicing, catalog, dues, expense tracking, and baseline reports — free for 30 days.",
      cta: "Get started free",
      yearlyNote: "Free access stays active while you explore MemoApp.",
      teamSeats: "1 team member",
      features: [
        "30 days of full free access to set up your shop",
        "Try memos, stock, dues, reports, notes, team pages, and AI",
        "Experience core shop workflows — billing, inventory, purchases, and suppliers",
        "Start free with no credit card — upgrade when your shop is ready",
        "Upgrade anytime with digital payments",
      ],
      highlighted: false,
      badge: "Start",
    },
    {
      name: "Basic",
      price: "৳499",
      term: "/month",
      yearly: "৳4,990/year",
      description:
        "For one-owner shops that need clean billing, stock, and dues.",
      monthlyPrice: "৳499",
      yearlyPrice: "৳4,990",
      yearlyWasPrice: "৳5,988",
      monthlyTerm: "/month",
      yearlyTerm: "/year",
      target: "Small shops · grocery · mini mart · pharmacy",
      blurb:
        "Run one shop confidently with dashboards, dues, backups, and smart data limits sized for a single counter.",
      cta: "Get started",
      yearlyNote: "2 months free yearly",
      teamSeats: "1 team member",
      features: [
        "Create memos, customers, dues, and stock",
        "Purchases, suppliers, cashflow, and expenses",
        "Core dashboard and daily shop controls",
        "Limited data import sized for one shop",
      ],
      highlighted: false,
      badge: "Basics",
    },
    {
      name: "Growth",
      price: "৳1,199",
      term: "/month",
      yearly: "৳11,990/year",
      description:
        "For growing shops adding their first manager and staff logins.",
      monthlyPrice: "৳1,199",
      yearlyPrice: "৳11,990",
      yearlyWasPrice: "৳14,388",
      monthlyTerm: "/month",
      yearlyTerm: "/year",
      target: "Growing shops adding their first team members",
      blurb:
        "Add staff with role-based logins, plus reports, AI, and import/export for a busy counter.",
      cta: "Choose growth",
      yearlyNote: "2 months free yearly",
      teamSeats: "Up to 3 team members",
      features: [
        "Employee management: add a manager and a staff member, each with role-based login",
        "Reports, notes, and the AI assistant",
        "Import, export, and download operational data from any grid",
        "Higher data limits for a growing, busy counter",
        "Everything in Basic, built for shops adding their first team",
      ],
      highlighted: false,
      badge: "Team",
    },
    {
      name: "Business",
      price: "৳2,499",
      term: "/month",
      yearly: "৳24,990/year",
      description:
        "For established teams that need unlimited records, full employee roles, and priority support.",
      monthlyPrice: "৳2,499",
      yearlyPrice: "৳24,990",
      yearlyWasPrice: "৳29,988",
      monthlyTerm: "/month",
      yearlyTerm: "/year",
      target: "Established shops running a team across multiple counters",
      blurb:
        "For businesses with staff — unlimited records, full employee roles, and the deepest insights.",
      cta: "Upgrade to Business",
      yearlyNote: "2 months free yearly",
      teamSeats: "Up to 6 team members",
      features: [
        "Everything in Growth, with no limits and a full team setup",
        "Multiple owners, managers, and staff with role-based access",
        "Unlimited memos, customers, products, purchases, and notes",
        "Advanced reporting, AI insights, and import/export",
        "Automatic backups and premium storage",
        "Priority support for multi-counter operations",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      term: "",
      yearly: "Tailored pricing for chains and wholesalers",
      description: "For chains, wholesalers, and multi-branch operations.",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      yearlyWasPrice: "",
      monthlyTerm: "",
      yearlyTerm: "",
      target: "Chains, wholesalers, and multi-branch operations",
      blurb:
        "Dedicated onboarding, SLAs, custom integrations, and infrastructure for large operations.",
      cta: "Contact sales",
      ctaHref:
        "https://wa.me/8801835623863?text=Hello%20MemoApp%20team%2C%20I%20would%20like%20to%20discuss%20an%20Enterprise%20plan.",
      yearlyNote: "Talk with MemoApp for a tailored quote.",
      features: [
        "Custom onboarding playbook",
        "Dedicated support desk + SLA carve-outs",
        "Custom integrations (ERP/banks/logistics)",
        "Dedicated infrastructure option",
        "Hands-on cashier and HQ training",
        "Custom permissions and reporting",
      ],
      highlighted: false,
      badge: "Enterprise",
    },
  ],
  testimonialsHeading: {
    eyebrow: "Built around shop owners",
    title: "A product story that speaks to real retail pain.",
    description:
      "The page focuses on outcomes buyers understand quickly: faster billing, tighter dues control, stock confidence, and clear daily reports.",
    scrollHint: "Browse real shop-owner feedback one story at a time",
    reviewLabel: "Show product story",
    previousLabel: "Show previous product story",
    nextLabel: "Show next product story",
  },
  testimonials: [
    {
      quote:
        "MemoApp feels designed around the way local shops actually sell, collect dues, and check stock.",
      name: "Retail owner",
      role: "Grocery and daily needs",
    },
    {
      quote:
        "The best part is seeing counter sales, baki collection, and inventory together instead of in separate notebooks.",
      name: "Operations manager",
      role: "Multi-counter store",
    },
    {
      quote:
        "Honest feedback: I did not know any software in Bangladesh could give this kind of facility for a small shop.",
      name: "Shop owner",
      role: "Grocery store · Narayanganj",
    },
    {
      quote:
        "Before this, we checked stock by memory. Now I can see which items are low before customers ask for them.",
      name: "Retail owner",
      role: "Daily needs shop · Chattogram",
    },
    {
      quote:
        "My staff can make bills quickly, and I can still understand sales and dues from outside the shop.",
      name: "Business owner",
      role: "Hardware shop · Gazipur",
    },
    {
      quote:
        "It feels made for Bangladeshi shops because it understands baki, daily cash, stock pressure, and simple counter work.",
      name: "Owner-operator",
      role: "Pharmacy and retail · Dhaka",
    },
  ],
  faqHeading: {
    eyebrow: "Questions",
    title: "Clear answers for early landing page visitors.",
    description:
      "A quick preview of common MemoApp questions. Visit the FAQ page for the full list on setup, billing, inventory, dues, and plans.",
    viewAllLabel: "Browse all FAQs",
  },
  homeFaqs: [
    {
      question: "Is MemoApp only a POS system?",
      answer:
        "No. Counter billing is one part of MemoApp. It is AI-powered business management software that also covers inventory, customers, dues, suppliers, purchases, expenses, reports, and AI-assisted insights.",
    },
    {
      question: "What is MemoApp and who is it for?",
      answer:
        "MemoApp is business management software for Bangladeshi retailers — grocery, pharmacy, hardware, wholesale, and general stores that need billing, stock, dues, and reports in one place.",
    },
    {
      question: "Can my shop work when the internet is unstable?",
      answer:
        "Yes. MemoApp is designed around offline-friendly workflows, so key counter work can continue and sync when the connection returns.",
    },
    {
      question: "Can I track customer dues and collections?",
      answer:
        "Yes. Customer ledgers, due balances, payments, and WhatsApp or SMS reminders help shops keep collection work organized.",
    },
    {
      question: "Which plan should I start with?",
      answer:
        "Start with the free 30-day plan to explore. Basic fits smaller shops, Growth is best for busy counters adding their first team, and Business suits established multi-counter teams.",
    },
    {
      question: "Does MemoApp support Bangla?",
      answer:
        "Yes. MemoApp is built for local teams with English, Bangla, and Banglish-friendly usage across important shop workflows.",
    },
  ],
  finalCta: {
    eyebrow: "Get started",
    title: "Start managing your shop with MemoApp",
    description:
      "Create your shop account, try core workflows free for 30 days, and upgrade when your counter, team, and reports need more.",
  },
  routeHeroes: {
    features: {
      eyebrow: "Features",
      title:
        "Complete shop management — billing, inventory, dues, and reports in one trusted app.",
      description:
        "MemoApp brings counter billing, stock control, customer dues, supplier purchases, team access, and owner reports together in a modern web app built for Bangladeshi retailers.",
    },
    workflow: {
      eyebrow: "MemoApp workflow | memo app bd",
      title:
        "How the memo app runs your shop day — from first sale to closing report.",
      description:
        "See how MemoApp supports onboarding, counter billing, baki collection, restocking, and owner reporting in a daily rhythm designed for real Bangladesh retail teams.",
    },
    pricing: {
      eyebrow: "Simple pricing",
      title: "Simple pricing for every business size.",
      description:
        "Track sales, stock, dues, purchases, suppliers, expenses, P&L, and AI from one plan that grows with your shop.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Clear answers for shop owners considering MemoApp.",
      description:
        "Setup, billing, inventory, customer dues, pricing, offline sync, and support — straightforward answers for Bangladeshi retailers.",
    },
  },
  workflowHighlights: [
    {
      title: "Fast at the counter",
      description:
        "Create memos, accept payments, update dues, and share customer-ready documents without slowing the queue.",
    },
    {
      title: "Reliable after the sale",
      description:
        "Inventory, customer ledgers, supplier purchases, and expenses stay connected to the day-to-day sales flow.",
    },
    {
      title: "Clear for the owner",
      description:
        "Reports, low-stock signals, cashflow, and AI questions help owners understand what happened and what to do next.",
    },
  ],
  whyMemoApp: [
    {
      title: "Built for BD SMEs",
      description:
        "Pricing and product tiers are shaped around grocery, pharmacy, hardware, and service shops.",
    },
    {
      title: "Upgrade when ready",
      description:
        "Start with counter billing and grow into reports, AI, auto backup, and team workflows.",
    },
    {
      title: "Simple buying path",
      description:
        "Use the live app login to start free access and choose the right plan from your account.",
    },
  ],
  featuresRoute: {
    platformSection: {
      eyebrow: "How you run MemoApp",
      title: "Modern, web-based, and ready on any device",
      description:
        "MemoApp is a full web application with a clean counter interface — fast like installed software, accessible from anywhere, and installable on phone, tablet, or desktop with confidence.",
      items: [
        {
          title: "Modern interface",
          description:
            "A clear, uncluttered layout built for busy counters — find products, bill faster, and read reports without fighting the screen.",
        },
        {
          title: "Web-based, native feel",
          description:
            "Runs in your browser but behaves like desktop software — quick loading, smooth navigation, and PWA install when you want an app on your home screen.",
        },
        {
          title: "Run from anywhere",
          description:
            "Log in from the shop, home, or on the go. Your data stays synced so owners and staff use the device that fits the moment.",
        },
        {
          title: "Install on any device",
          description:
            "Use MemoApp in the browser or install it on Android, iPhone, tablet, or PC — one account, the same shop data every time.",
        },
      ],
    },
    setupJourney: {
      eyebrow: "Feature details",
      title: "Open your shop and start selling in minutes",
      description:
        "MemoApp is built so a new shop can go from signup to first POS sale quickly — import products and customers instead of typing everything by hand.",
      underOneMinuteLabel: "Under 1 minute",
      shopDemo: {
        shopNameLabel: "Shop name",
        shopName: "Rahim & Sons Grocery",
        phoneLabel: "Phone",
        phone: "017XX-XXXXXX",
        categoryLabel: "Category",
        category: "Grocery",
        roleLabel: "Your role",
        role: "Owner",
        createdLabel: "Shop created",
      },
      posDemo: {
        header: "MemoApp POS",
        currentMemo: "Current memo",
        synced: "Synced",
        due: "Due",
        shareButton: "Print / Share memo",
      },
      importChrome: {
        productsTitle: "Import products",
        customersTitle: "Import customers",
        browseLabel: "Browse files",
        uploadingLabel: "Importing rows…",
        completeLabel: "Import complete",
        mappedLabel: "Columns matched automatically",
        productColumns: ["Name", "Price", "Stock", "Unit"],
        customerColumns: ["Name", "Phone", "Email"],
      },
      steps: [
        {
          step: "01",
          title: "Open your shop",
          description:
            "Create your shop profile with name, phone, address, and category — ready for products and customers next.",
          highlights: [
            "Owner or manager setup in a few fields",
            "Your shop workspace is ready for import and POS",
          ],
          visual: "shop",
        },
        {
          step: "02",
          title: "Upload products from Excel or CSV",
          description:
            "Drag your product list in or download the template, fill it in, and import stock, prices, and units in under a minute.",
          highlights: [
            "Excel and CSV supported",
            "Bulk stock, price, and units in one import",
          ],
          visual: "products",
          dropZoneTitle: "Drop Excel or CSV here",
          dropZoneHint: "Drag a file in, or click to browse",
          downloadTemplateLabel: "Download import template",
          successMessage: "52 products imported · 48 seconds",
          exampleFile: "shop-products.xlsx",
        },
        {
          step: "03",
          title: "Add customers from Excel or CSV",
          description:
            "Upload a customer spreadsheet to bulk-create ledgers — no manual typing.",
          highlights: [
            "Excel and CSV supported",
            "Bulk customer records in one import",
          ],
          visual: "customers",
          dropZoneTitle: "Drop customer Excel/CSV here",
          dropZoneHint: "Drag a file in, or click to browse",
          successMessage: "38 customers imported · 41 seconds",
          exampleFile: "customer-list.csv",
        },
        {
          step: "04",
          title: "Start selling on POS",
          description:
            "Bill at the counter, record cash or baki, and print or share memos — stock and reports update with every sale.",
          highlights: [
            "Barcode search and multi-bill tabs",
            "Stock updates automatically with each sale",
          ],
          visual: "pos",
        },
      ],
    },
    trustStripEyebrow: "Why memo app bd",
    trustStripTitle:
      "Built for Bangladesh retail, not generic billing software",
    trustStripDescription:
      "MemoApp is shaped for local shop counters, payment habits, and languages — not imported billing tools that ignore baki, bKash, and offline reality.",
    trustStripItems: [
      {
        title: "Offline-first counter",
        description:
          "Sell and record memos when internet drops — memoapp syncs your shop data when the connection returns.",
      },
      {
        title: "Bangla & Banglish ready",
        description:
          "Switch UI language and ask AI questions in the language your team actually speaks at the counter.",
      },
      {
        title: "BDT pricing & local payments",
        description:
          "Plans in taka with bKash and Nagad support for dues, supplier payments, and membership.",
      },
      {
        title: "Sector-fit for BD shops",
        description:
          "Designed for grocery, pharmacy, hardware, electronics, wholesale, and general retail counters.",
      },
    ],
    audienceEyebrow: "Best-fit shops",
    audienceTitle: "Who can use MemoApp?",
    audienceDescription:
      "MemoApp is flexible enough for many Bangladeshi retail and service businesses that need billing, stock, customers, and reports in one place.",
    audiences: [
      {
        title: "Grocery and daily needs shops",
        description:
          "Fast item selection, due sales, and stock visibility for busy everyday counters.",
      },
      {
        title: "Pharmacy and healthcare retailers",
        description:
          "Product organization, purchase tracking, and clear sales records for high-SKU shops.",
      },
      {
        title: "Hardware and electronics stores",
        description:
          "Supplier purchases, quotation-style selling, and detailed inventory control.",
      },
      {
        title: "Wholesale and distribution counters",
        description:
          "Customer ledgers, bulk sales, payable records, and owner-level reporting.",
      },
      {
        title: "Service shops and local businesses",
        description:
          "Invoices, customer history, team records, expenses, and business notes.",
      },
      {
        title: "Restaurants and food businesses",
        description:
          "Menu-based billing, daily sales tracking, ingredient stock, and customer payment records.",
      },
    ],
    faqEyebrow: "Feature FAQ",
    faqTitle: "Common feature questions from shop owners",
    faqDescription:
      "Short answers for shop owners comparing MemoApp with notebooks, spreadsheets, and basic billing tools.",
    faqs: [
      {
        question: "Can MemoApp replace my sales notebook and Excel sheet?",
        answer:
          "Yes. MemoApp keeps memos, products, customers, dues, purchases, expenses, and reports together so owners do not need separate notebooks for daily shop data.",
      },
      {
        question: "Does MemoApp help if customers buy on baki?",
        answer:
          "Yes. Customer ledgers show due balances and payment history, while WhatsApp and SMS reminders help the team follow up more consistently.",
      },
      {
        question: "Can I understand stock without counting everything daily?",
        answer:
          "MemoApp connects sales and purchases to inventory, so owners monitor quantities, low-stock signals, and purchase context without starting from a blank spreadsheet.",
      },
      {
        question: "Can I use MemoApp on mobile at the counter?",
        answer:
          "Yes. MemoApp is a web app that works on phones, tablets, and desktops — ideal for counters that need billing on the shop floor.",
      },
      {
        question: "Does MemoApp support thermal receipt printing in Bangla?",
        answer:
          "Yes. MemoApp supports 58mm and 80mm thermal printer setup. Bangla print quality depends on your printer model — check Settings for printer configuration guidance.",
      },
      {
        question: "Can I import products or customers from Excel?",
        answer:
          "Yes. MemoApp supports import and export workflows so shops can migrate from spreadsheets or share data with accountants.",
      },
      {
        question: "Does MemoApp adapt to different business types?",
        answer:
          "Yes. When you set your shop category — grocery, pharmacy, restaurant, hardware, or wholesale — MemoApp adjusts the layout and shortcuts to match how that business sells. Your team sees the right screens from day one, without menus and tools that do not fit your counter.",
      },
      {
        question: "Can I control what staff and managers can access?",
        answer:
          "Yes. Invite team members as owner, manager, or staff, and choose which pages each role can open — from counter billing and customer lookup to purchases, reports, and settings. Staff stay focused on their work while owners keep full business visibility.",
      },
      {
        question: "How do I pay for a MemoApp membership with bKash?",
        answer:
          "Paid plans can be activated through manual bKash payment. Contact MemoApp support or use the in-app membership flow to confirm current payment steps and activation timing.",
      },
      {
        question: "Which plan should I choose for these features?",
        answer:
          "Start with the free plan if you are exploring. Basic fits smaller shops, Growth is better for busy counters adding their first team, and Business is best for established multi-counter teams that need unlimited records, backup, and priority support.",
      },
    ],
    ctaTitle: "See how these MemoApp features work during a real shop day",
    ctaDescription:
      "Review the workflow page for the daily operating flow, browse the FAQ, or compare pricing to choose the right plan for your counter.",
    workflowLink: "See the daily workflow",
    pricingLink: "Compare pricing plans",
    faqLink: "Browse all FAQs",
  },
  workflowRoute: {
    seoIntro:
      "This is the memo app bd daily workflow — how MemoApp supports real Bangladesh shop operations from first setup through counter sales, baki collection, restocking, and owner reporting.",
    onboardingEyebrow: "Getting started",
    onboardingTitle: "First sale in under 30 minutes",
    onboardingDescription:
      "New memoapp shops follow a simple onboarding path before the daily counter rhythm begins.",
    onboardingSteps: [
      {
        step: "A",
        title: "Create your shop profile",
        description:
          "Add shop name, phone, address, category, and your role as owner or manager.",
      },
      {
        step: "B",
        title: "Add your first products",
        description:
          "Enter product name, sale price, stock quantity, unit, and optional barcode or photo.",
      },
      {
        step: "C",
        title: "Add a customer",
        description:
          "Create walk-in or regular customers manually, or import them from Excel or CSV.",
      },
      {
        step: "D",
        title: "Create your first memo",
        description:
          "Bill at the counter, record payment or baki, and print or share the memo to the customer.",
      },
    ],
    timelineEyebrow: "Full-day workflow",
    timelineTitle: "From opening counter to evening report",
    timelineDescription:
      "MemoApp follows the way a Bangladesh shop actually runs — each counter action updates the records owners need later.",
    timeline: [
      {
        step: "01",
        title: "Open the counter",
        description:
          "Start the day with product shortcuts, opening cash context, and ready memo actions for the first customers.",
        featureLabel: "POS billing and cash visibility",
        featureHref: "/features#feature-details",
      },
      {
        step: "02",
        title: "Sell and print or share memos",
        description:
          "Create paid, partial paid, or due sales and send customer-ready memos through thermal print, PDF, or WhatsApp.",
        featureLabel: "Memos, invoices, and sharing",
        featureHref: "/features#feature-details",
      },
      {
        step: "03",
        title: "Let stock update with the sale",
        description:
          "Product quantities stay connected to counter activity, helping owners see low-stock risk earlier.",
        featureLabel: "Inventory and low-stock alerts",
        featureHref: "/features#feature-details",
      },
      {
        step: "04",
        title: "Collect dues and record purchases",
        description:
          "Customer baki, supplier purchases, and payable context stay organized beside the daily sales flow.",
        featureLabel: "Customer and supplier ledgers",
        featureHref: "/features#feature-details",
      },
      {
        step: "05",
        title: "Add expenses and business notes",
        description:
          "Record daily costs, team notes, and important shop updates before details are forgotten.",
        featureLabel: "Expenses and business notes",
        featureHref: "/features#feature-details",
      },
      {
        step: "06",
        title: "Review reports, sync, and back up",
        description:
          "Close the day with sales, profit, dues, stock, AI guidance, and sync status.",
        featureLabel: "Reports, AI, sync, and backup",
        featureHref: "/features#feature-details",
      },
    ],
    bakiFlowEyebrow: "Baki collection",
    bakiFlowTitle: "How MemoApp handles customer due (baki) work",
    bakiFlowDescription:
      "Credit sales are common in Bangladesh retail — memoapp keeps baki visible and collectible without a separate notebook.",
    bakiFlowSteps: [
      {
        title: "Due accrues from credit memos",
        description:
          "When a customer buys on baki, the memo records the due balance on their ledger automatically.",
      },
      {
        title: "Aging and risk visibility",
        description:
          "The Due page shows aging buckets and warning status so owners know who needs follow-up first.",
      },
      {
        title: "Collect via cash or mobile money",
        description:
          "Record full or partial collection through cash, bKash, Nagad, card, or bank transfer.",
      },
      {
        title: "Remind customers professionally",
        description:
          "Send WhatsApp reminders or enable SMS auto-reminders (paid add-on) at Bangladesh-friendly times.",
      },
    ],
    restockFlowEyebrow: "Restock loop",
    restockFlowTitle: "From low stock to shelf refill",
    restockFlowDescription:
      "MemoApp connects sales, alerts, purchases, and supplier payments into one restock rhythm.",
    restockFlowSteps: [
      {
        title: "Low-stock signal on dashboard",
        description:
          "Sales and reorder points trigger alerts before important items run out.",
      },
      {
        title: "Create a supplier purchase",
        description:
          "Record purchase line items, quantities, and costs — stock increases when the purchase is saved.",
      },
      {
        title: "Track supplier payable",
        description:
          "Pay suppliers via cash, bKash, Nagad, or bank and keep payable balances accurate.",
      },
      {
        title: "Shelf ready for next sale",
        description:
          "Updated stock flows back to the POS counter for the next customer.",
      },
    ],
    rolesEyebrow: "Team clarity",
    rolesTitle: "Different roles see the work they need",
    rolesDescription:
      "MemoApp keeps counter speed simple for staff while giving owners the wider visibility needed to make decisions.",
    roles: [
      {
        title: "Owner",
        description:
          "Full business visibility: sales, profit, dues, stock value, expenses, reports, AI, team settings, and backup.",
        permissions: [
          "Approve plans and team invites",
          "View all reports and exports",
          "Manage exports, team settings, and shop configuration",
        ],
      },
      {
        title: "Cashier",
        description:
          "Counter-focused access for fast memo creation, payment collection, due recording, printing, and sharing.",
        permissions: [
          "Create and print memos",
          "Record cash and due payments at counter",
          "Search products and customers quickly",
        ],
      },
      {
        title: "Manager",
        description:
          "Back-office support: purchases, suppliers, low-stock checks, employee operations, and daily closing context.",
        permissions: [
          "Manage purchases and supplier payments",
          "Review inventory and low-stock lists",
          "Support team records and daily closing",
        ],
      },
    ],
    ctaTitle: "Choose the plan that matches your shop workflow",
    ctaDescription:
      "Small shops can start simple, while busy counters and growing teams can add stronger reports, AI, backup, and staff features.",
    pricingLink: "Compare MemoApp pricing",
    featuresLink: "Explore MemoApp features",
  },
  pricingRoute: {
    comparisonEyebrow: "Plan comparison",
    comparisonTitle: "Compare what each MemoApp plan includes",
    comparisonDescription:
      "Use this table to quickly match your shop size with the billing, inventory, dues, reports, AI, backup, and team features you need.",
    comparisonColumns: [
      "Feature",
      "Free",
      "Basic",
      "Growth",
      "Business",
      "Enterprise",
    ],
    comparisonRows: [
      {
        feature: "Invoices & memos",
        trial: "Free plan quotas",
        basic: "Up to 200 core records",
        growth: "500 core records + exporters",
        pro: "Unlimited records",
        enterprise: "Custom negotiated volumes",
      },
      {
        feature: "Access accounts",
        trial: "1 owner account",
        basic: "1 owner account",
        growth: "1 owner, 1 manager, 1 staff",
        pro: "2 owners, 1 manager, 3 staff",
        enterprise: "Custom access policy",
      },
      {
        feature: "Staff seats",
        trial: "No staff invites",
        basic: "No staff invites",
        growth: "1 manager + 1 staff (employee management)",
        pro: "3 staff accounts",
        enterprise: "Unlimited + onboarding squads",
      },
      {
        feature: "Backups & storage",
        trial: "Standard snapshots",
        basic: "Rolling basic backups",
        growth: "More frequent restores",
        pro: "Priority retention tiers",
        enterprise: "Dedicated retention playbook",
      },
      {
        feature: "AI assistant",
        trial: "—",
        basic: "—",
        growth: "Assistant basics included",
        pro: "Insight accelerators",
        enterprise: "Custom AI concierge",
      },
      {
        feature: "Analytics",
        trial: "Summary tiles",
        basic: "Daily dashboard",
        growth: "P&L-ready drilldowns",
        pro: "Advanced shop KPIs",
        enterprise: "Bespoke dashboards",
      },
      {
        feature: "Reporting packs",
        trial: "Essential summaries",
        basic: "Daily PDFs/email",
        growth: "Advanced PDF/XLS tooling",
        pro: "Board-grade packs",
        enterprise: "White-label CFO kits",
      },
      {
        feature: "Export (PDF / Excel)",
        trial: "Core exports only",
        basic: "Core CSV/PDF bundles",
        growth: "High fidelity PDF/XLS combos",
        pro: "High-volume automation",
        enterprise: "Custom streaming feeds",
      },
      {
        feature: "Support level",
        trial: "Self-serve FAQ",
        basic: "Email (~48h)",
        growth: "Priority (<24h targets)",
        pro: "Named priority queue",
        enterprise: "24/7 SLA-backed desks",
      },
      {
        feature: "Roles & permissions",
        trial: "Owner-eval sandbox",
        basic: "Owner + cashier segregation",
        growth: "Employee management with manager & staff roles",
        pro: "Full employee management & role-based access",
        enterprise: "Custom policy trees",
      },
    ],
    assurance: [
      "Start with the free plan before choosing a paid plan.",
      "Yearly billing gives two bonus months compared with monthly billing.",
      "Upgrade when your shop needs richer reports, AI, backup, or employee workflows.",
      "Need chains, wholesalers, or multi-branch rollout? Contact sales for Enterprise.",
    ],
    faqEyebrow: "Pricing FAQ",
    faqTitle: "Questions before choosing a plan",
    faqDescription:
      "These answers help shop owners understand free plan access, yearly savings, upgrades, and what to verify before payment.",
    featuresLink: "Review MemoApp features",
    faqLink: "Read public FAQ",
    faqs: [
      {
        question: "What happens after the 30-day free plan?",
        answer:
          "After 30 days, choose the plan that matches your shop size. Basic covers smaller counters, Growth fits busy retailers adding their first team, and Business supports established multi-counter teams.",
      },
      {
        question: "Can I change plans later?",
        answer:
          "Yes. Start with a smaller plan and upgrade when you need richer reports, AI, backup, employees, or priority support.",
      },
      {
        question: "Why is yearly billing cheaper?",
        answer:
          "Yearly billing is positioned as two bonus months compared with paying monthly for 12 months.",
      },
      {
        question: "Which plan is best for a small grocery shop?",
        answer:
          "Basic is usually the simplest starting point for one-shop counters that need POS billing, products, stock, and customer dues.",
      },
      {
        question: "Which plan includes AI and stronger reports?",
        answer:
          "Growth adds employee management with manager and staff logins, plus AI and richer analytics. Business is designed for established teams that also need unlimited records, backup, and priority support.",
      },
      {
        question: "How should I confirm payment and activation details?",
        answer:
          "Use the live app or contact MemoApp support before payment so your shop can confirm current payment methods, activation timing, and any policy updates.",
      },
    ],
  },
  faqTopics: [
    {
      title: "General",
      description:
        "Setup, shop profile, web and mobile access, offline sync, and daily basics.",
    },
    {
      title: "Memos & sales",
      description: "Memos, invoices, printing, PDF sharing, and daily sales.",
    },
    {
      title: "Stock & inventory",
      description:
        "Products, stock levels, units, purchases, and low-stock alerts.",
    },
    {
      title: "Account & team",
      description:
        "Your profile, shop, team access, employee records, and security.",
    },
    {
      title: "Billing & plans",
      description: "Membership plans, receipts, payments, and plan changes.",
    },
  ],
  faqs: [
    {
      question: "Is MemoApp only a POS system?",
      answer:
        "No. Counter billing is one part of MemoApp. It is AI-powered business management software that also covers inventory, customers, dues, suppliers, purchases, expenses, reports, and AI-assisted insights.",
      category: "General",
    },
    {
      question: "What is MemoApp and who is it for?",
      answer:
        "MemoApp is business management software for Bangladeshi retailers — grocery, pharmacy, hardware, wholesale, and general stores that need billing, stock, dues, and reports in one trusted app.",
      category: "General",
    },
    {
      question: "Can my shop work when the internet is unstable?",
      answer:
        "Yes. MemoApp is designed around offline-friendly workflows, so key counter work can continue and sync when the connection returns.",
      category: "General",
    },
    {
      question: "What happens if the internet drops during a sale?",
      answer:
        "Counter work can continue offline. When internet returns, MemoApp syncs pending memos and updates so your shop records stay consistent.",
      category: "General",
    },
    {
      question: "Does MemoApp work on mobile phones and tablets?",
      answer:
        "Yes. MemoApp runs in the browser on phones, tablets, and desktops — useful for shop counters that need mobility.",
      category: "General",
    },
    {
      question: "Can I install MemoApp on my phone or computer?",
      answer:
        "Yes. MemoApp is a full web app — use it in the browser or install it on Android, iPhone, tablet, or PC for a native-app feel. One login keeps your shop data synced everywhere.",
      category: "General",
    },
    {
      question: "Can I create and share memos quickly?",
      answer:
        "Yes. MemoApp supports fast memo creation plus customer-ready sharing through thermal print, PDF, and WhatsApp.",
      category: "Memos & sales",
    },
    {
      question:
        "What is the difference between a memo, quotation, and delivery challan?",
      answer:
        "A memo records a completed sale. A quotation is a price offer you can convert to a memo when the customer confirms. A delivery challan tracks goods dispatched, often for wholesale or bulk orders.",
      category: "Memos & sales",
    },
    {
      question: "Can I share a memo PDF on WhatsApp to customers?",
      answer:
        "Yes. After saving a memo, you can share a customer-ready PDF through WhatsApp or other channels your team already uses.",
      category: "Memos & sales",
    },
    {
      question: "Can I track customer dues and collections?",
      answer:
        "Yes. Customer ledgers, due balances, payments, and WhatsApp or SMS reminders help shops keep collection work organized.",
      category: "Memos & sales",
    },
    {
      question: "Does MemoApp help with low stock?",
      answer:
        "Yes. Product and stock workflows help owners monitor quantities, units, purchase context, and low-stock risk on the dashboard.",
      category: "Stock & inventory",
    },
    {
      question: "Can I print barcode labels for products?",
      answer:
        "Yes. MemoApp supports barcode label printing and barcode search during billing for faster counter work.",
      category: "Stock & inventory",
    },
    {
      question: "How do I set up a thermal receipt printer?",
      answer:
        "Open Settings → Printer setup in MemoApp. The app supports 58mm and 80mm thermal printers — follow the in-app guide for your printer model.",
      category: "Stock & inventory",
    },
    {
      question: "Does MemoApp support Bangla?",
      answer:
        "Yes. MemoApp is built for local teams with English, Bangla, and Banglish-friendly usage across important shop workflows.",
      category: "Account & team",
    },
    {
      question: "Can my team members use MemoApp?",
      answer:
        "Paid plans support team workflows with owner, manager, and staff roles, employee records, and salary-related operations on Growth+ plans.",
      category: "Account & team",
    },
    {
      question: "Is my shop data backed up?",
      answer:
        "Yes. MemoApp provides import and export options plus cloud sync so your shop records stay accessible and you are not locked in.",
      category: "Account & team",
    },
    {
      question: "Which plan should I start with?",
      answer:
        "Start with the free 30-day plan to explore. Basic fits smaller shops, Growth is best for busy counters adding their first team, and Business suits established multi-counter teams.",
      category: "Billing & plans",
    },
    {
      question: "How do I pay for MemoApp with bKash or Nagad?",
      answer:
        "Membership can be paid through manual bKash payment. Use the in-app membership flow or contact MemoApp support to confirm current payment steps and activation timing.",
      category: "Billing & plans",
    },
    {
      question: "What shop types fit MemoApp plans?",
      answer:
        "MemoApp works for grocery, pharmacy, hardware, electronics, clothing, restaurant, and general retail. Basic suits solo counters; Growth and Business fit teams with more records, reports, and backup needs.",
      category: "Billing & plans",
    },
    {
      question: "How much do SMS due reminders cost?",
      answer:
        "SMS auto-reminders for customer dues are available as a paid add-on (around ৳250/month). WhatsApp reminders are also supported for manual follow-up.",
      category: "Billing & plans",
    },
    {
      question: "Can I upgrade or change plans later?",
      answer:
        "Yes. Start with a smaller plan and upgrade when you need richer reports, AI, backup, employees, or priority support.",
      category: "Billing & plans",
    },
  ],
  faqPage: {
    title: "Common questions, clear answers",
    browseTopics: "Browse topics",
    allGroups: "All topics",
    searchPlaceholder: "Search questions, topics, or answers...",
    emptyTitle: "No matching questions found",
    emptyDescription: "Try a different keyword or topic filter.",
    popular: "Popular",
    stillNeedHelp: "Still need help?",
    supportTitle: "Support is available after you log in.",
    supportDescription:
      "Report a problem or reach us by email. We respond as soon as we can.",
    openHelpCenter: "Open Help Center",
    emailSupport: "Email support",
    chatWithUs: "Talk with us",
    whatsappMessage: "Hello MemoApp team, I would like to talk with you.",
  },
} as const;
