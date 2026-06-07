export const appLoginUrl = "https://www.memoappbd.shop/login";
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
    hero: {
      eyebrow: "Built for BD SMEs and modern retail counters",
      title: "Your Business Assistant, Inventory Manager, and POS — All in One",
      titlePrefix: "Your Business Assistant, Inventory Manager, and POS",
      titleHighlight: "All-in-One",
      description:
        "Built with AI to simplify daily operations and help businesses grow faster.",
    },
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
        "The landing page uses abstract product mockups so it can show the MemoApp experience without copying third-party design assets.",
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
        "Pricing can later connect to the MemoApp membership backend. For now, the landing page presents clear plan positioning and conversion paths.",
    },
    pricingBenefits: [
      "Invoices",
      "Stock",
      "Collections",
      "Purchasing",
      "Insights",
      "AI",
    ],
    pricingPlans: [
      {
        name: "Trial",
        price: "Free",
        term: "14 days",
        yearly: "Explore before choosing a paid plan",
        description:
          "Try MemoApp with guided access to core shop workflows before your team commits.",
        features: [
          "POS memo creation",
          "Products and customers",
          "Dues and reports",
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
        features: ["POS memo creation", "Products and stock", "Customer dues"],
        highlighted: false,
        badge: "Basics",
      },
      {
        name: "Growth",
        price: "৳1,199",
        term: "/month",
        yearly: "৳11,990/year",
        description:
          "For busy counters that need stronger reporting, purchases, collections, and AI.",
        features: [
          "Purchases and suppliers",
          "Reports and cashflow",
          "AI assistant",
          "Import and export",
        ],
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Pro",
        price: "৳2,499",
        term: "/month",
        yearly: "৳24,990/year",
        description:
          "For growing teams that need advanced reporting, secure backup, and staff workflows.",
        features: [
          "Unlimited records",
          "Auto Google Drive backup",
          "Employee workflows",
          "Priority support",
        ],
        highlighted: false,
        badge: "Scale",
      },
    ],
    testimonialsHeading: {
      eyebrow: "Built around shop owners",
      title: "A product story that speaks to real retail pain.",
      description:
        "The page focuses on outcomes buyers understand quickly: faster billing, tighter dues control, stock confidence, and clear daily reports.",
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
          "Choose a plan that fits your shop today, then scale into richer reports, AI, backups, and team management as the business grows.",
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
          "Use the live app login to start trial access and choose the right plan from your account.",
      },
    ],
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
          "Start with the trial if you want to explore. Basic fits smaller shops, Growth is best for busy counters, and Pro is built for larger teams.",
        category: "Billing & plans",
      },
    ],
    faqPage: {
      browseTopics: "Browse topics",
      popular: "Popular",
      stillNeedHelp: "Still need help?",
      supportTitle: "In-app support is available after login.",
      supportDescription:
        "Report a problem or reach us by email or WhatsApp. We respond as soon as we can.",
      openHelpCenter: "Open Help Center",
      emailSupport: "Email support",
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
    hero: {
      eyebrow: "বাংলাদেশের SME ও আধুনিক দোকানের জন্য তৈরি",
      title:
        "আপনার বিজনেস অ্যাসিস্ট্যান্ট, ইনভেন্টরি ম্যানেজার এবং POS — সব একসাথে",
      titlePrefix: "আপনার বিজনেস অ্যাসিস্ট্যান্ট, ইনভেন্টরি ম্যানেজার এবং POS",
      titleHighlight: "সব একসাথে",
      description:
        "AI দিয়ে তৈরি, যাতে দৈনন্দিন কাজ সহজ হয় এবং ব্যবসা আরও দ্রুত বড় হতে পারে।",
    },
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
        "থার্ড-পার্টি ডিজাইন কপি না করে MemoApp অভিজ্ঞতা দেখাতে এখানে অ্যাবস্ট্রাক্ট প্রোডাক্ট মকআপ ব্যবহার করা হয়েছে।",
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
        "প্রাইসিং পরে MemoApp মেম্বারশিপ ব্যাকএন্ডের সঙ্গে যুক্ত হতে পারে। এখন পেজটি পরিষ্কার প্ল্যান পজিশনিং ও কনভার্সন পথ দেখায়।",
    },
    pricingBenefits: ["ইনভয়েস", "স্টক", "কালেকশন", "ক্রয়", "ইনসাইট", "AI"],
    pricingPlans: [
      {
        name: "ট্রায়াল",
        price: "ফ্রি",
        term: "১৪ দিন",
        yearly: "পেইড প্ল্যান নেওয়ার আগে ঘুরে দেখুন",
        description:
          "টিম কমিট করার আগে কোর দোকান ওয়ার্কফ্লোসহ MemoApp ব্যবহার করে দেখুন।",
        features: ["POS মেমো তৈরি", "প্রোডাক্ট ও কাস্টমার", "বাকি ও রিপোর্ট"],
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
        features: ["POS মেমো তৈরি", "প্রোডাক্ট ও স্টক", "কাস্টমার বাকি"],
        highlighted: false,
        badge: "Basics",
      },
      {
        name: "Growth",
        price: "৳১,১৯৯",
        term: "/মাস",
        yearly: "৳১১,৯৯০/বছর",
        description:
          "ব্যস্ত কাউন্টারের জন্য শক্তিশালী রিপোর্ট, ক্রয়, কালেকশন ও AI।",
        features: [
          "ক্রয় ও সাপ্লায়ার",
          "রিপোর্ট ও ক্যাশফ্লো",
          "AI সহকারী",
          "ইমপোর্ট ও এক্সপোর্ট",
        ],
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Pro",
        price: "৳২,৪৯৯",
        term: "/মাস",
        yearly: "৳২৪,৯৯০/বছর",
        description:
          "বড় টিমের জন্য অ্যাডভান্সড রিপোর্ট, সিকিউর ব্যাকআপ ও স্টাফ ওয়ার্কফ্লো।",
        features: [
          "আনলিমিটেড রেকর্ড",
          "Google Drive অটো ব্যাকআপ",
          "এমপ্লয়ি ওয়ার্কফ্লো",
          "প্রায়োরিটি সাপোর্ট",
        ],
        highlighted: false,
        badge: "Scale",
      },
    ],
    testimonialsHeading: {
      eyebrow: "দোকান মালিককে কেন্দ্র করে তৈরি",
      title: "বাস্তব রিটেইল সমস্যার ভাষায় পণ্যের গল্প।",
      description:
        "পেজটি দ্রুত বিলিং, শক্ত বাকি কন্ট্রোল, স্টক কনফিডেন্স ও পরিষ্কার দৈনিক রিপোর্টের মতো সহজে বোঝা যায় এমন ফলাফলে ফোকাস করে।",
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
          "আজকের দোকানের জন্য মানানসই প্ল্যান বেছে নিন, তারপর রিপোর্ট, AI, ব্যাকআপ ও টিম ম্যানেজমেন্টে স্কেল করুন।",
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
          "লাইভ অ্যাপ লগইন দিয়ে ট্রায়াল শুরু করুন এবং আপনার অ্যাকাউন্ট থেকে সঠিক প্ল্যান বেছে নিন।",
      },
    ],
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
          "ঘুরে দেখতে চাইলে ট্রায়াল দিয়ে শুরু করুন। ছোট দোকানের জন্য Basic, ব্যস্ত কাউন্টারের জন্য Growth, আর বড় টিমের জন্য Pro।",
        category: "Billing & plans",
      },
    ],
    faqPage: {
      browseTopics: "টপিক দেখুন",
      popular: "জনপ্রিয়",
      stillNeedHelp: "আরও সাহায্য দরকার?",
      supportTitle: "লগইনের পর ইন-অ্যাপ সাপোর্ট পাওয়া যাবে।",
      supportDescription:
        "সমস্যা রিপোর্ট করুন অথবা ইমেইল/WhatsApp-এ যোগাযোগ করুন। আমরা যত দ্রুত সম্ভব উত্তর দিই।",
      openHelpCenter: "Help Center খুলুন",
      emailSupport: "ইমেইল সাপোর্ট",
    },
  },
} as const;

export type LandingContent = (typeof landingContent)[Language];
