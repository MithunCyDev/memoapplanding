export const appLoginUrl = "https://memoappbd.shop";
export const ororaSoftAboutUrl = "https://www.ororasoft.com/about";
export const ororaSoftUrl = "https://www.ororasoft.com/";

export type Language = "bn" | "en";

export const defaultLanguage: Language = "en";

export const navItems = [
  { label: "Home", href: "/", external: false },
  { label: "About Us", href: ororaSoftAboutUrl, external: true },
  { label: "Features", href: "/features", external: false },
  { label: "Workflow", href: "/workflow", external: false },
  { label: "Pricing", href: "/pricing", external: false },
  { label: "FAQ", href: "/faq", external: false },
  { label: "Privacy", href: "/privacy-policy", external: false },
] as const;

export const landingContent = {
  en: {
    common: {
      tryForFree: "Try for free",
      startWithMemoApp: "Start with MemoApp",
      exploreFeatures: "Explore features",
      reviewFeatures: "Review features",
      contactMemoApp: "Contact MemoApp",
      productBy: "A product of",
      copyright: "All rights reserved.",
    },
    footer: {
      description:
        "AI-powered POS, inventory, dues, reports, and backup tools for modern Bangladeshi shops.",
      productTitle: "Product",
      companyTitle: "Company & support",
      legalTitle: "Trust & legal",
      contactTitle: "Need help choosing a plan?",
      contactDescription:
        "Talk with the MemoApp team about setup, pricing, Google backup, or the right workflow for your shop.",
      emailSupport: "Email support",
      whatsappSupport: "WhatsApp support",
      whatsappMessage:
        "Hello MemoApp team, I need help choosing a MemoApp plan.",
      tryForFree: "Try MemoApp free",
      developedBy: "Developed and maintained by OroraSoft.",
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
        "Bill in seconds, track stock in real time, collect dues without chasing, and see what's selling — all from one counter app built for Bangladeshi shops. Start free for 30 days.",
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
    featureSummary:
      "MemoApp connects every feature into one operating system for billing, inventory, customers, staff, reports, and AI decisions.",
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
        title: "Google Drive auto backup",
        description:
          "Protect customers, products, suppliers, purchases, and memos with scheduled full-shop backup to Google Drive.",
        badge: "Backup",
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
          tag: "One click",
          title: "Import customers from your phone",
          description:
            "Bring in all your contacts as customers with one tap using Google Contacts — no manual typing.",
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
      previewLabel: "Live POS preview",
      previewAlt:
        "MemoApp POS screen showing the product grid, current bill, payment options, and totals.",
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
      subtitle:
        "Explore MemoApp free for 30 days before you choose a paid plan.",
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
        "A quick preview of common MemoApp questions. Visit the FAQ page for the full list on setup, billing, inventory, baki, and plans.",
      viewAllLabel: "Browse all FAQs",
    },
    homeFaqs: [
      {
        question: "Is MemoApp only a POS system?",
        answer:
          "No. POS billing is the front counter, but MemoApp (memo app bd) also covers inventory, customers, dues, suppliers, purchases, expenses, reports, and AI-assisted insights.",
      },
      {
        question: "What is MemoApp and who is it for?",
        answer:
          "MemoApp is a shop management and POS web app for Bangladeshi retailers — grocery, pharmacy, hardware, wholesale, and general stores that need billing, stock, baki, and reports in one place.",
      },
      {
        question: "Can my shop work when the internet is unstable?",
        answer:
          "Yes. MemoApp is designed around offline-friendly workflows, so key counter work can continue and sync when the connection returns.",
      },
      {
        question: "Can I track customer baki and due collection?",
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
        eyebrow: "MemoApp features | memo app bd",
        title:
          "MemoApp features for Bangladesh shops — POS, inventory, baki, and reports in one memo app.",
        description:
          "memoapp brings counter-fast billing, stock control, customer dues, supplier purchases, team access, Google Drive backup, and AI insights into one retail workspace built for Bangladeshi shop owners.",
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
        eyebrow: "MemoApp FAQ | memo app bd",
        title:
          "Frequently asked questions about MemoApp — the memo app for Bangladesh shops.",
        description:
          "Find answers about memoapp setup, POS billing, inventory, baki, pricing, offline sync, Google backup, and support for Bangladeshi retailers.",
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
          googleHint: "Read-only · one tap",
          orLabel: "or",
          mappedLabel: "Columns matched automatically",
          productColumns: ["Name", "Price", "Stock", "Unit"],
          customerColumns: ["Name", "Phone", "Email"],
          contactCount: "+35",
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
            title: "Add customers from Google Contacts or Excel/CSV",
            description:
              "Import your full contact list in one tap from Google, or upload a customer spreadsheet for bulk ledgers.",
            highlights: [
              "Google Contacts read-only import",
              "Excel/CSV for bulk customer records",
            ],
            visual: "customers",
            googleContactsLabel: "Import from Google Contacts",
            dropZoneTitle: "Or drop customer Excel/CSV here",
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
            "Create walk-in or regular customers manually, or import from Google Contacts when you connect Google.",
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
            "Close the day with sales, profit, dues, stock, AI guidance, sync status, and Google Drive backup confidence.",
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
            "Manage Google backup and shop settings",
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
        description: "Setup, shop profile, offline sync, and daily app basics.",
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
          "No. POS billing is the front counter, but MemoApp (memo app bd) also covers inventory, customers, dues, suppliers, purchases, expenses, reports, and AI-assisted insights.",
        category: "General",
      },
      {
        question: "What is MemoApp and who is it for?",
        answer:
          "MemoApp is a shop management and POS web app for Bangladeshi retailers — grocery, pharmacy, hardware, wholesale, and general stores that need billing, stock, baki, and reports in one place.",
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
          "Counter work can continue offline. When internet returns, memoapp syncs pending memos and updates so your shop records stay consistent.",
        category: "General",
      },
      {
        question: "Does MemoApp work on mobile phones and tablets?",
        answer:
          "Yes. MemoApp runs in the browser on phones, tablets, and desktops — useful for shop counters that need mobility.",
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
        question: "Can I track customer baki and due collection?",
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
          "Yes. MemoApp supports Google Drive backup to your own Drive account, plus import and export options so you are not locked in.",
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
      title: "Frequently Asked Questions",
      browseTopics: "Browse topics",
      allGroups: "All groups",
      searchPlaceholder: "Search questions, topics, or answers...",
      emptyTitle: "No matching questions found",
      emptyDescription:
        "Try a different keyword or choose another help category from the sidebar.",
      popular: "Popular",
      stillNeedHelp: "Still need help?",
      supportTitle: "In-app support is available after login.",
      supportDescription:
        "Report a problem or reach us by email or WhatsApp. We respond as soon as we can.",
      openHelpCenter: "Open Help Center",
      emailSupport: "Email support",
      chatWithUs: "Chat with us",
      whatsappMessage: "Hello MemoApp team, I need help with MemoApp.",
    },
  },
  bn: {
    common: {
      tryForFree: "ফ্রি শুরু করুন",
      startWithMemoApp: "MemoApp শুরু করুন",
      exploreFeatures: "ফিচার দেখুন",
      reviewFeatures: "ফিচার দেখুন",
      contactMemoApp: "MemoApp-এ যোগাযোগ করুন",
      productBy: "Product by",
      copyright: "সর্বস্বত্ব সংরক্ষিত।",
    },
    footer: {
      description:
        "বাংলাদেশের আধুনিক দোকানের জন্য AI-পাওয়ারড POS, ইনভেন্টরি, বাকি, রিপোর্ট ও ব্যাকআপ টুল।",
      productTitle: "প্রোডাক্ট",
      companyTitle: "কোম্পানি ও সাপোর্ট",
      legalTitle: "বিশ্বাস ও আইনি তথ্য",
      contactTitle: "প্ল্যান বেছে নিতে সাহায্য দরকার?",
      contactDescription:
        "Setup, pricing, Google backup বা আপনার দোকানের জন্য সঠিক workflow নিয়ে MemoApp টিমের সাথে কথা বলুন।",
      emailSupport: "Support-এ ইমেইল করুন",
      whatsappSupport: "WhatsApp support",
      whatsappMessage:
        "Hello MemoApp team, I need help choosing a MemoApp plan.",
      tryForFree: "MemoApp ফ্রি ট্রাই করুন",
      developedBy: "OroraSoft ডেভেলপ ও মেইনটেইন করে।",
      productBy: "OroraSoft-এর একটি product",
      productLinks: [
        { label: "Home", href: "/", external: false },
        { label: "Features", href: "/features", external: false },
        { label: "Workflow", href: "/workflow", external: false },
        { label: "Pricing", href: "/pricing", external: false },
        { label: "FAQ", href: "/faq", external: false },
      ],
      companyLinks: [
        { label: "About Us", href: ororaSoftAboutUrl, external: true },
        { label: "ফ্রি শুরু করুন", href: appLoginUrl, external: true },
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
      eyebrow: "বাংলাদেশের SME ও আধুনিক দোকানের জন্য তৈরি",
      title:
        "আপনার বিজনেস অ্যাসিস্ট্যান্ট, ইনভেন্টরি ম্যানেজার এবং POS — সব একসাথে",
      titlePrefix: "আপনার বিজনেস অ্যাসিস্ট্যান্ট, ইনভেন্টরি ম্যানেজার এবং POS",
      titleHighlight: "সব একসাথে",
      description:
        "সেকেন্ডেই বিল করুন, মালের স্টক ঠিক রাখুন, বাকির হিসাব হাতের মুঠোয় রাখুন আর কোন পণ্য কত চলছে তা এক নজরে দেখুন। বাংলাদেশের দোকানের জন্য তৈরি — ৩০ দিন ফ্রি ব্যবহার করুন।",
    },
    heroStats: [
      { value: "৳৪৮,৩২০", label: "আজকের কাউন্টার সেলস" },
      { value: "৳১১,৪২০", label: "আজকের আনুমানিক প্রফিট" },
      { value: "১২ আইটেম", label: "লো-স্টক প্রোডাক্ট" },
      { value: "৳৩৮K", label: "কাস্টমার বাকি" },
      { value: "৫ দিন", label: "সম্ভাব্য স্টকআউট" },
      { value: "৩ কাজ", label: "AI সাজেস্টেড টাস্ক" },
    ],
    stats: [
      { value: "All-in-One", label: "বিজনেস ম্যানেজমেন্ট প্ল্যাটফর্ম" },
      { value: "AI", label: "AI-পাওয়ারড ইনসাইট ও অটোমেশন" },
      { value: "10x", label: "দ্রুত বিলিং ও ইনভয়েসিং" },
      { value: "24/7", label: "যেকোনো জায়গা থেকে সেলস মনিটরিং" },
      { value: "360°", label: "সম্পূর্ণ ব্যবসা কন্ট্রোল" },
      { value: "Real-time", label: "ইনভেন্টরি ও প্রফিট ট্র্যাকিং" },
    ],
    trusted: {
      eyebrow: "বাংলাদেশি ব্যবসার আস্থা",
      title: "১০০+ অগ্রসর দোকান ও বিজনেস টিমের জন্য তৈরি",
      description:
        "লোকাল রিটেইলার, হোলসেলার ও সার্ভিস ব্যবসার দৈনন্দিন প্রয়োজন মাথায় রেখে MemoApp তৈরি।",
      metrics: [
        { value: "100+", label: "ব্যবসা সাপোর্টেড" },
        { value: "24/7", label: "সেলস ভিজিবিলিটি" },
        { value: "AI", label: "অ্যাসিস্ট্যান্ট-রেডি অপারেশন" },
        { value: "360°", label: "বিলিং, স্টক, বাকি, রিপোর্ট" },
      ],
    },
    featuresHeading: {
      eyebrow: "দোকানের সব প্রয়োজন",
      title: "শুধু বিলিং সফটওয়্যার নয়, সম্পূর্ণ রিটেইল অপারেটিং সিস্টেম।",
      description:
        "MemoApp দৈনন্দিন কাউন্টার কাজকে দোকান মালিকের প্রয়োজনীয় ব্যাক-অফিস তথ্যের সঙ্গে যুক্ত করে: সেলস, স্টক, কাস্টমার, সাপ্লায়ার, স্টাফ ও ক্যাশ ভিজিবিলিটি।",
    },
    featureSummary:
      "MemoApp বিলিং, ইনভেন্টরি, কাস্টমার, স্টাফ, রিপোর্ট ও AI সিদ্ধান্তকে এক অপারেটিং সিস্টেমে যুক্ত করে।",
    featureCards: [
      {
        title: "কাউন্টার-ফাস্ট POS বিলিং",
        description:
          "বাস্তব দোকানের কাউন্টারের জন্য তৈরি ফ্লো দিয়ে মেমো, ইনভয়েস, কোটেশন ও চালান তৈরি করুন।",
        badge: "POS",
      },
      {
        title: "ব্যবহারযোগ্য ইনভেন্টরি",
        description:
          "প্রোডাক্ট, ক্যাটাগরি, স্টক ইন/আউট, ক্রয় হিসাব ও লো-স্টক সিগন্যাল সহজে ট্র্যাক করুন।",
        badge: "Stock",
      },
      {
        title: "কাস্টমার বাকির পরিষ্কার হিসাব",
        description:
          "কাস্টমার লেজার, বাকি পেমেন্ট ও কার কত বাকি আছে সব এক নজরে বুঝুন।",
        badge: "Dues",
      },
      {
        title: "ক্রয় ও সাপ্লায়ার",
        description:
          "সাপ্লায়ার লেজার, পেমেন্ট, ক্রয় বিল, খরচ ও ক্যাশফ্লো এক জায়গায় রাখুন।",
        badge: "Ledger",
      },
      {
        title: "মালিকের কাজে লাগে এমন রিপোর্ট",
        description:
          "ম্যানুয়াল স্প্রেডশিট ছাড়াই সেলস, লাভ, ক্যাশ, স্টক ভ্যালু ও বাকির ট্রেন্ড দেখুন।",
        badge: "Reports",
      },
      {
        title: "দোকানের সিদ্ধান্তে AI সহকারী",
        description:
          "স্টক, বাকি, সেলস ট্রেন্ড ও পরবর্তী কাজ নিয়ে সহজ ভাষায় প্রশ্ন করে গাইডলাইন পান।",
        badge: "AI",
      },
      {
        title: "সম্পূর্ণ বাংলা ভাষা সাপোর্ট",
        description:
          "ইংরেজি, বাংলা বা Banglish-এ টিমকে পরিচিত দোকানি ভাষায় কাজ করতে দিন।",
        badge: "Bangla",
      },
      {
        title: "Google Drive অটো ব্যাকআপ",
        description:
          "কাস্টমার, প্রোডাক্ট, সাপ্লায়ার, ক্রয় ও মেমোর ফুল-শপ ব্যাকআপ Google Drive-এ রাখুন।",
        badge: "Backup",
      },
      {
        title: "অটোমেটিক বাকি রিমাইন্ডার",
        description:
          "কাস্টমারকে বাকি পেমেন্ট মনে করিয়ে দিয়ে ক্যাশ কালেকশন আরও স্বাস্থ্যকর রাখুন।",
        badge: "Reminder",
      },
      {
        title: "শেয়ার করা যায় এমন বিজনেস নোট",
        description:
          "দোকানের জরুরি নোট তৈরি করুন, অটো সেভ করুন এবং প্রয়োজনীয় মানুষের সঙ্গে শেয়ার করুন।",
        badge: "Notes",
      },
      {
        title: "সহজ সোশ্যাল শেয়ারিং",
        description:
          "মেমো, ব্যবসার আপডেট ও কাস্টমার-রেডি তথ্য দ্রুত সোশ্যাল চ্যানেলে শেয়ার করুন।",
        badge: "Share",
      },
      {
        title: "এমপ্লয়ি ম্যানেজমেন্ট",
        description:
          "দোকান বড় হলে স্টাফ রেকর্ড, স্যালারি ও রোল-ভিত্তিক অপারেশন গুছিয়ে নিন।",
        badge: "Team",
      },
    ],
    workflowHeading: {
      eyebrow: "দৈনন্দিন ফ্লো",
      title: "বাস্তব দোকানের দিনের ছন্দ অনুযায়ী ডিজাইন করা।",
      description:
        "ক্যাশ ওপেন করা থেকে দিনের শেষ রিপোর্ট পর্যন্ত MemoApp ব্যস্ত বিক্রির সময়কে সহজ রাখে এবং মালিককে পরিষ্কার ধারণা দেয়।",
    },
    workflowSteps: [
      {
        step: "০১",
        title: "কাউন্টার খুলুন",
        description:
          "ক্যাশফ্লো ভিজিবিলিটি, প্রোডাক্ট শর্টকাট ও প্রস্তুত মেমো অ্যাকশন দিয়ে দিন শুরু করুন।",
      },
      {
        step: "০২",
        title: "বিক্রি, কালেকশন, সিঙ্ক",
        description:
          "ইন্টারনেট দুর্বল হলেও সেলস, আংশিক পেমেন্ট ও কাস্টমার বাকি রেকর্ড করুন।",
      },
      {
        step: "০৩",
        title: "ব্যবসা রিভিউ করুন",
        description:
          "রিপোর্ট, লো-স্টক অ্যালার্ট, খরচের কনটেক্সট ও মালিক-রেডি ইনসাইট দিয়ে দিন শেষ করুন।",
      },
    ],
    showcase: {
      eyebrow: "মিনিটেই সেটআপ",
      title: "কয়েক দিন নয়, মিনিটেই পুরো দোকান MemoApp-এ আনুন।",
      description:
        "আপনার কাছে থাকা ডেটা থেকেই শুরু করুন। কয়েক ক্লিকেই কাস্টমার, প্রোডাক্ট ও ক্রয় রেকর্ড ইমপোর্ট করুন, আর টিমের কে কী দেখবে ও করবে তা নিয়ন্ত্রণ করুন।",
      dashboardLabel: "লাইভ ড্যাশবোর্ড প্রিভিউ",
      points: [
        {
          tag: "এক ক্লিকেই",
          title: "ফোন থেকে কাস্টমার ইমপোর্ট করুন",
          description:
            "Google Contacts দিয়ে এক ট্যাপেই আপনার সব কন্টাক্ট কাস্টমার হিসেবে যোগ করুন — হাতে টাইপ করার দরকার নেই।",
        },
        {
          tag: "৩০ সেকেন্ডেই",
          title: "Excel থেকে প্রোডাক্ট ও ক্রয় আপলোড করুন",
          description:
            "আপনার নিজের Excel ফাইল থেকে প্রোডাক্ট, ক্রয় বা যেকোনো রেকর্ড প্রায় ৩০ সেকেন্ডেই ইমপোর্ট করুন।",
        },
        {
          tag: "রোল-ভিত্তিক",
          title: "প্রত্যেককে সঠিক অ্যাক্সেস দিন",
          description:
            "মালিক, ম্যানেজার ও স্টাফ যোগ করুন এবং কে কী দেখবে ও করবে তা নিয়ন্ত্রণ করুন।",
        },

        {
          tag: "অফলাইন-ফার্স্ট",
          title: "ইন্টারনেট না থাকলেও বিক্রি চালু রাখুন",
          description:
            "নেটওয়ার্ক সমস্যায়ও বিলিং ও স্টক আপডেট চলতে থাকে, অনলাইনে ফিরলে সব সিঙ্ক হয়ে যায়।",
        },
      ],
    },
    posPreview: {
      eyebrow: "পয়েন্ট অব সেল",
      title: "ব্যস্ততম দিনেও দ্রুত কাজের জন্য তৈরি কাউন্টার।",
      description:
        "MemoApp-এর POS প্রতিটি বিক্রি দ্রুত ও নির্ভুল রাখে — প্রোডাক্ট স্ক্যান করুন, একসাথে একাধিক বিল সামলান, যেকোনো পেমেন্ট নিন আর সেকেন্ডেই মেমো প্রিন্ট করুন।",
      previewLabel: "লাইভ POS প্রিভিউ",
      previewAlt:
        "MemoApp POS স্ক্রিন — প্রোডাক্ট গ্রিড, কারেন্ট বিল, পেমেন্ট অপশন ও টোটাল দেখাচ্ছে।",
      cards: [
        {
          tag: "দ্রুত খুঁজুন",
          title: "যেকোনো প্রোডাক্ট স্ক্যান বা সার্চ করুন",
          description:
            "বারকোড স্ক্যান করুন বা নাম দিয়ে সার্চ করুন, ক্যাটাগরি দিয়ে ফিল্টার করুন আর লাইভ স্টক সংখ্যা দেখে বিলে আইটেম যোগ করুন।",
        },
        {
          tag: "মাল্টি-বিল",
          title: "একসাথে অনেক কাস্টমার সামলান",
          description:
            "Bill 1, Bill 2 সহ অর্ডার হোল্ড ও রিজিউম করুন, যাতে থেমে থাকা বিক্রি পরের কাস্টমারকে আটকে না রাখে।",
        },
        {
          tag: "যেকোনো পেমেন্ট",
          title: "ক্যাশ, বাকি বা মিক্সড — এক ট্যাপে",
          description:
            "ক্যাশ নিন, বাকিতে রাখুন বা একাধিক মাধ্যমে ভাগ করুন। দেওয়া ক্যাশ, ফেরত, ডিসকাউন্ট ও ট্যাক্স স্বয়ংক্রিয়ভাবে হিসাব হয়।",
        },
        {
          tag: "প্রিন্ট-রেডি",
          title: "এক শর্টকাটেই সেভ ও প্রিন্ট",
          description:
            "Ctrl+S বা Ctrl+P দিয়ে বিক্রি শেষ করুন — মেমো সঙ্গে সঙ্গে প্রিন্ট হয় আর স্টক ও রিপোর্ট ব্যাকগ্রাউন্ডে আপডেট হয়।",
        },
      ],
    },
    pricingHeading: {
      eyebrow: "প্রতিটি ধাপের জন্য প্ল্যান",
      title: "ছোট দোকান, ব্যস্ত কাউন্টার ও বড় টিমের জন্য সহজ প্যাকেজিং।",
      description:
        "৩০ দিনের ফ্রি প্ল্যান দিয়ে শুরু করুন, তারপর লাইভ অ্যাপ থেকে পেইড প্ল্যান বেছে নিন। স্টাফ, রিপোর্ট, AI ও ব্যাকআপ বাড়লে যেকোনো সময় আপগ্রেড করুন।",
    },
    pricingBenefits: ["ইনভয়েস", "স্টক", "কালেকশন", "ক্রয়", "ইনসাইট", "AI"],
    billing: {
      monthly: "মাসিক",
      yearly: "বার্ষিক",
      saveLabel: "১০% সেভ",
      yearlyBenefit:
        "বার্ষিক বিলিংয়ে ১০ মাসের চার্জে ১২ মাস ব্যবহার - দুই মাস বোনাস।",
      wasLabel: "আগে",
    },
    trialBanner: {
      title: "ফ্রি প্ল্যান দিয়ে শুরু করুন",
      subtitle: "পেইড প্ল্যান নেওয়ার আগে ৩০ দিন MemoApp ফ্রি ব্যবহার করুন।",
      badge: "৩০ দিন ফ্রি",
    },
    homeFreeCta: {
      eyebrow: "ফ্রি শুরু করুন",
      title: "৩০ দিন ফ্রিতে পুরো দোকান চালান।",
      description:
        "ফ্রি MemoApp ব্যবহার করে দেখুন। বিলিং, স্টক, বাকি ও রিপোর্ট আপনার দোকানে কীভাবে কাজ করে দেখুন, তারপর প্রস্তুত হলে প্ল্যান বেছে নিন।",
      benefits: [
        {
          title: "কাউন্টারে দ্রুত বিলিং",
          description:
            "সেকেন্ডেই মেমো ও ইনভয়েস তৈরি করুন, যাতে ব্যস্ত সময়েও কিউ চলতে থাকে।",
        },
        {
          title: "বাকির হিসাব আর হারাবে না",
          description:
            "কার কত বাকি দেখুন, বাকি কালেক্ট করুন ও রিমাইন্ডার পাঠিয়ে ক্যাশ চালু রাখুন।",
        },
        {
          title: "না গুনেও স্টকের পরিষ্কার ধারণা",
          description:
            "কোন পণ্য কমে যাচ্ছে আর কী রিস্টক করতে হবে, শেলফ খালি হওয়ার আগেই জানুন।",
        },
        {
          title: "রিপোর্ট ও AI দিয়ে সিদ্ধান্ত",
          description:
            "সেলস, লাভ ও ট্রেন্ড বুঝুন এবং পরবর্তী কাজ নিয়ে AI সহকারীকে জিজ্ঞাসা করুন।",
        },
      ],
      primaryCta: "৩০ দিন ফ্রি শুরু করুন",
      secondaryCta: "সম্পূর্ণ প্রাইসিং দেখুন",
    },
    paidPlansHeading: {
      title: "পেইড প্ল্যান",
      subtitle:
        "আপনার দোকানের জন্য উপযুক্ত প্ল্যান বেছে নিন — টিম ও ডেটা বাড়লে যেকোনো সময় আপগ্রেড করুন।",
    },
    pricingPlans: [
      {
        name: "ফ্রি",
        price: "ফ্রি",
        term: "৩০ দিন",
        yearly: "পেইড প্ল্যান নেওয়ার আগে ঘুরে দেখুন",
        description:
          "টিম কমিট করার আগে কোর দোকান ওয়ার্কফ্লোসহ MemoApp ব্যবহার করে দেখুন।",
        monthlyPrice: "ফ্রি",
        yearlyPrice: "ফ্রি",
        yearlyWasPrice: "",
        monthlyTerm: "৩০ দিন",
        yearlyTerm: "৩০ দিন",
        target: "নতুন দোকান · প্রথম সেটআপ · শুরুতে ঘুরে দেখা",
        blurb:
          "অনবোর্ডিং, ইনভয়েসিং, ক্যাটালগ, বাকি, খরচ ট্র্যাকিং ও বেসলাইন রিপোর্ট — ৩০ দিন ফ্রি।",
        cta: "ফ্রি শুরু করুন",
        yearlyNote: "MemoApp ঘুরে দেখার সময় ফ্রি অ্যাক্সেস চালু থাকে।",
        teamSeats: "১ জন টিম সদস্য",
        features: [
          "দোকান সেটআপের জন্য ৩০ দিনের সম্পূর্ণ ফ্রি অ্যাক্সেস",
          "মেমো, স্টক, বাকি, রিপোর্ট, নোটস, টিম পেজ ও এআই ব্যবহার করুন",
          "মেমো, স্টক, বাকি, ক্রয় ও সাপ্লায়ারসহ মূল দোকান ওয়ার্কফ্লো ব্যবহার করুন",
          "ক্রেডিট কার্ড ছাড়াই ফ্রি শুরু — দোকান প্রস্তুত হলে আপগ্রেড করুন",
          "ডিজিটাল পেমেন্টে যেকোনো সময় আপগ্রেড করুন",
        ],
        highlighted: false,
        badge: "Start",
      },
      {
        name: "Basic",
        price: "৳৪৯৯",
        term: "/মাস",
        yearly: "৳৪,৯৯০/বছর",
        description:
          "এক মালিকের দোকানের জন্য পরিষ্কার বিলিং, স্টক ও বাকি হিসাব।",
        monthlyPrice: "৳৪৯৯",
        yearlyPrice: "৳৪,৯৯০",
        yearlyWasPrice: "৳৫,৯৮৮",
        monthlyTerm: "/মাস",
        yearlyTerm: "/বছর",
        target: "ছোট দোকান · গ্রোসারি · মিনি মার্ট · ফার্মেসি",
        blurb:
          "এক দোকানের জন্য ড্যাশবোর্ড, বাকি, ব্যাকআপ ও এক দোকানের জন্য উপযুক্ত স্মার্ট ডেটা সীমা।",
        cta: "শুরু করুন",
        yearlyNote: "ইয়ারলি প্ল্যানে ২ মাস ফ্রি",
        teamSeats: "১ জন টিম সদস্য",
        features: [
          "মেমো তৈরি, গ্রাহক ম্যানেজ, বাকি ট্র্যাক ও স্টক নিয়ন্ত্রণ",
          "ক্রয়, সাপ্লায়ার, ক্যাশফ্লো ও খরচ ট্র্যাকিং",
          "কোর ড্যাশবোর্ড ও দৈনন্দিন দোকান নিয়ন্ত্রণ",
          "এক দোকানের জন্য সীমিত ডেটা ইমপোর্ট",
        ],
        highlighted: false,
        badge: "Basics",
      },
      {
        name: "Growth",
        price: "৳১,১৯৯",
        term: "/মাস",
        yearly: "৳১১,৯৯০/বছর",
        description:
          "প্রথম ম্যানেজার ও স্টাফ লগইন যোগ করা ক্রমবর্ধমান দোকানের জন্য।",
        monthlyPrice: "৳১,১৯৯",
        yearlyPrice: "৳১১,৯৯০",
        yearlyWasPrice: "৳১৪,৩৮৮",
        monthlyTerm: "/মাস",
        yearlyTerm: "/বছর",
        target: "প্রথম টিম যোগ করা ক্রমবর্ধমান দোকান",
        blurb:
          "রোল-ভিত্তিক লগইনসহ স্টাফ যোগ করুন, সাথে রিপোর্ট, এআই ও ইমপোর্ট/এক্সপোর্ট ব্যস্ত কাউন্টারের জন্য।",
        cta: "Growth বেছে নিন",
        yearlyNote: "ইয়ারলি প্ল্যানে ২ মাস ফ্রি",
        teamSeats: "সর্বোচ্চ ৩ জন টিম সদস্য",
        features: [
          "কর্মচারী ম্যানেজমেন্ট: একজন ম্যানেজার ও একজন স্টাফ যোগ করুন, প্রত্যেকের আলাদা রোল-ভিত্তিক লগইন",
          "রিপোর্ট, নোটস ও এআই সহকারী আনলক করুন",
          "যেকোনো গ্রিড থেকে অপারেশনাল ডেটা ইমপোর্ট, এক্সপোর্ট ও ডাউনলোড",
          "ক্রমবর্ধমান ব্যস্ত কাউন্টারের জন্য উচ্চতর ডেটা সীমা",
          "Basic-এর সব, প্রথম টিম যোগ করা দোকানের জন্য তৈরি",
        ],
        highlighted: false,
        badge: "Team",
      },
      {
        name: "বিজনেস",
        price: "৳২,৪৯৯",
        term: "/মাস",
        yearly: "৳২৪,৯৯০/বছর",
        description:
          "প্রতিষ্ঠিত টিমের জন্য — আনলিমিটেড রেকর্ড, পূর্ণ কর্মচারী রোল ও প্রায়োরিটি সাপোর্ট।",
        monthlyPrice: "৳২,৪৯৯",
        yearlyPrice: "৳২৪,৯৯০",
        yearlyWasPrice: "৳২৯,৯৮৮",
        monthlyTerm: "/মাস",
        yearlyTerm: "/বছর",
        target: "একাধিক কাউন্টারে টিম চালানো প্রতিষ্ঠিত দোকান",
        blurb:
          "স্টাফসহ ব্যবসার জন্য — আনলিমিটেড রেকর্ড, পূর্ণ কর্মচারী রোল ও গভীর ইনসাইট।",
        cta: "বিজনেসে আপগ্রেড করুন",
        yearlyNote: "ইয়ারলি প্ল্যানে ২ মাস ফ্রি",
        teamSeats: "সর্বোচ্চ ৬ জন টিম সদস্য",
        features: [
          "Growth-এর সব, কোনো সীমা ছাড়াই ও পূর্ণ টিম সেটআপ",
          "একাধিক মালিক, ম্যানেজার ও স্টাফ রোল-ভিত্তিক অ্যাক্সেস",
          "মেমো, গ্রাহক, পণ্য, ক্রয়, সাপ্লায়ার ও নোট আনলিমিটেড",
          "অ্যাডভান্সড রিপোর্ট, এআই ইনসাইট ও ইমপোর্ট/এক্সপোর্ট",
          "স্বয়ংক্রিয় ব্যাকআপ ও প্রিমিয়াম স্টোরেজ",
          "মাল্টি-স্টাফ, মাল্টি-কাউন্টার অপারেশনের জন্য প্রায়োরিটি সাপোর্ট",
        ],
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "এন্টারপ্রাইজ",
        price: "কাস্টম",
        term: "",
        yearly: "চেইন ও হোলসেলারের জন্য কাস্টম মূল্য",
        description: "চেইন, হোলসেল ও মাল্টি-ব্রাঞ্চ অপারেশনের জন্য।",
        monthlyPrice: "কাস্টম",
        yearlyPrice: "কাস্টম",
        yearlyWasPrice: "",
        monthlyTerm: "",
        yearlyTerm: "",
        target: "চেইন, হোলসেল ও মাল্টি-ব্রাঞ্চ অপারেশন",
        blurb: "নির্দিষ্ট এসএলএ, ইন্টিগ্রেশন ও ফোকাস টিম।",
        cta: "সেলসে যোগাযোগ",
        ctaHref:
          "https://wa.me/8801835623863?text=Hello%20MemoApp%20team%2C%20I%20would%20like%20to%20discuss%20an%20Enterprise%20plan.",
        yearlyNote: "কাস্টম কোটের জন্য MemoApp-এর সাথে কথা বলুন।",
        features: [
          "কাস্টম অনবোর্ডিং",
          "নিবেদিত সাপোর্ট ও এসএলএ",
          "কাস্টম ইন্টিগ্রেশন",
          "উৎসর্গীকৃত ইনফ্রা",
          "ট্রেনিং",
          "কাস্টম অনুমতি ও রিপোর্ট",
        ],
        highlighted: false,
        badge: "Enterprise",
      },
    ],
    testimonialsHeading: {
      eyebrow: "দোকান মালিককে কেন্দ্র করে তৈরি",
      title: "বাস্তব রিটেইল সমস্যার ভাষায় পণ্যের গল্প।",
      description:
        "পেজটি দ্রুত বিলিং, শক্ত বাকি কন্ট্রোল, স্টক কনফিডেন্স ও পরিষ্কার দৈনিক রিপোর্টের মতো সহজে বোঝা যায় এমন ফলাফলে ফোকাস করে।",
      scrollHint: "বাস্তব দোকান মালিকদের মতামত একে একে দেখুন",
      reviewLabel: "পণ্যের গল্প দেখুন",
      previousLabel: "আগের পণ্যের গল্প দেখুন",
      nextLabel: "পরের পণ্যের গল্প দেখুন",
    },
    testimonials: [
      {
        quote:
          "MemoApp স্থানীয় দোকানের বিক্রি, বাকি কালেকশন ও স্টক চেক করার বাস্তব পদ্ধতি মাথায় রেখেই বানানো মনে হয়।",
        name: "রিটেইল মালিক",
        role: "গ্রোসারি ও দৈনন্দিন পণ্য",
      },
      {
        quote:
          "কাউন্টার সেলস, বাকি কালেকশন ও ইনভেন্টরি আলাদা খাতার বদলে একসঙ্গে দেখা সবচেয়ে ভালো লাগে।",
        name: "অপারেশন ম্যানেজার",
        role: "মাল্টি-কাউন্টার স্টোর",
      },
      {
        quote:
          "সত্যি কথা বলতে, বাংলাদেশে ছোট দোকানের জন্য এমন সুবিধা দেয় এমন সফটওয়্যার আছে জানতাম না।",
        name: "দোকান মালিক",
        role: "গ্রোসারি দোকান · নারায়ণগঞ্জ",
      },
      {
        quote:
          "আগে স্টক অনেকটা মনে রেখে চালাতাম। এখন কাস্টমার চাওয়ার আগেই কোন পণ্য কমে যাচ্ছে বুঝতে পারি।",
        name: "রিটেইল মালিক",
        role: "দৈনন্দিন পণ্যের দোকান · চট্টগ্রাম",
      },
      {
        quote:
          "স্টাফ দ্রুত বিল করতে পারে, আর আমি দোকানের বাইরে থেকেও সেলস আর বাকি হিসাব বুঝতে পারি।",
        name: "ব্যবসা মালিক",
        role: "হার্ডওয়্যার দোকান · গাজীপুর",
      },
      {
        quote:
          "বাকি, দৈনিক ক্যাশ, স্টকের চাপ আর সহজ কাউন্টার কাজ বুঝে বানানো বলে এটা বাংলাদেশি দোকানের জন্য মানানসই লাগে।",
        name: "মালিক-অপারেটর",
        role: "ফার্মেসি ও রিটেইল · ঢাকা",
      },
    ],
    faqHeading: {
      eyebrow: "প্রশ্ন",
      title: "প্রথমবারের ভিজিটরদের জন্য পরিষ্কার উত্তর।",
      description:
        "MemoApp সম্পর্কে সাধারণ প্রশ্নের সংক্ষিপ্ত preview। সেটআপ, বিলিং, ইনভেন্টরি, বাকি ও প্ল্যানের পূর্ণ তালিকার জন্য FAQ পেজ দেখুন।",
      viewAllLabel: "সব FAQ দেখুন",
    },
    homeFaqs: [
      {
        question: "MemoApp কি শুধু POS সিস্টেম?",
        answer:
          "না। POS কাউন্টারের অংশ, কিন্তু MemoApp (memo app bd) ইনভেন্টরি, কাস্টমার, বাকি, সাপ্লায়ার, ক্রয়, খরচ, রিপোর্ট ও AI ইনসাইটও কভার করে।",
      },
      {
        question: "MemoApp কী এবং কার জন্য?",
        answer:
          "MemoApp বাংলাদেশি রিটেইলারদের জন্য শপ ম্যানেজমেন্ট ও POS ওয়েব অ্যাপ — গ্রোসারি, ফার্মেসি, হার্ডওয়্যার, হোলসেল ও জেনারেল স্টোর।",
      },
      {
        question: "ইন্টারনেট দুর্বল হলে দোকান চালানো যাবে?",
        answer:
          "হ্যাঁ। MemoApp অফলাইন-ফ্রেন্ডলি — জরুরি কাউন্টার কাজ চলতে পারে, কানেকশন ফিরলে সিঙ্ক হয়।",
      },
      {
        question: "কাস্টমার বাকি ও কালেকশন ট্র্যাক করা যাবে?",
        answer:
          "হ্যাঁ। লেজার, বাকি ব্যালেন্স, WhatsApp/SMS রিমাইন্ডার দিয়ে কালেকশন গুছিয়ে রাখা যায়।",
      },
      {
        question: "কোন প্ল্যান দিয়ে শুরু করব?",
        answer:
          "৩০ দিন ফ্রি দিয়ে ঘুরে দেখুন। ছোট দোকান Basic, ব্যস্ত কাউন্টার Growth, প্রতিষ্ঠিত টিম বিজনেস।",
      },
      {
        question: "MemoApp কি বাংলা সাপোর্ট করে?",
        answer:
          "হ্যাঁ। ইংরেজি, বাংলা ও Banglish-ফ্রেন্ডলি — গুরুত্বপূর্ণ ওয়ার্কফ্লোতে।",
      },
    ],
    finalCta: {
      eyebrow: "শুরু করুন",
      title: "MemoApp দিয়ে আপনার দোকান পরিচালনা শুরু করুন",
      description:
        "দোকান অ্যাকাউন্ট তৈরি করুন, ৩০ দিন ফ্রি কোর ওয়ার্কফ্লো ব্যবহার করুন, এবং কাউন্টার, টিম ও রিপোর্ট বাড়লে আপগ্রেড করুন।",
    },
    routeHeroes: {
      features: {
        eyebrow: "MemoApp ফিচার | memo app bd",
        title:
          "বাংলাদেশের দোকানের জন্য MemoApp ফিচার — POS, ইনভেন্টরি, বাকি ও রিপোর্ট এক memo app-এ।",
        description:
          "memoapp কাউন্টার-দ্রুত বিলিং, স্টক কন্ট্রোল, কাস্টমার বাকি, সাপ্লায়ার ক্রয়, টিম অ্যাক্সেস, Google Drive ব্যাকআপ ও AI ইনসাইট এক রিটেইল ওয়ার্কস্পেসে আনে।",
      },
      workflow: {
        eyebrow: "MemoApp workflow | memo app bd",
        title:
          "memo app কীভাবে আপনার দোকানের দিন চালায় — প্রথম বিক্রি থেকে ক্লোজিং রিপোর্ট।",
        description:
          "MemoApp অনবোর্ডিং, কাউন্টার বিলিং, বাকি কালেকশন, রিস্টক ও মালিক রিপোর্টিং — বাংলাদেশের রিটেইল টিমের জন্য তৈরি দৈনিক রিদম।",
      },
      pricing: {
        eyebrow: "সহজ প্রাইসিং",
        title: "প্রতিটি ব্যবসার আকারের জন্য সহজ প্রাইসিং।",
        description:
          "বিক্রি, স্টক, বাকি, ক্রয়, সাপ্লায়ার, খরচ, লাভ-ক্ষতি ও AI এক প্ল্যানে — দোকান বাড়লে সঙ্গে স্কেল করুন।",
      },
      faq: {
        eyebrow: "MemoApp FAQ | memo app bd",
        title: "MemoApp সম্পর্কে প্রশ্ন — বাংলাদেশের দোকানের জন্য memo app।",
        description:
          "memoapp সেটআপ, POS বিলিং, ইনভেন্টরি, বাকি, প্রাইসিং, অফলাইন সিঙ্ক, Google ব্যাকআপ ও সাপোর্ট সম্পর্কে উত্তর খুঁজুন।",
      },
    },
    workflowHighlights: [
      {
        title: "কাউন্টারে দ্রুত",
        description:
          "কিউ ধীর না করে মেমো তৈরি, পেমেন্ট নেওয়া, বাকি আপডেট ও কাস্টমার-রেডি ডকুমেন্ট শেয়ার করুন।",
      },
      {
        title: "বিক্রির পরেও নির্ভরযোগ্য",
        description:
          "ইনভেন্টরি, কাস্টমার লেজার, সাপ্লায়ার ক্রয় ও খরচ দৈনন্দিন সেলস ফ্লোর সঙ্গে যুক্ত থাকে।",
      },
      {
        title: "মালিকের জন্য পরিষ্কার",
        description:
          "রিপোর্ট, লো-স্টক সিগন্যাল, ক্যাশফ্লো ও AI প্রশ্ন মালিককে বুঝতে সাহায্য করে কী হলো এবং কী করা দরকার।",
      },
    ],
    whyMemoApp: [
      {
        title: "BD SME-এর জন্য তৈরি",
        description:
          "গ্রোসারি, ফার্মেসি, হার্ডওয়্যার ও সার্ভিস দোকানের কথা মাথায় রেখে প্রাইসিং ও টিয়ার তৈরি।",
      },
      {
        title: "প্রস্তুত হলে আপগ্রেড",
        description:
          "কাউন্টার বিলিং দিয়ে শুরু করে রিপোর্ট, AI, অটো ব্যাকআপ ও টিম ওয়ার্কফ্লোতে বড় হন।",
      },
      {
        title: "সহজ কেনার পথ",
        description:
          "লাইভ অ্যাপ লগইন দিয়ে ফ্রি অ্যাক্সেস শুরু করুন এবং আপনার অ্যাকাউন্ট থেকে সঠিক প্ল্যান বেছে নিন।",
      },
    ],
    featuresRoute: {
      setupJourney: {
        eyebrow: "ফিচার বিস্তারিত",
        title: "দোকান খুলে মিনিটের মধ্যে বিক্রি শুরু করুন",
        description:
          "MemoApp নতুন দোকানকে সাইনআপ থেকে প্রথম POS বিক্রি পর্যন্ত দ্রুত নিয়ে যেতে তৈরি — হাতে টাইপ না করে প্রোডাক্ট ও কাস্টমার ইমপোর্ট করুন।",
        underOneMinuteLabel: "১ মিনিটের কম",
        shopDemo: {
          shopNameLabel: "দোকানের নাম",
          shopName: "রহিম অ্যান্ড সন্স মুদি",
          phoneLabel: "ফোন",
          phone: "017XX-XXXXXX",
          categoryLabel: "ক্যাটাগরি",
          category: "মুদি",
          roleLabel: "আপনার ভূমিকা",
          role: "মালিক",
          createdLabel: "দোকান তৈরি হয়েছে",
        },
        posDemo: {
          header: "MemoApp POS",
          currentMemo: "বর্তমান মেমো",
          synced: "সিঙ্কড",
          due: "বাকি",
          shareButton: "প্রিন্ট / শেয়ার মেমো",
        },
        importChrome: {
          productsTitle: "প্রোডাক্ট ইমপোর্ট",
          customersTitle: "কাস্টমার ইমপোর্ট",
          browseLabel: "ফাইল ব্রাউজ করুন",
          uploadingLabel: "রো ইমপোর্ট হচ্ছে…",
          completeLabel: "ইমপোর্ট সম্পন্ন",
          googleHint: "রিড-অনলি · এক ট্যাপ",
          orLabel: "অথবা",
          mappedLabel: "কলাম স্বয়ংক্রিয়ভাবে ম্যাচ হয়েছে",
          productColumns: ["নাম", "দাম", "স্টক", "ইউনিট"],
          customerColumns: ["নাম", "ফোন", "ইমেইল"],
          contactCount: "+৩৫",
        },
        steps: [
          {
            step: "01",
            title: "দোকান খুলুন",
            description:
              "নাম, ফোন, ঠিকানা ও ক্যাটাগরি দিয়ে দোকান প্রোফাইল তৈরি করুন — পরের ধাপে প্রোডাক্ট ও কাস্টমারের জন্য প্রস্তুত।",
            highlights: [
              "কয়েকটি ফিল্ডে মালিক বা ম্যানেজার সেটআপ",
              "ইমপোর্ট ও POS-এর জন্য আপনার ওয়ার্কস্পেস প্রস্তুত",
            ],
            visual: "shop",
          },
          {
            step: "02",
            title: "Excel বা CSV থেকে প্রোডাক্ট আপলোড করুন",
            description:
              "প্রোডাক্ট লিস্ট ড্র্যাগ করুন বা টেমপ্লেট ডাউনলোড করে পূরণ করুন — এক মিনিটের কমে স্টক, দাম ও ইউনিট ইমপোর্ট করুন।",
            highlights: [
              "Excel ও CSV সাপোর্ট",
              "এক ইমপোর্টে বাল্ক স্টক, দাম ও ইউনিট",
            ],
            visual: "products",
            dropZoneTitle: "Excel বা CSV এখানে ড্রপ করুন",
            dropZoneHint: "ফাইল ড্র্যাগ করুন, অথবা ব্রাউজ করতে ক্লিক করুন",
            downloadTemplateLabel: "ইমপোর্ট টেমপ্লেট ডাউনলোড",
            successMessage: "৫২টি প্রোডাক্ট ইমপোর্ট · ৪৮ সেকেন্ড",
            exampleFile: "shop-products.xlsx",
          },
          {
            step: "03",
            title: "Google Contacts বা Excel/CSV থেকে কাস্টমার যোগ করুন",
            description:
              "Google থেকে এক ট্যাপে পুরো কন্টাক্ট লিস্ট ইমপোর্ট করুন, অথবা বাল্ক লেজারের জন্য কাস্টমার স্প্রেডশিট আপলোড করুন।",
            highlights: [
              "Google Contacts read-only ইমপোর্ট",
              "বাল্ক কাস্টমার রেকর্ডের জন্য Excel/CSV",
            ],
            visual: "customers",
            googleContactsLabel: "Google Contacts থেকে ইমপোর্ট",
            dropZoneTitle: "অথবা কাস্টমার Excel/CSV এখানে ড্রপ করুন",
            dropZoneHint: "ফাইল ড্র্যাগ করুন, অথবা ব্রাউজ করতে ক্লিক করুন",
            successMessage: "৩৮ জন কাস্টমার ইমপোর্ট · ৪১ সেকেন্ড",
            exampleFile: "customer-list.csv",
          },
          {
            step: "04",
            title: "POS-এ বিক্রি শুরু করুন",
            description:
              "কাউন্টারে বিল করুন, ক্যাশ বা বাকি রেকর্ড করুন, মেমো প্রিন্ট বা শেয়ার করুন — প্রতিটি বিক্রির সঙ্গে স্টক ও রিপোর্ট আপডেট।",
            highlights: [
              "বারকোড সার্চ ও মাল্টি-বিল ট্যাব",
              "প্রতিটি বিক্রির সঙ্গে স্বয়ংক্রিয় স্টক আপডেট",
            ],
            visual: "pos",
          },
        ],
      },
      trustStripEyebrow: "কেন memo app bd",
      trustStripTitle:
        "বাংলাদেশের রিটেইলের জন্য তৈরি, জেনেরিক বিলিং সফটওয়্যার নয়",
      trustStripDescription:
        "MemoApp স্থানীয় কাউন্টার, পেমেন্ট অভ্যাস ও ভাষার জন্য তৈরি — baki, bKash ও offline বাস্তবতা উপেক্ষা করা ইমপোর্টেড বিলিং টুল নয়।",
      trustStripItems: [
        {
          title: "অফলাইন-ফার্স্ট কাউন্টার",
          description:
            "ইন্টারনেট না থাকলেও বিক্রি ও মেমো রেকর্ড — অনলাইন হলে memoapp সিঙ্ক করে।",
        },
        {
          title: "বাংলা ও Banglish",
          description:
            "UI ভাষা বদলান এবং AI-কে দোকানে যে ভাষায় কথা বলেন সেই ভাষায় জিজ্ঞাসা করুন।",
        },
        {
          title: "BDT প্রাইসিং ও লোকাল পেমেন্ট",
          description:
            "টাকায় প্ল্যান, bKash ও Nagad দিয়ে বাকি, সাপ্লায়ার ও মেম্বারশিপ পেমেন্ট।",
        },
        {
          title: "BD দোকানের জন্য ফিট",
          description:
            "গ্রোসারি, ফার্মেসি, হার্ডওয়্যার, ইলেকট্রনিক্স, হোলসেল ও জেনারেল রিটেইল কাউন্টার।",
        },
      ],
      audienceEyebrow: "যে দোকানের জন্য মানানসই",
      audienceTitle: "কারা MemoApp ব্যবহার করতে পারে?",
      audienceDescription:
        "বাংলাদেশের যেসব রিটেইল ও সার্ভিস ব্যবসায় বিলিং, স্টক, কাস্টমার ও রিপোর্ট এক জায়গায় দরকার, তাদের জন্য MemoApp নমনীয়।",
      audiences: [
        {
          title: "গ্রোসারি ও দৈনন্দিন পণ্যের দোকান",
          description:
            "ব্যস্ত কাউন্টারের জন্য দ্রুত আইটেম সিলেকশন, বাকি সেল ও স্টক ভিজিবিলিটি।",
        },
        {
          title: "ফার্মেসি ও হেলথকেয়ার রিটেইলার",
          description:
            "অনেক SKU থাকা দোকানের জন্য প্রোডাক্ট অর্গানাইজেশন, ক্রয় ট্র্যাকিং ও পরিষ্কার সেলস রেকর্ড।",
        },
        {
          title: "হার্ডওয়্যার ও ইলেকট্রনিক্স স্টোর",
          description:
            "সাপ্লায়ার ক্রয়, কোটেশন-স্টাইল সেলিং ও বিস্তারিত ইনভেন্টরি কন্ট্রোল।",
        },
        {
          title: "হোলসেল ও ডিস্ট্রিবিউশন কাউন্টার",
          description:
            "কাস্টমার লেজার, বাল্ক সেল, পেমেন্ট রেকর্ড ও মালিক-লেভেল রিপোর্টিং।",
        },
        {
          title: "সার্ভিস শপ ও লোকাল বিজনেস",
          description:
            "ইনভয়েস, কাস্টমার হিস্ট্রি, টিম রেকর্ড, খরচ ও বিজনেস নোট।",
        },
      ],
      faqEyebrow: "ফিচার FAQ",
      faqTitle: "দোকান মালিকদের সাধারণ ফিচার প্রশ্ন",
      faqDescription:
        "নোটবুক, স্প্রেডশিট ও সাধারণ বিলিং টুলের সঙ্গে MemoApp তুলনা করার সময় দোকান মালিকদের জন্য ছোট উত্তর।",
      faqs: [
        {
          question: "MemoApp কি আমার সেলস খাতা ও Excel শিটের বদলে কাজ করবে?",
          answer:
            "হ্যাঁ। MemoApp মেমো, প্রোডাক্ট, কাস্টমার, বাকি, ক্রয়, খরচ ও রিপোর্ট একসঙ্গে রাখে, তাই আলাদা খাতা কম লাগে।",
        },
        {
          question: "কাস্টমার বাকি নিলে MemoApp সাহায্য করবে?",
          answer:
            "হ্যাঁ। কাস্টমার লেজার, WhatsApp ও SMS রিমাইন্ডার দিয়ে বাকি কালেকশন গুছিয়ে রাখতে সাহায্য করে।",
        },
        {
          question: "প্রতিদিন সব পণ্য না গুনেও স্টক বুঝতে পারব?",
          answer:
            "MemoApp সেলস ও ক্রয়কে ইনভেন্টরির সঙ্গে যুক্ত করে, তাই পরিমাণ ও লো-স্টক সিগন্যাল স্প্রেডশিট ছাড়াই দেখা যায়।",
        },
        {
          question: "কাউন্টারে মোবাইলে MemoApp ব্যবহার করা যাবে?",
          answer:
            "হ্যাঁ। MemoApp ফোন, ট্যাবলেট ও ডেস্কটপে ব্রাউজারে চলে — দোকানের ফ্লোরে বিলিংয়ের জন্য আদর্শ।",
        },
        {
          question: "বাংলায় থার্মাল রিসিপ্ট প্রিন্ট করা যাবে?",
          answer:
            "হ্যাঁ। ৫৮mm ও ৮০mm থার্মাল প্রিন্টার সাপোর্ট। প্রিন্টার মডেল অনুযায়ী বাংলা কোয়ালিটি ভিন্ন হতে পারে — Settings-এ গাইড দেখুন।",
        },
        {
          question: "Excel থেকে প্রোডাক্ট বা কাস্টমার ইমপোর্ট করা যাবে?",
          answer:
            "হ্যাঁ। ইমপোর্ট/এক্সপোর্ট দিয়ে স্প্রেডশিট থেকে মাইগ্রেট বা হিসাবরক্ষকের কাছে ডাটা পাঠানো যায়।",
        },
        {
          question: "bKash দিয়ে MemoApp মেম্বারশিপ কীভাবে পেমেন্ট করব?",
          answer:
            "ম্যানুয়াল bKash পেমেন্টে পেইড প্ল্যান অ্যাক্টিভেট করা যায়। ইন-অ্যাপ মেম্বারশিপ ফ্লো বা সাপোর্টে যোগাযোগ করে বর্তমান স্টেপ নিশ্চিত করুন।",
        },
        {
          question: "এই ফিচারগুলোর জন্য কোন প্ল্যান বেছে নেব?",
          answer:
            "ঘুরে দেখতে ফ্রি প্ল্যান দিয়ে শুরু করুন। ছোট দোকান Basic, ব্যস্ত কাউন্টার Growth, আনলিমিটেড রেকর্ড ও ব্যাকআপ লাগলে বিজনেস।",
        },
      ],
      ctaTitle: "বাস্তব দোকানের দিনে MemoApp ফিচার কীভাবে কাজ করে দেখুন",
      ctaDescription:
        "workflow পেজে দৈনন্দিন ফ্লো দেখুন, FAQ ব্রাউজ করুন, অথবা pricing তুলনা করে সঠিক প্ল্যান বেছে নিন।",
      workflowLink: "দৈনন্দিন workflow দেখুন",
      pricingLink: "প্রাইসিং প্ল্যান তুলনা করুন",
      faqLink: "সব FAQ দেখুন",
    },
    workflowRoute: {
      seoIntro:
        "এটি memo app bd-এর দৈনন্দিন workflow — MemoApp কীভাবে বাংলাদেশের দোকানে সেটআপ থেকে কাউন্টার, বাকি, রিস্টক ও রিপোর্ট চালায়।",
      onboardingEyebrow: "শুরু করা",
      onboardingTitle: "৩০ মিনিটের মধ্যে প্রথম বিক্রি",
      onboardingDescription:
        "নতুন memoapp দোকান দৈনন্দিন কাউন্টার রিদমের আগে সহজ অনবোর্ডিং পথ অনুসরণ করে।",
      onboardingSteps: [
        {
          step: "ক",
          title: "দোকান প্রোফাইল তৈরি করুন",
          description:
            "দোকানের নাম, ফোন, ঠিকানা, ক্যাটাগরি ও মালিক/ম্যানেজার রোল যোগ করুন।",
        },
        {
          step: "খ",
          title: "প্রথম প্রোডাক্ট যোগ করুন",
          description:
            "নাম, বিক্রয় মূল্য, স্টক, ইউনিট ও ঐচ্ছিক বারকোড/ছবি দিন।",
        },
        {
          step: "গ",
          title: "কাস্টমার যোগ করুন",
          description:
            "হাতে তৈরি করুন বা Google কানেক্ট করলে Google Contacts থেকে ইমপোর্ট করুন।",
        },
        {
          step: "ঘ",
          title: "প্রথম মেমো তৈরি করুন",
          description:
            "কাউন্টারে বিল করুন, পেমেন্ট বা বাকি রেকর্ড করুন, প্রিন্ট বা শেয়ার করুন।",
        },
      ],
      timelineEyebrow: "পুরো দিনের workflow",
      timelineTitle: "কাউন্টার খোলা থেকে সন্ধ্যার রিপোর্ট পর্যন্ত",
      timelineDescription:
        "বাংলাদেশের দোকান যেভাবে চলে MemoApp সেই ফ্লো অনুসরণ করে — প্রতিটি কাউন্টার কাজ মালিকের রেকর্ড আপডেট করে।",
      timeline: [
        {
          step: "০১",
          title: "কাউন্টার খুলুন",
          description:
            "প্রোডাক্ট শর্টকাট, ওপেনিং ক্যাশ ও প্রস্তুত মেমো অ্যাকশন দিয়ে দিন শুরু করুন।",
          featureLabel: "POS বিলিং ও ক্যাশ ভিজিবিলিটি",
          featureHref: "/features#feature-details",
        },
        {
          step: "০২",
          title: "মেমো বিক্রি, প্রিন্ট বা শেয়ার করুন",
          description:
            "পেইড, পারশিয়াল বা বাকি সেল তৈরি করুন — থার্মাল, PDF বা WhatsApp-এ পাঠান।",
          featureLabel: "মেমো, ইনভয়েস ও শেয়ারিং",
          featureHref: "/features#feature-details",
        },
        {
          step: "০৩",
          title: "সেলের সঙ্গে স্টক আপডেট হতে দিন",
          description:
            "প্রোডাক্ট পরিমাণ কাউন্টারের সঙ্গে যুক্ত — লো-স্টক ঝুঁকি আগে দেখুন।",
          featureLabel: "ইনভেন্টরি ও লো-স্টক অ্যালার্ট",
          featureHref: "/features#feature-details",
        },
        {
          step: "০৪",
          title: "বাকি কালেক্ট করুন ও ক্রয় রেকর্ড করুন",
          description:
            "কাস্টমার বাকি, সাপ্লায়ার ক্রয় ও পেমেন্ট দৈনিক সেলস ফ্লোর পাশেই গুছানো।",
          featureLabel: "কাস্টমার ও সাপ্লায়ার লেজার",
          featureHref: "/features#feature-details",
        },
        {
          step: "০৫",
          title: "খরচ ও বিজনেস নোট যোগ করুন",
          description:
            "ডিটেইল ভুলে যাওয়ার আগে দৈনিক খরচ ও দোকান আপডেট রেকর্ড করুন।",
          featureLabel: "খরচ ও কর্মচারী",
          featureHref: "/features#feature-details",
        },
        {
          step: "০৬",
          title: "রিপোর্ট, সিঙ্ক ও ব্যাকআপ রিভিউ করুন",
          description:
            "সেলস, লাভ, বাকি, স্টক, AI, সিঙ্ক ও Google Drive ব্যাকআপ দিয়ে দিন শেষ করুন।",
          featureLabel: "রিপোর্ট, AI, সিঙ্ক ও ব্যাকআপ",
          featureHref: "/features#feature-details",
        },
      ],
      bakiFlowEyebrow: "বাকি কালেকশন",
      bakiFlowTitle: "MemoApp কীভাবে কাস্টমার বাকি (baki) হ্যান্ডল করে",
      bakiFlowDescription:
        "বাংলাদেশে ক্রেডিট সেল সাধারণ — memoapp আলাদা খাতা ছাড়াই বাকি দৃশ্যমান ও কালেক্টেবল রাখে।",
      bakiFlowSteps: [
        {
          title: "ক্রেডিট মেমো থেকে বাকি জমা",
          description:
            "বাকিতে কেনা হলে মেমো কাস্টমার লেজারে ব্যালেন্স রেকর্ড করে।",
        },
        {
          title: "Aging ও ঝুঁকি দৃশ্যমানতা",
          description:
            "Due পেজে aging bucket ও warning — কাকে আগে ফলোআপ করবেন তা জানুন।",
        },
        {
          title: "ক্যাশ বা মোবাইল মানি দিয়ে কালেক্ট",
          description:
            "ক্যাশ, bKash, Nagad, কার্ড বা ব্যাংকে পূর্ণ/আংশিক কালেকশন।",
        },
        {
          title: "পেশাদার রিমাইন্ডার",
          description:
            "WhatsApp রিমাইন্ডার বা SMS অটো-রিমাইন্ডার (পেইড অ্যাড-অন)।",
        },
      ],
      restockFlowEyebrow: "রিস্টক লুপ",
      restockFlowTitle: "লো স্টক থেকে শেলফ রিফিল",
      restockFlowDescription:
        "সেলস, অ্যালার্ট, ক্রয় ও সাপ্লায়ার পেমেন্ট এক রিস্টক রিদমে যুক্ত।",
      restockFlowSteps: [
        {
          title: "ড্যাশবোর্ডে লো-স্টক সিগন্যাল",
          description:
            "সেলস ও reorder point-এ অ্যালার্ট — গুরুত্বপূর্ণ আইটেম শেষ হওয়ার আগে।",
        },
        {
          title: "সাপ্লায়ার ক্রয় তৈরি",
          description: "লাইন আইটেম, পরিমাণ, কস্ট — সেভ করলে স্টক বাড়ে।",
        },
        {
          title: "সাপ্লায়ার পেমেন্ট ট্র্যাক",
          description:
            "ক্যাশ, bKash, Nagad বা ব্যাংকে পেমেন্ট — payable সঠিক রাখুন।",
        },
        {
          title: "পরের বিক্রির জন্য প্রস্তুত",
          description: "আপডেট স্টক POS কাউন্টারে ফিরে আসে।",
        },
      ],
      rolesEyebrow: "টিমের পরিষ্কার ভূমিকা",
      rolesTitle: "প্রতিটি রোল নিজের দরকারি কাজ দেখে",
      rolesDescription:
        "MemoApp স্টাফের জন্য কাউন্টার স্পিড সহজ রাখে, মালিককে বড় ছবি দেখায়।",
      roles: [
        {
          title: "মালিক",
          description:
            "সম্পূর্ণ বিজনেস ভিউ: সেলস, লাভ, বাকি, স্টক, খরচ, রিপোর্ট, AI, টিম ও ব্যাকআপ।",
          permissions: [
            "প্ল্যান ও টিম ইনভাইট অনুমোদন",
            "সব রিপোর্ট ও এক্সপোর্ট দেখা",
            "Google ব্যাকআপ ও দোকান সেটিংস",
          ],
        },
        {
          title: "ক্যাশিয়ার",
          description:
            "কাউন্টার-ফোকাস: দ্রুত মেমো, পেমেন্ট, বাকি, প্রিন্ট ও শেয়ার।",
          permissions: [
            "মেমো তৈরি ও প্রিন্ট",
            "কাউন্টারে ক্যাশ ও বাকি রেকর্ড",
            "প্রোডাক্ট ও কাস্টমার দ্রুত সার্চ",
          ],
        },
        {
          title: "ম্যানেজার",
          description:
            "ব্যাক-অফিস: ক্রয়, সাপ্লায়ার, লো-স্টক, কর্মচারী ও দৈনিক ক্লোজিং।",
          permissions: [
            "ক্রয় ও সাপ্লায়ার পেমেন্ট ম্যানেজ",
            "ইনভেন্টরি ও লো-স্টক লিস্ট",
            "টিম রেকর্ড ও দৈনিক ক্লোজিং সাপোর্ট",
          ],
        },
      ],
      ctaTitle: "আপনার দোকানের workflow অনুযায়ী প্ল্যান বেছে নিন",
      ctaDescription:
        "ছোট দোকান সহজভাবে শুরু করতে পারে, ব্যস্ত কাউন্টার রিপোর্ট, AI, ব্যাকআপ ও স্টাফ যোগ করতে পারে।",
      pricingLink: "MemoApp প্রাইসিং তুলনা করুন",
      featuresLink: "MemoApp ফিচার দেখুন",
    },
    pricingRoute: {
      comparisonEyebrow: "প্ল্যান তুলনা",
      comparisonTitle: "প্রতিটি MemoApp প্ল্যানে কী আছে তুলনা করুন",
      comparisonDescription:
        "বিলিং, ইনভেন্টরি, বাকি, রিপোর্ট, AI, ব্যাকআপ ও টিম ফিচারের সঙ্গে আপনার দোকানের আকার মিলিয়ে নিতে এই টেবিলটি ব্যবহার করুন।",
      comparisonColumns: [
        "ফিচার",
        "ফ্রি",
        "Basic",
        "Growth",
        "বিজনেস",
        "এন্টারপ্রাইজ",
      ],
      comparisonRows: [
        {
          feature: "ইনভয়েস ও মেমো",
          trial: "ফ্রি প্ল্যান সীমা",
          basic: "সর্বোচ্চ ২০০টি কোর রেকর্ড",
          growth: "৫০০ কোর রেকর্ড + এক্সপোর্ট",
          pro: "আনলিমিটেড রেকর্ড",
          enterprise: "কাস্টম কোটা",
        },
        {
          feature: "অ্যাক্সেস অ্যাকাউন্ট",
          trial: "১ মালিক অ্যাকাউন্ট",
          basic: "১ মালিক অ্যাকাউন্ট",
          growth: "১ মালিক, ১ ম্যানেজার, ১ স্টাফ",
          pro: "২ মালিক, ১ ম্যানেজার, ৩ স্টাফ",
          enterprise: "কাস্টম অ্যাক্সেস নীতি",
        },
        {
          feature: "স্টাফ আসন",
          trial: "স্টাফ ইনভাইট নেই",
          basic: "স্টাফ ইনভাইট নেই",
          growth: "১ ম্যানেজার + ১ স্টাফ (কর্মচারী ম্যানেজমেন্ট)",
          pro: "৩ স্টাফ অ্যাকাউন্ট",
          enterprise: "অসীম + টিম",
        },
        {
          feature: "ব্যাকআপ ও স্টোরেজ",
          trial: "স্ট্যান্ডার্ড স্ন্যাপশট",
          basic: "বেসিক স্ন্যাপশট",
          growth: "ঘন ঘন রিস্টোর",
          pro: "বেশি ধারণক্ষমতা",
          enterprise: "চুক্তি ভিত্তিক সংরক্ষণ",
        },
        {
          feature: "এআই সহকারী",
          trial: "—",
          basic: "—",
          growth: "এআই বেসিক",
          pro: "ইনসাইট প্যাক",
          enterprise: "কাস্টম এআই",
        },
        {
          feature: "অ্যানালিটিক্স",
          trial: "সংক্ষিপ্ত টাইলস",
          basic: "দৈনিক ড্যাশ",
          growth: "লাভ-ক্ষতি ড্রিল",
          pro: "উন্নত দোকান KPI",
          enterprise: "কাস্টম ড্যাশ",
        },
        {
          feature: "রিপোর্টসেট",
          trial: "মৌলিক সামারি",
          basic: "দৈনিক পিডিএফ ইমেল",
          growth: "আরও ব্যবস্থা ও এক্সেল",
          pro: "বড় রিপোর্ট জমা",
          enterprise: "লেবেল কাস্টম",
        },
        {
          feature: "এক্সপোর্ট (PDF/XLS)",
          trial: "কোর ফরম্যাট",
          basic: "কোর সিএসভি ও পিডিএফ",
          growth: "গুণমান ও এক্সেল",
          pro: "বড় ভলিউম এক্সপোর্ট",
          enterprise: "কাস্টম স্ট্রিমিং ফিড",
        },
        {
          feature: "সাপোর্ট",
          trial: "সেলফ ডক",
          basic: "~৪৮ ঘণ্টায় ইমেইল",
          growth: "অগ্রাধিকার ~২৪ ঘণ্টা",
          pro: "নামকৃত অগ্রাধিকার",
          enterprise: "২৪/৭ + এসএলএ",
        },
        {
          feature: "রোল ও অনুমতি",
          trial: "মালিক টেস্ট মোড",
          basic: "মালিক ও ক্যাশিয়ার ফরক",
          growth: "ম্যানেজার ও স্টাফ রোলসহ কর্মচারী ম্যানেজমেন্ট",
          pro: "পূর্ণ কর্মচারী ম্যানেজমেন্ট ও রোল-ভিত্তিক অ্যাক্সেস",
          enterprise: "নীতিমালায় কাস্টম ট্রি",
        },
      ],
      assurance: [
        "পেইড প্ল্যান নেওয়ার আগে ফ্রি প্ল্যান দিয়ে শুরু করুন।",
        "মাসিক বিলিংয়ের তুলনায় ইয়ারলি বিলিংয়ে দুই মাস বোনাস পাওয়া যায়।",
        "রিপোর্ট, AI, ব্যাকআপ বা এমপ্লয়ি workflow দরকার হলে আপগ্রেড করুন।",
        "চেইন, হোলসেল বা মাল্টি-ব্রাঞ্চ রোলআউট? এন্টারপ্রাইজের জন্য সেলসে যোগাযোগ করুন।",
      ],
      faqEyebrow: "প্রাইসিং FAQ",
      faqTitle: "প্ল্যান বেছে নেওয়ার আগে সাধারণ প্রশ্ন",
      faqDescription:
        "ফ্রি প্ল্যান অ্যাক্সেস, ইয়ারলি সেভিং, আপগ্রেড ও পেমেন্টের আগে কী যাচাই করবেন তা বুঝতে এই উত্তরগুলো সাহায্য করবে।",
      featuresLink: "MemoApp ফিচার দেখুন",
      faqLink: "পাবলিক FAQ পড়ুন",
      faqs: [
        {
          question: "৩০ দিনের ফ্রি প্ল্যানের পর কী হবে?",
          answer:
            "৩০ দিনের পর দোকানের আকার অনুযায়ী প্ল্যান বেছে নিন। Basic ছোট কাউন্টার, Growth প্রথম টিম যোগ করা ব্যস্ত রিটেইলার এবং বিজনেস প্রতিষ্ঠিত মাল্টি-কাউন্টার টিমের জন্য।",
        },
        {
          question: "পরে কি প্ল্যান পরিবর্তন করা যাবে?",
          answer:
            "হ্যাঁ। ছোট প্ল্যান দিয়ে শুরু করে রিপোর্ট, AI, ব্যাকআপ, এমপ্লয়ি বা প্রায়োরিটি সাপোর্ট দরকার হলে আপগ্রেড করুন।",
        },
        {
          question: "ইয়ারলি বিলিং কেন সাশ্রয়ী?",
          answer:
            "ইয়ারলি বিলিং মাসে মাসে ১২ মাস পেমেন্ট করার তুলনায় দুই মাস বোনাস হিসেবে পজিশন করা হয়েছে।",
        },
        {
          question: "ছোট গ্রোসারি দোকানের জন্য কোন প্ল্যান ভালো?",
          answer:
            "এক দোকানের POS বিলিং, প্রোডাক্ট, স্টক ও কাস্টমার বাকি দরকার হলে Basic সাধারণত সহজ শুরু।",
        },
        {
          question: "AI ও শক্তিশালী রিপোর্ট কোন প্ল্যানে আছে?",
          answer:
            "Growth-এ ম্যানেজার ও স্টাফ লগইনসহ কর্মচারী ম্যানেজমেন্ট, এআই ও রিচার অ্যানালিটিক্স আছে। বিজনেস প্রতিষ্ঠিত টিমের জন্য, যেখানে আনলিমিটেড রেকর্ড, ব্যাকআপ ও প্রায়োরিটি সাপোর্টও দরকার।",
        },
        {
          question: "পেমেন্ট ও অ্যাক্টিভেশন বিস্তারিত কীভাবে কনফার্ম করব?",
          answer:
            "পেমেন্টের আগে লাইভ অ্যাপ বা MemoApp সাপোর্ট ব্যবহার করে বর্তমান পেমেন্ট মেথড, অ্যাক্টিভেশন সময় ও পলিসি আপডেট কনফার্ম করুন।",
        },
      ],
    },
    faqTopics: [
      {
        title: "General",
        description:
          "সেটআপ, দোকান প্রোফাইল, অফলাইন সিঙ্ক ও দৈনন্দিন অ্যাপ বেসিক।",
      },
      {
        title: "Memos & sales",
        description: "মেমো, ইনভয়েস, প্রিন্টিং, PDF শেয়ারিং ও দৈনিক সেলস।",
      },
      {
        title: "Stock & inventory",
        description: "প্রোডাক্ট, স্টক লেভেল, ইউনিট, ক্রয় ও লো-স্টক অ্যালার্ট।",
      },
      {
        title: "Account & team",
        description:
          "প্রোফাইল, দোকান, টিম অ্যাক্সেস, এমপ্লয়ি রেকর্ড ও সিকিউরিটি।",
      },
      {
        title: "Billing & plans",
        description: "মেম্বারশিপ প্ল্যান, রিসিট, পেমেন্ট ও প্ল্যান পরিবর্তন।",
      },
    ],
    faqs: [
      {
        question: "MemoApp কি শুধু POS সিস্টেম?",
        answer:
          "না। POS কাউন্টারের অংশ, কিন্তু MemoApp (memo app bd) ইনভেন্টরি, কাস্টমার, বাকি, সাপ্লায়ার, ক্রয়, খরচ, রিপোর্ট ও AI ইনসাইটও কভার করে।",
        category: "General",
      },
      {
        question: "MemoApp কী এবং কার জন্য?",
        answer:
          "MemoApp বাংলাদেশের রিটেইলারদের জন্য শপ ম্যানেজমেন্ট ও POS ওয়েব অ্যাপ — গ্রোসারি, ফার্মেসি, হার্ডওয়্যার, হোলসেল ও জেনারেল স্টোর।",
        category: "General",
      },
      {
        question: "ইন্টারনেট দুর্বল হলে দোকান চালানো যাবে?",
        answer:
          "হ্যাঁ। MemoApp অফলাইন-ফ্রেন্ডলি — জরুরি কাউন্টার কাজ চলতে পারে, কানেকশন ফিরলে সিঙ্ক হয়।",
        category: "General",
      },
      {
        question: "বিক্রির সময় ইন্টারনেট চলে গেলে কী হবে?",
        answer:
          "কাউন্টার কাজ অফলাইনে চালু থাকতে পারে। অনলাইন হলে memoapp পending মেমো সিঙ্ক করে।",
        category: "General",
      },
      {
        question: "মোবাইল ও ট্যাবলেটে MemoApp চলবে?",
        answer:
          "হ্যাঁ। ফোন, ট্যাবলেট ও ডেস্কটপ ব্রাউজারে চলে — দোকানের ফ্লোরে বিলিংয়ের জন্য উপযোগী।",
        category: "General",
      },
      {
        question: "দ্রুত মেমো তৈরি ও শেয়ার করা যাবে?",
        answer:
          "হ্যাঁ। থার্মাল প্রিন্ট, PDF ও WhatsApp-এ দ্রুত মেমো শেয়ার সাপোর্ট।",
        category: "Memos & sales",
      },
      {
        question: "মেমো, কোটেশন ও ডেলিভারি চালানের পার্থক্য কী?",
        answer:
          "মেমো সম্পন্ন বিক্রি। কোটেশন দামের প্রস্তাব — কনফার্ম হলে মেমোতে রূপান্তর। চালান পণ্য পাঠানোর ট্র্যাক, প্রায়ই হোলসেলে।",
        category: "Memos & sales",
      },
      {
        question: "WhatsApp-এ কাস্টমারকে মেমো PDF পাঠানো যাবে?",
        answer:
          "হ্যাঁ। মেমো সেভের পর PDF WhatsApp বা অন্য চ্যানেলে শেয়ার করা যায়।",
        category: "Memos & sales",
      },
      {
        question: "কাস্টমার বাকি ও কালেকশন ট্র্যাক করা যাবে?",
        answer:
          "হ্যাঁ। লেজার, বাকি ব্যালেন্স, WhatsApp/SMS রিমাইন্ডার দিয়ে কালেকশন গুছিয়ে রাখা যায়।",
        category: "Memos & sales",
      },
      {
        question: "লো স্টক বুঝতে MemoApp সাহায্য করে?",
        answer:
          "হ্যাঁ। ড্যাশবোর্ডে পরিমাণ, ইউনিট, ক্রয় কনটেক্সট ও লো-স্টক ঝুঁকি দেখা যায়।",
        category: "Stock & inventory",
      },
      {
        question: "প্রোডাক্টের বারকোড লেবেল প্রিন্ট করা যাবে?",
        answer: "হ্যাঁ। বারকোড লেবেল প্রিন্ট ও বিলিংয়ে বারকোড সার্চ সাপোর্ট।",
        category: "Stock & inventory",
      },
      {
        question: "থার্মাল রিসিপ্ট প্রিন্টার কীভাবে সেটআপ করব?",
        answer:
          "MemoApp-এ Settings → Printer setup খুলুন। ৫৮mm ও ৮০mm থার্মাল প্রিন্টার — ইন-অ্যাপ গাইড অনুসরণ করুন।",
        category: "Stock & inventory",
      },
      {
        question: "MemoApp কি বাংলা সাপোর্ট করে?",
        answer:
          "হ্যাঁ। ইংরেজি, বাংলা ও Banglish-ফ্রেন্ডলি — গুরুত্বপূর্ণ ওয়ার্কফ্লোতে।",
        category: "Account & team",
      },
      {
        question: "আমার টিম মেম্বাররা MemoApp ব্যবহার করতে পারবে?",
        answer:
          "পেইড প্ল্যানে মালিক, ম্যানেজার, স্টাফ রোল, এমপ্লয়ি রেকর্ড ও Growth+ এ বেতন ফিচার।",
        category: "Account & team",
      },
      {
        question: "আমার দোকানের ডাটা ব্যাকআপ আছে?",
        answer: "হ্যাঁ। Google Drive ব্যাকআপ, ইমপোর্ট/এক্সপোর্ট — লক-ইন নেই।",
        category: "Account & team",
      },
      {
        question: "কোন প্ল্যান দিয়ে শুরু করব?",
        answer:
          "৩০ দিন ফ্রি দিয়ে ঘুরে দেখুন। ছোট দোকান Basic, ব্যস্ত কাউন্টার Growth, প্রতিষ্ঠিত টিম বিজনেস।",
        category: "Billing & plans",
      },
      {
        question: "bKash বা Nagad দিয়ে MemoApp পেমেন্ট কীভাবে?",
        answer:
          "ম্যানুয়াল bKash পেমেন্টে মেম্বারশিপ। ইন-অ্যাপ ফ্লো বা সাপোর্টে যোগাযোগ করে স্টেপ নিশ্চিত করুন।",
        category: "Billing & plans",
      },
      {
        question: "কোন ধরনের দোকানে কোন প্ল্যান মানানসই?",
        answer:
          "গ্রোসারি, ফার্মেসি, হার্ডওয়্যার, ইলেকট্রনিক্স, রেস্টুরেন্ট, জেনারেল রিটেইল। Basic solo কাউন্টার; Growth/Business টিম ও বেশি রেকর্ড।",
        category: "Billing & plans",
      },
      {
        question: "SMS বাকি রিমাইন্ডারের খরচ কত?",
        answer:
          "SMS অটো-রিমাইন্ডার পেইড অ্যাড-অন (প্রায় ৳২৫০/মাস)। WhatsApp ম্যানুয়াল ফলোআপও সাপোর্ট।",
        category: "Billing & plans",
      },
      {
        question: "পরে প্ল্যান বদল বা আপগ্রেড করা যাবে?",
        answer:
          "হ্যাঁ। ছোট প্ল্যান দিয়ে শুরু করে রিপোর্ট, AI, ব্যাকআপ, কর্মচারী বা প্রায়োরিটি সাপোর্ট লাগলে আপগ্রেড করুন।",
        category: "Billing & plans",
      },
    ],
    faqPage: {
      title: "সাধারণ জিজ্ঞাসা",
      browseTopics: "টপিক দেখুন",
      allGroups: "সব গ্রুপ",
      searchPlaceholder: "প্রশ্ন, টপিক বা উত্তর খুঁজুন...",
      emptyTitle: "মিল পাওয়া যায়নি",
      emptyDescription:
        "অন্য কীওয়ার্ড ব্যবহার করুন অথবা সাইডবার থেকে অন্য ক্যাটাগরি বেছে নিন।",
      popular: "জনপ্রিয়",
      stillNeedHelp: "আরও সাহায্য দরকার?",
      supportTitle: "লগইনের পর ইন-অ্যাপ সাপোর্ট পাওয়া যাবে।",
      supportDescription:
        "সমস্যা রিপোর্ট করুন অথবা ইমেইল/WhatsApp-এ যোগাযোগ করুন। আমরা যত দ্রুত সম্ভব উত্তর দিই।",
      openHelpCenter: "Help Center খুলুন",
      emailSupport: "ইমেইল সাপোর্ট",
      chatWithUs: "চ্যাট করুন",
      whatsappMessage: "হ্যালো MemoApp টিম, MemoApp নিয়ে আমার সাহায্য দরকার।",
    },
  },
} as const;

export type LandingContent = (typeof landingContent)[Language];
