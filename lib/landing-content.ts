export const appLoginUrl = "https://memoappbd.shop";
export const ororaSoftAboutUrl = "https://www.ororasoft.com/about";
export const ororaSoftUrl = "https://www.ororasoft.com/";

export type Language = "bn" | "en";

export const navItems = [
  { label: "Home", href: "/", external: false },
  { label: "About Us", href: ororaSoftAboutUrl, external: true },
  { label: "Features", href: "/features", external: false },
  { label: "Workflow", href: "/workflow", external: false },
  { label: "Pricing", href: "/pricing", external: false },
  { label: "FAQ", href: "/faq", external: false },
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
      googleDataNote:
        "Google Contacts and Drive access are used only for customer import and backup features you choose.",
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
    assistant: {
      title: "Ayat",
      subtitle: "AI Business Assistant",
      launcherLabel: "Talk with Ayat",
      closeLabel: "Close Ayat assistant",
      placeholder: "Type your question...",
      sendLabel: "Send",
      typingLabel: "Ayat is thinking...",
      welcomeMessage:
        "Hi, I am Ayat, your AI Business Assistant. I can help you understand MemoApp features, pricing, workflow, Google backup, OroraSoft, and support options.",
      fallbackMessage:
        "I can answer common MemoApp landing-page questions, but I do not want to guess. You can ask about pricing, features, workflow, Google backup, OroraSoft, Bangla support, or contact support.",
      whatsappSupportLabel: "WhatsApp support",
      emailSupportLabel: "Email support",
      quickPrompts: [
        {
          label: "Which plan is right for me?",
          query: "Which MemoApp plan is right for my shop?",
        },
        {
          label: "What features are included?",
          query: "What features does MemoApp include?",
        },
        {
          label: "How does workflow work?",
          query: "How does MemoApp workflow work during a shop day?",
        },
        {
          label: "Google backup",
          query: "How does Google Drive backup work in MemoApp?",
        },
        {
          label: "Who built MemoApp?",
          query: "Who built MemoApp and what is OroraSoft?",
        },
      ],
    },
    hero: {
      eyebrow: "Built for BD SMEs and modern retail counters",
      title: "Your Business Assistant, Inventory Manager, and POS — All in One",
      titlePrefix: "Your Business Assistant, Inventory Manager, and POS",
      titleHighlight: "All-in-One",
      description:
        "Built with AI to simplify daily operations and help businesses grow faster. Start with zero cost.",
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
      eyebrow: "Owner-ready view",
      title: "Beautiful enough for the owner, fast enough for the counter.",
      description:
        "A real MemoApp dashboard preview shows owners the sales, stock, dues, reports, and daily signals they can act on.",
      dashboardLabel: "Live dashboard preview",
      points: [
        "Offline-first workflows keep selling possible during network drops.",
        "Bengali-friendly shop terms make the product feel familiar to local teams.",
        "Membership-ready positioning supports future pricing and onboarding flows.",
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
        "These FAQs are written for SEO and conversion while leaving space for future product, pricing, and support updates.",
    },
    finalCta: {
      eyebrow: "Ready for launch",
      title:
        "Turn MemoApp into a website that sells the product before the demo.",
      description:
        "Capture interest from shop owners, explain the value clearly, and keep the page ready for backend-powered lead capture when needed.",
    },
    routeHeroes: {
      features: {
        eyebrow: "MemoApp features",
        title:
          "Everything your shop needs from the counter to the owner dashboard.",
        description:
          "MemoApp brings POS billing, inventory, dues, purchasing, reporting, team workflows, backups, sharing, and AI assistance into one clean retail workspace.",
      },
      workflow: {
        eyebrow: "Shop workflow",
        title: "A daily operating rhythm designed for real retail teams.",
        description:
          "From the first sale of the day to closing reports, MemoApp keeps counter work simple and owner visibility strong.",
      },
      pricing: {
        eyebrow: "Simple pricing",
        title: "Simple pricing for every business size.",
        description:
          "Track sales, stock, dues, purchases, suppliers, expenses, P&L, and AI from one plan that grows with your shop.",
      },
      faq: {
        eyebrow: "Help center",
        title: "Search answers, read FAQs, or send us feedback.",
        description:
          "We are here to help your shop run smoothly. Browse common public questions here, then sign in to use the full in-app Help Center.",
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
      deepDiveEyebrow: "Feature details",
      deepDiveTitle: "How MemoApp facilities support daily shop work",
      deepDiveDescription:
        "Each MemoApp feature is designed to remove a common retail bottleneck: slow billing, unclear stock, scattered baki records, manual reports, and weak backup discipline.",
      deepDiveGroups: [
        {
          title: "Billing & POS",
          description:
            "Create fast memos at the counter while keeping every sale ready for printing, PDF sharing, social sharing, and later reporting.",
          bullets: [
            "Make sales memos, invoices, quotations, and challans from one billing flow.",
            "Record paid, partial paid, and due sales without opening separate ledgers.",
            "Share customer-ready documents through print, PDF, and social channels.",
          ],
        },
        {
          title: "Inventory & Purchases",
          description:
            "Keep product lists, stock movement, purchase records, supplier activity, and low-stock signals connected to the sales counter.",
          bullets: [
            "Track products by category, unit, quantity, purchase price, and sale price.",
            "Connect supplier purchases to stock updates and payable context.",
            "Spot low-stock risks before important items disappear from the shelf.",
          ],
        },
        {
          title: "Customers & Dues",
          description:
            "MemoApp helps shops manage baki professionally with customer ledgers, payment history, reminders, and clearer collection decisions.",
          bullets: [
            "See who owes money, how much they owe, and when the balance changed.",
            "Collect full or partial payments and keep the ledger updated instantly.",
            "Use due reminders to reduce forgotten customer payments.",
          ],
        },
        {
          title: "Reports & AI",
          description:
            "Owners can review sales, cash, profit, expenses, dues, and stock signals without waiting for manual spreadsheet work.",
          bullets: [
            "Review daily sales, stock value, dues, purchases, and expense context.",
            "Ask the AI assistant practical questions about stock, cashflow, or sales trends.",
            "Use reports to decide what to restock, who to follow up with, and where profit is moving.",
          ],
        },
        {
          title: "Team, Backup & Security",
          description:
            "As a shop grows, MemoApp supports employee records, role-aware workflows, Google Drive backup, and offline-friendly sync.",
          bullets: [
            "Organize team workflows with employee and salary-related operations.",
            "Protect business data with scheduled Google Drive backup.",
            "Keep important counter work moving when internet quality is uneven.",
          ],
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
            "Yes. MemoApp keeps memos, products, customers, dues, purchases, expenses, and reports together so owners do not need to maintain separate notebooks for daily shop data.",
        },
        {
          question: "Does MemoApp help if customers buy on baki?",
          answer:
            "Yes. Customer ledgers show due balances and payment history, while reminders help the team follow up with customers more consistently.",
        },
        {
          question: "Can I understand stock without counting everything daily?",
          answer:
            "MemoApp connects sales and purchases to inventory, so owners can monitor quantities, low-stock signals, and purchase context without starting from a blank spreadsheet.",
        },
        {
          question: "Which plan should I choose for these features?",
          answer:
            "Start with the free plan if you are exploring. Basic fits smaller shops, Growth is better for busy counters adding their first team, and Business is best for established multi-counter teams that need unlimited records, backup, and priority support.",
        },
      ],
      ctaTitle: "See how these features work during a real shop day",
      ctaDescription:
        "Review the workflow page for the daily operating flow, or compare pricing to choose the right plan for your counter.",
      workflowLink: "See the daily workflow",
      pricingLink: "Compare pricing plans",
    },
    workflowRoute: {
      timelineEyebrow: "Full-day workflow",
      timelineTitle: "From opening counter to evening report",
      timelineDescription:
        "MemoApp follows the way a shop actually runs, so each action at the counter updates the records owners need later.",
      timeline: [
        {
          step: "01",
          title: "Open the counter",
          description:
            "Start the day with product shortcuts, opening cash context, and ready memo actions for the first customers.",
          featureLabel: "POS billing and cash visibility",
          featureHref: "/features#billing-pos",
        },
        {
          step: "02",
          title: "Sell and print or share memos",
          description:
            "Create paid, partial paid, or due sales and send customer-ready memos through print, PDF, or social channels.",
          featureLabel: "Memos, invoices, and sharing",
          featureHref: "/features#billing-pos",
        },
        {
          step: "03",
          title: "Let stock update with the sale",
          description:
            "Product quantities stay connected to counter activity, helping owners see low-stock risk earlier.",
          featureLabel: "Inventory and low-stock alerts",
          featureHref: "/features#inventory-purchases",
        },
        {
          step: "04",
          title: "Collect dues and record purchases",
          description:
            "Customer baki, supplier purchases, and payable context stay organized beside the daily sales flow.",
          featureLabel: "Customer and supplier ledgers",
          featureHref: "/features#customers-dues",
        },
        {
          step: "05",
          title: "Add expenses and business notes",
          description:
            "Record daily costs, team notes, and important shop updates before details are forgotten.",
          featureLabel: "Expenses and business notes",
          featureHref: "/features#team-backup-security",
        },
        {
          step: "06",
          title: "Review reports, sync, and back up",
          description:
            "Close the day with sales, profit, dues, stock, AI guidance, sync status, and backup confidence.",
          featureLabel: "Reports, AI, sync, and backup",
          featureHref: "/features#reports-ai",
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
            "Reviews sales, profit, dues, stock value, expenses, AI suggestions, and backup status from one business view.",
        },
        {
          title: "Cashier",
          description:
            "Focuses on fast memo creation, payment collection, due recording, printing, and customer sharing.",
        },
        {
          title: "Manager",
          description:
            "Checks purchases, suppliers, low-stock items, team operations, and daily closing context.",
        },
      ],
      ctaTitle: "Choose the plan that matches your shop workflow",
      ctaDescription:
        "Small shops can start simple, while busy counters and growing teams can add stronger reports, AI, backup, and staff features.",
      pricingLink: "Compare MemoApp pricing",
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
          pro: "3 owners, 1 manager, 2 staff",
          enterprise: "Custom access policy",
        },
        {
          feature: "Staff seats",
          trial: "No staff invites",
          basic: "No staff invites",
          growth: "1 manager + 1 staff (employee management)",
          pro: "2 staff accounts",
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
          "No. POS billing is the front counter, but MemoApp also covers inventory, customers, dues, suppliers, purchases, expenses, reports, and AI-assisted insights.",
        category: "General",
      },
      {
        question: "Can my shop work when the internet is unstable?",
        answer:
          "MemoApp is designed around offline-friendly workflows, so key counter work can continue and sync when the connection returns.",
        category: "General",
      },
      {
        question: "Can I create and share memos quickly?",
        answer:
          "Yes. MemoApp supports fast memo creation plus customer-ready sharing flows for PDF, print, and social channels.",
        category: "Memos & sales",
      },
      {
        question: "Does MemoApp help with low stock?",
        answer:
          "Yes. Product and stock workflows help owners monitor quantities, units, purchase context, and low-stock risk.",
        category: "Stock & inventory",
      },
      {
        question: "Can I track customer baki and due collection?",
        answer:
          "Yes. Customer ledgers, due balances, payments, and reminders help shops keep collection work organized.",
        category: "Memos & sales",
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
          "Paid plans support team-oriented workflows such as manager access, employee records, and salary-related operations.",
        category: "Account & team",
      },
      {
        question: "Which plan should I start with?",
        answer:
          "Start with the free plan if you want to explore. Basic fits smaller shops, Growth is best for busy counters adding their first team, and Business is built for established multi-counter teams.",
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
      googleDataNote:
        "Google Contacts ও Drive access শুধু আপনার বেছে নেওয়া customer import ও backup feature-এর জন্য ব্যবহার হয়।",
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
    assistant: {
      title: "Ayat",
      subtitle: "AI Business Assistant",
      launcherLabel: "Talk with Ayat",
      closeLabel: "Ayat assistant বন্ধ করুন",
      placeholder: "আপনার প্রশ্ন লিখুন...",
      sendLabel: "পাঠান",
      typingLabel: "Ayat ভাবছে...",
      welcomeMessage:
        "হ্যালো, আমি Ayat, আপনার AI Business Assistant। MemoApp feature, pricing, workflow, Google backup, OroraSoft ও support option বুঝতে সাহায্য করতে পারি।",
      fallbackMessage:
        "আমি MemoApp landing page-এর সাধারণ প্রশ্নের উত্তর দিতে পারি, কিন্তু অনুমান করতে চাই না। Pricing, feature, workflow, Google backup, OroraSoft, Bangla support বা support contact সম্পর্কে জিজ্ঞাসা করুন।",
      whatsappSupportLabel: "WhatsApp support",
      emailSupportLabel: "Support-এ ইমেইল করুন",
      quickPrompts: [
        {
          label: "কোন প্ল্যান ভালো?",
          query: "আমার দোকানের জন্য কোন MemoApp plan ভালো?",
        },
        {
          label: "কী কী feature আছে?",
          query: "MemoApp-এ কী কী feature আছে?",
        },
        {
          label: "Workflow কীভাবে চলে?",
          query: "দোকানের দিনে MemoApp workflow কীভাবে কাজ করে?",
        },
        {
          label: "Google backup",
          query: "MemoApp-এ Google Drive backup কীভাবে কাজ করে?",
        },
        {
          label: "OroraSoft কে?",
          query: "MemoApp কে তৈরি করেছে এবং OroraSoft কী?",
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
        "AI দিয়ে তৈরি, যাতে দৈনন্দিন কাজ সহজ হয় এবং ব্যবসা আরও দ্রুত বড় হতে পারে। শূন্য খরচে শুরু করুন।",
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
      eyebrow: "মালিকের জন্য প্রস্তুত ভিউ",
      title: "মালিকের জন্য সুন্দর, কাউন্টারের জন্য দ্রুত।",
      description:
        "বাস্তব MemoApp ড্যাশবোর্ড প্রিভিউতে মালিকরা সেলস, স্টক, বাকি, রিপোর্ট ও দৈনিক সিগন্যাল একসঙ্গে দেখতে পারেন।",
      dashboardLabel: "লাইভ ড্যাশবোর্ড প্রিভিউ",
      points: [
        "নেটওয়ার্ক ড্রপ হলেও অফলাইন-ফার্স্ট ওয়ার্কফ্লো বিক্রি চালু রাখে।",
        "বাংলা-ফ্রেন্ডলি দোকানি ভাষা লোকাল টিমের কাছে পণ্যটিকে পরিচিত করে।",
        "মেম্বারশিপ-রেডি পজিশনিং ভবিষ্যৎ প্রাইসিং ও অনবোর্ডিংকে সাপোর্ট করে।",
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
        "এই FAQ গুলো SEO ও কনভার্সনের জন্য লেখা, ভবিষ্যৎ প্রোডাক্ট, প্রাইসিং ও সাপোর্ট আপডেটের জায়গা রেখে।",
    },
    finalCta: {
      eyebrow: "লঞ্চের জন্য প্রস্তুত",
      title: "ডেমোর আগেই MemoApp-এর মূল্য বোঝায় এমন ওয়েবসাইট তৈরি করুন।",
      description:
        "দোকান মালিকদের আগ্রহ ধরুন, ভ্যালু পরিষ্কারভাবে বুঝান এবং ভবিষ্যতে ব্যাকএন্ড-পাওয়ারড লিড ক্যাপচারের জন্য পেজ প্রস্তুত রাখুন।",
    },
    routeHeroes: {
      features: {
        eyebrow: "MemoApp ফিচার",
        title: "কাউন্টার থেকে মালিকের ড্যাশবোর্ড পর্যন্ত দোকানের সব প্রয়োজন।",
        description:
          "MemoApp POS বিলিং, ইনভেন্টরি, বাকি, ক্রয়, রিপোর্টিং, টিম ওয়ার্কফ্লো, ব্যাকআপ, শেয়ারিং ও AI সহায়তা এক পরিষ্কার রিটেইল ওয়ার্কস্পেসে আনে।",
      },
      workflow: {
        eyebrow: "দোকানের ওয়ার্কফ্লো",
        title: "বাস্তব রিটেইল টিমের জন্য তৈরি দৈনিক অপারেটিং রিদম।",
        description:
          "দিনের প্রথম বিক্রি থেকে ক্লোজিং রিপোর্ট পর্যন্ত MemoApp কাউন্টার কাজ সহজ রাখে এবং মালিককে শক্তিশালী ভিজিবিলিটি দেয়।",
      },
      pricing: {
        eyebrow: "সহজ প্রাইসিং",
        title: "প্রতিটি ব্যবসার আকারের জন্য সহজ প্রাইসিং।",
        description:
          "বিক্রি, স্টক, বাকি, ক্রয়, সাপ্লায়ার, খরচ, লাভ-ক্ষতি ও AI এক প্ল্যানে — দোকান বাড়লে সঙ্গে স্কেল করুন।",
      },
      faq: {
        eyebrow: "হেল্প সেন্টার",
        title: "উত্তর খুঁজুন, FAQ পড়ুন অথবা ফিডব্যাক পাঠান।",
        description:
          "আপনার দোকান মসৃণভাবে চালাতে আমরা পাশে আছি। এখানে সাধারণ পাবলিক প্রশ্ন দেখুন, তারপর লগইন করে পূর্ণ ইন-অ্যাপ Help Center ব্যবহার করুন।",
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
      deepDiveEyebrow: "ফিচার বিস্তারিত",
      deepDiveTitle:
        "MemoApp সুবিধাগুলো কীভাবে দৈনন্দিন দোকান চালাতে সাহায্য করে",
      deepDiveDescription:
        "প্রতিটি MemoApp ফিচার দোকানের সাধারণ বাধা কমানোর জন্য তৈরি: ধীর বিলিং, অস্পষ্ট স্টক, ছড়ানো বাকি হিসাব, ম্যানুয়াল রিপোর্ট ও দুর্বল ব্যাকআপ অভ্যাস।",
      deepDiveGroups: [
        {
          title: "বিলিং ও POS",
          description:
            "কাউন্টারে দ্রুত মেমো তৈরি করুন, আবার প্রতিটি সেল প্রিন্ট, PDF শেয়ার, সোশ্যাল শেয়ার ও পরের রিপোর্টের জন্য প্রস্তুত রাখুন।",
          bullets: [
            "এক বিলিং ফ্লো থেকে সেলস মেমো, ইনভয়েস, কোটেশন ও চালান তৈরি করুন।",
            "পেইড, পারশিয়াল পেইড ও বাকি সেল আলাদা লেজার না খুলেই রেকর্ড করুন।",
            "প্রিন্ট, PDF ও সোশ্যাল চ্যানেলে কাস্টমার-রেডি ডকুমেন্ট শেয়ার করুন।",
          ],
        },
        {
          title: "ইনভেন্টরি ও ক্রয়",
          description:
            "প্রোডাক্ট লিস্ট, স্টক মুভমেন্ট, ক্রয় রেকর্ড, সাপ্লায়ার অ্যাক্টিভিটি ও লো-স্টক সিগন্যাল সেলস কাউন্টারের সঙ্গে যুক্ত রাখুন।",
          bullets: [
            "ক্যাটাগরি, ইউনিট, পরিমাণ, ক্রয় মূল্য ও বিক্রয় মূল্য দিয়ে প্রোডাক্ট ট্র্যাক করুন।",
            "সাপ্লায়ার ক্রয়কে স্টক আপডেট ও পেমেন্ট কনটেক্সটের সঙ্গে যুক্ত করুন।",
            "গুরুত্বপূর্ণ আইটেম শেষ হওয়ার আগে লো-স্টক ঝুঁকি ধরুন।",
          ],
        },
        {
          title: "কাস্টমার ও বাকি",
          description:
            "কাস্টমার লেজার, পেমেন্ট হিস্ট্রি, রিমাইন্ডার ও পরিষ্কার কালেকশন সিদ্ধান্ত দিয়ে দোকানের বাকি হিসাব পেশাদারভাবে গুছিয়ে রাখে MemoApp।",
          bullets: [
            "কার কত বাকি, কখন ব্যালেন্স বদলেছে ও কাকে ফলোআপ দরকার তা দেখুন।",
            "পূর্ণ বা আংশিক পেমেন্ট কালেক্ট করে সঙ্গে সঙ্গে লেজার আপডেট করুন।",
            "বাকি রিমাইন্ডার দিয়ে ভুলে যাওয়া পেমেন্ট কমাতে সাহায্য করুন।",
          ],
        },
        {
          title: "রিপোর্ট ও AI",
          description:
            "ম্যানুয়াল স্প্রেডশিট ছাড়াই মালিক সেলস, ক্যাশ, লাভ, খরচ, বাকি ও স্টক সিগন্যাল রিভিউ করতে পারেন।",
          bullets: [
            "দৈনিক সেলস, স্টক ভ্যালু, বাকি, ক্রয় ও খরচের কনটেক্সট দেখুন।",
            "স্টক, ক্যাশফ্লো বা সেলস ট্রেন্ড নিয়ে AI সহকারীকে প্র্যাকটিক্যাল প্রশ্ন করুন।",
            "কী রিস্টক করবেন, কাকে ফলোআপ করবেন ও লাভ কোথায় যাচ্ছে তা সিদ্ধান্ত নিন।",
          ],
        },
        {
          title: "টিম, ব্যাকআপ ও সিকিউরিটি",
          description:
            "দোকান বড় হলে MemoApp এমপ্লয়ি রেকর্ড, রোল-ভিত্তিক ওয়ার্কফ্লো, Google Drive ব্যাকআপ ও অফলাইন-ফ্রেন্ডলি সিঙ্ক সাপোর্ট করে।",
          bullets: [
            "এমপ্লয়ি ও স্যালারি-সম্পর্কিত অপারেশন দিয়ে টিম ওয়ার্কফ্লো গুছিয়ে নিন।",
            "শিডিউলড Google Drive ব্যাকআপ দিয়ে বিজনেস ডাটা সুরক্ষিত রাখুন।",
            "ইন্টারনেট দুর্বল হলেও জরুরি কাউন্টার কাজ চালু রাখুন।",
          ],
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
            "হ্যাঁ। MemoApp মেমো, প্রোডাক্ট, কাস্টমার, বাকি, ক্রয়, খরচ ও রিপোর্ট একসঙ্গে রাখে, তাই দৈনন্দিন দোকানের ডাটার জন্য আলাদা খাতা কম লাগে।",
        },
        {
          question: "কাস্টমার বাকি নিলে MemoApp সাহায্য করবে?",
          answer:
            "হ্যাঁ। কাস্টমার লেজারে বাকি ব্যালেন্স ও পেমেন্ট হিস্ট্রি দেখা যায়, আর রিমাইন্ডার টিমকে নিয়মিত ফলোআপ করতে সাহায্য করে।",
        },
        {
          question: "প্রতিদিন সব পণ্য না গুনেও স্টক বুঝতে পারব?",
          answer:
            "MemoApp সেলস ও ক্রয়কে ইনভেন্টরির সঙ্গে যুক্ত করে, তাই পরিমাণ, লো-স্টক সিগন্যাল ও ক্রয় কনটেক্সট স্প্রেডশিট ছাড়াই দেখা যায়।",
        },
        {
          question: "এই ফিচারগুলোর জন্য কোন প্ল্যান বেছে নেব?",
          answer:
            "ঘুরে দেখতে ফ্রি প্ল্যান দিয়ে শুরু করুন। ছোট দোকানের জন্য Basic, প্রথম টিম যোগ করা ব্যস্ত কাউন্টারের জন্য Growth, আর আনলিমিটেড রেকর্ড, ব্যাকআপ ও প্রায়োরিটি সাপোর্ট লাগলে বিজনেস ভালো।",
        },
      ],
      ctaTitle: "বাস্তব দোকানের দিনে এই ফিচারগুলো কীভাবে কাজ করে দেখুন",
      ctaDescription:
        "দৈনন্দিন অপারেটিং ফ্লোর জন্য workflow পেজ দেখুন, অথবা আপনার কাউন্টারের জন্য সঠিক প্ল্যান বেছে নিতে pricing তুলনা করুন।",
      workflowLink: "দৈনন্দিন workflow দেখুন",
      pricingLink: "প্রাইসিং প্ল্যান তুলনা করুন",
    },
    workflowRoute: {
      timelineEyebrow: "পুরো দিনের workflow",
      timelineTitle: "কাউন্টার খোলা থেকে সন্ধ্যার রিপোর্ট পর্যন্ত",
      timelineDescription:
        "দোকান যেভাবে বাস্তবে চলে MemoApp সেই ফ্লো অনুসরণ করে, তাই কাউন্টারের প্রতিটি কাজ মালিকের দরকারি রেকর্ড আপডেট করে।",
      timeline: [
        {
          step: "০১",
          title: "কাউন্টার খুলুন",
          description:
            "প্রোডাক্ট শর্টকাট, ওপেনিং ক্যাশ কনটেক্সট ও প্রস্তুত মেমো অ্যাকশন দিয়ে প্রথম কাস্টমারের জন্য দিন শুরু করুন।",
          featureLabel: "POS বিলিং ও ক্যাশ ভিজিবিলিটি",
          featureHref: "/features#billing-pos",
        },
        {
          step: "০২",
          title: "মেমো বিক্রি, প্রিন্ট বা শেয়ার করুন",
          description:
            "পেইড, পারশিয়াল পেইড বা বাকি সেল তৈরি করুন এবং প্রিন্ট, PDF বা সোশ্যাল চ্যানেলে কাস্টমার-রেডি মেমো পাঠান।",
          featureLabel: "মেমো, ইনভয়েস ও শেয়ারিং",
          featureHref: "/features#billing-pos",
        },
        {
          step: "০৩",
          title: "সেলের সঙ্গে স্টক আপডেট হতে দিন",
          description:
            "প্রোডাক্ট পরিমাণ কাউন্টার অ্যাক্টিভিটির সঙ্গে যুক্ত থাকে, তাই মালিক আগে থেকেই লো-স্টক ঝুঁকি দেখতে পারেন।",
          featureLabel: "ইনভেন্টরি ও লো-স্টক অ্যালার্ট",
          featureHref: "/features#inventory-purchases",
        },
        {
          step: "০৪",
          title: "বাকি কালেক্ট করুন ও ক্রয় রেকর্ড করুন",
          description:
            "কাস্টমার বাকি, সাপ্লায়ার ক্রয় ও পেমেন্ট কনটেক্সট দৈনিক সেলস ফ্লোর পাশেই গুছানো থাকে।",
          featureLabel: "কাস্টমার ও সাপ্লায়ার লেজার",
          featureHref: "/features#customers-dues",
        },
        {
          step: "০৫",
          title: "খরচ ও বিজনেস নোট যোগ করুন",
          description:
            "ডিটেইল ভুলে যাওয়ার আগে দৈনিক খরচ, টিম নোট ও জরুরি দোকান আপডেট রেকর্ড করুন।",
          featureLabel: "খরচ ও বিজনেস নোট",
          featureHref: "/features#team-backup-security",
        },
        {
          step: "০৬",
          title: "রিপোর্ট, সিঙ্ক ও ব্যাকআপ রিভিউ করুন",
          description:
            "দিন শেষ করুন সেলস, লাভ, বাকি, স্টক, AI গাইডেন্স, সিঙ্ক স্ট্যাটাস ও ব্যাকআপ কনফিডেন্স দিয়ে।",
          featureLabel: "রিপোর্ট, AI, সিঙ্ক ও ব্যাকআপ",
          featureHref: "/features#reports-ai",
        },
      ],
      rolesEyebrow: "টিমের পরিষ্কার ভূমিকা",
      rolesTitle: "প্রতিটি রোল নিজের দরকারি কাজ দেখে",
      rolesDescription:
        "MemoApp স্টাফের জন্য কাউন্টার স্পিড সহজ রাখে, আর মালিককে সিদ্ধান্ত নেওয়ার জন্য বড় ছবিটা দেখায়।",
      roles: [
        {
          title: "মালিক",
          description:
            "এক বিজনেস ভিউ থেকে সেলস, লাভ, বাকি, স্টক ভ্যালু, খরচ, AI সাজেশন ও ব্যাকআপ স্ট্যাটাস দেখেন।",
        },
        {
          title: "ক্যাশিয়ার",
          description:
            "দ্রুত মেমো তৈরি, পেমেন্ট কালেকশন, বাকি রেকর্ড, প্রিন্টিং ও কাস্টমার শেয়ারিংয়ে ফোকাস করেন।",
        },
        {
          title: "ম্যানেজার",
          description:
            "ক্রয়, সাপ্লায়ার, লো-স্টক আইটেম, টিম অপারেশন ও দৈনিক ক্লোজিং কনটেক্সট চেক করেন।",
        },
      ],
      ctaTitle: "আপনার দোকানের workflow অনুযায়ী প্ল্যান বেছে নিন",
      ctaDescription:
        "ছোট দোকান সহজভাবে শুরু করতে পারে, আর ব্যস্ত কাউন্টার ও বড় টিম রিপোর্ট, AI, ব্যাকআপ ও স্টাফ ফিচার যোগ করতে পারে।",
      pricingLink: "MemoApp প্রাইসিং তুলনা করুন",
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
          pro: "৩ মালিক, ১ ম্যানেজার, ২ স্টাফ",
          enterprise: "কাস্টম অ্যাক্সেস নীতি",
        },
        {
          feature: "স্টাফ আসন",
          trial: "স্টাফ ইনভাইট নেই",
          basic: "স্টাফ ইনভাইট নেই",
          growth: "১ ম্যানেজার + ১ স্টাফ (কর্মচারী ম্যানেজমেন্ট)",
          pro: "২ স্টাফ অ্যাকাউন্ট",
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
          "না। POS বিলিং কাউন্টারের অংশ, কিন্তু MemoApp ইনভেন্টরি, কাস্টমার, বাকি, সাপ্লায়ার, ক্রয়, খরচ, রিপোর্ট ও AI ইনসাইটও কভার করে।",
        category: "General",
      },
      {
        question: "ইন্টারনেট দুর্বল হলে দোকান চালানো যাবে?",
        answer:
          "MemoApp অফলাইন-ফ্রেন্ডলি ওয়ার্কফ্লো মাথায় রেখে তৈরি, তাই জরুরি কাউন্টার কাজ চলতে পারে এবং কানেকশন ফিরলে সিঙ্ক হয়।",
        category: "General",
      },
      {
        question: "দ্রুত মেমো তৈরি ও শেয়ার করা যাবে?",
        answer:
          "হ্যাঁ। MemoApp দ্রুত মেমো তৈরি এবং PDF, প্রিন্ট ও সোশ্যাল চ্যানেলে কাস্টমার-রেডি শেয়ারিং সাপোর্ট করে।",
        category: "Memos & sales",
      },
      {
        question: "লো স্টক বুঝতে MemoApp সাহায্য করে?",
        answer:
          "হ্যাঁ। প্রোডাক্ট ও স্টক ওয়ার্কফ্লো মালিককে পরিমাণ, ইউনিট, ক্রয় কনটেক্সট ও লো-স্টক ঝুঁকি দেখতে সাহায্য করে।",
        category: "Stock & inventory",
      },
      {
        question: "কাস্টমার বাকি ও কালেকশন ট্র্যাক করা যাবে?",
        answer:
          "হ্যাঁ। কাস্টমার লেজার, বাকি ব্যালেন্স, পেমেন্ট ও রিমাইন্ডার কালেকশন কাজ গুছিয়ে রাখতে সাহায্য করে।",
        category: "Memos & sales",
      },
      {
        question: "MemoApp কি বাংলা সাপোর্ট করে?",
        answer:
          "হ্যাঁ। MemoApp লোকাল টিমের জন্য ইংরেজি, বাংলা ও Banglish-ফ্রেন্ডলি ব্যবহারের কথা মাথায় রেখে তৈরি।",
        category: "Account & team",
      },
      {
        question: "আমার টিম মেম্বাররা MemoApp ব্যবহার করতে পারবে?",
        answer:
          "পেইড প্ল্যানে ম্যানেজার অ্যাক্সেস, এমপ্লয়ি রেকর্ড ও স্যালারি-সম্পর্কিত টিম ওয়ার্কফ্লো সাপোর্ট করে।",
        category: "Account & team",
      },
      {
        question: "কোন প্ল্যান দিয়ে শুরু করব?",
        answer:
          "ঘুরে দেখতে চাইলে ফ্রি প্ল্যান দিয়ে শুরু করুন। ছোট দোকানের জন্য Basic, প্রথম টিম যোগ করা ব্যস্ত কাউন্টারের জন্য Growth, আর প্রতিষ্ঠিত মাল্টি-কাউন্টার টিমের জন্য বিজনেস।",
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
