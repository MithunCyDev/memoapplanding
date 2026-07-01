export type LegalDocumentKey = "privacyPolicy" | "termsOfService";

export interface LegalDocumentSection {
  id: string;
  title: string;
  body?: string;
  items?: readonly string[];
}

export interface LegalDocumentContent {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  trustBarItems?: readonly string[];
  businessIdentityTitle?: string;
  businessIdentityBody?: string;
  summaryTitle: string;
  summaryItems: readonly string[];
  sectionNavTitle: string;
  mobileNavToggleLabel?: string;
  sections: readonly LegalDocumentSection[];
  contactSupportEyebrow?: string;
  contactTitle: string;
  contactBody: string;
  contactEmailLabel: string;
  whatsappSupportLabel?: string;
  ororaSoftLinkLabel?: string;
  backToHome: string;
}

export type LocalizedLegalContent = Record<
  LegalDocumentKey,
  LegalDocumentContent
>;

export const legalContent = {
  en: {
    privacyPolicy: {
      eyebrow: "Privacy Policy",
      title: "Privacy Policy",
      intro:
        "MemoApp is business management software developed and maintained by OroraSoft. This policy explains how we collect, use, store, share, and protect information when you use MemoApp for shop records and customer data.",
      lastUpdatedLabel: "Last updated",
      lastUpdatedDate: "June 3, 2026",
      trustBarItems: [
        "Product of OroraSoft",
        "Serving Bangladesh retailers",
        "memoappbd.com",
        "memoappbd@gmail.com",
      ],
      businessIdentityTitle: "About MemoApp",
      businessIdentityBody:
        "MemoApp is used by Bangladeshi retailers for lawful billing, inventory, customer dues, purchases, expenses, and reports. Support is available by email for shop owners, managers, and staff.",
      summaryTitle: "Our privacy commitments",
      summaryItems: [
        "We do not sell, rent, trade, or share your personal, customer, or business data for advertising or marketing.",
        "Shop data is used only to provide MemoApp features, support, security, and lawful operations.",
        "You can export or delete records where the app provides those controls, and contact us for account or data deletion requests.",
      ],
      sectionNavTitle: "Policy sections",
      mobileNavToggleLabel: "Browse policy sections",
      sections: [
        {
          id: "about-memoapp",
          title: "1. About MemoApp",
          body: "MemoApp is business management software for Bangladeshi retailers. It is intended for lawful business record keeping — billing, inventory, customer dues, purchases, expenses, and reports. By using MemoApp, you agree that your shop data will be processed according to this policy and our Terms of Service.",
        },
        {
          id: "information-we-collect",
          title: "2. Information we collect",
          body: "Depending on how you use MemoApp, we may collect or process:",
          items: [
            "Account information such as your name, email address, phone number, login provider, shop name, role, and authentication status.",
            "Business records you enter into the app, including memos, customers, suppliers, products, inventory, dues, purchases, expenses, employees, notes, reports, exports, and related shop activity.",
            "Customer contact details that you manually add or import through supported file formats.",
            "Technical information such as device type, browser, app usage events, sync status, error logs, and support messages needed to operate, secure, and improve the service.",
          ],
        },
        {
          id: "how-we-use-information",
          title: "3. How we use information",
          body: "We use information only for legitimate MemoApp purposes, including:",
          items: [
            "Providing shop management features, account access, role-based permissions, sync, exports, reports, and customer support.",
            "Protecting accounts, preventing misuse, investigating suspicious activity, fixing bugs, maintaining reliability, and complying with legal obligations.",
          ],
        },
        {
          id: "data-sharing",
          title: "4. Data sharing",
          body: "We do not sell, rent, trade, or share your personal, customer, or business records with anyone for advertising, marketing, or unrelated business purposes. Your shop data is yours. Data may be processed only by infrastructure and service providers required to operate MemoApp, protect the service, respond to support requests, or comply with applicable law.",
        },
        {
          id: "security",
          title: "5. Security",
          body: "We use reasonable technical and organizational safeguards such as encrypted connections, authentication, per-shop data separation, role-based access, and monitoring to help protect your information. No online service can guarantee absolute security, so you should keep your login credentials secure and promptly report suspicious activity.",
        },
        {
          id: "retention-deletion",
          title: "6. Data retention and deletion",
          body: "We keep information while your account is active or as needed to provide MemoApp, meet legal requirements, resolve disputes, prevent abuse, and maintain reliable records. You may export or delete records where the app provides those controls, and contact us for account or data deletion requests.",
        },
        {
          id: "acceptable-use",
          title: "7. Illegal activity, abuse, and account bans",
          body: "MemoApp is intended for lawful business management. If an account is used for illegal activity, fraud, harassment, unauthorized access, harmful automation, data theft, policy violations, or activity that risks other users or the platform, MemoApp may restrict features, suspend access, ban the account, preserve evidence where required, or cooperate with lawful requests from authorities.",
        },
        {
          id: "children",
          title: "8. Children's privacy",
          body: "MemoApp is a business tool and is not intended for children. Users should be old enough to create a business account and agree to this policy under applicable law.",
        },
        {
          id: "changes",
          title: "9. Changes to this policy",
          body: "We may update this Privacy Policy from time to time to reflect product, legal, or operational changes. When meaningful updates are made, we will update the date above and may provide additional notice inside the app.",
        },
      ],
      contactSupportEyebrow: "MemoApp support",
      contactTitle: "Questions or data requests",
      contactBody:
        "If you have questions about this Privacy Policy, data deletion, or account access, contact the MemoApp support team.",
      contactEmailLabel: "Email",
      whatsappSupportLabel: "Talk with us",
      ororaSoftLinkLabel: "About OroraSoft",
      backToHome: "Back to home",
    },
    termsOfService: {
      eyebrow: "Terms of Service",
      title: "Terms of Service",
      intro:
        "These terms explain the rules for using MemoApp, including account responsibilities, lawful use, shop data, customer records, exports, subscriptions, and account suspension.",
      lastUpdatedLabel: "Last updated",
      lastUpdatedDate: "June 3, 2026",
      summaryTitle: "Key terms at a glance",
      summaryItems: [
        "MemoApp is a business management tool for lawful shop operations and record keeping.",
        "You are responsible for the accuracy and legal use of the business, customer, memo, inventory, payment, and export information you enter or import.",
        "Illegal, fraudulent, abusive, harmful, or policy-violating activity can lead to feature restrictions, suspension, or account bans.",
      ],
      sectionNavTitle: "Terms sections",
      sections: [
        {
          id: "acceptance",
          title: "1. Acceptance of these terms",
          body: "By creating an account, accessing MemoApp, or using any MemoApp feature, you agree to these Terms of Service and the Privacy Policy. If you do not agree, do not create an account or use the service.",
        },
        {
          id: "service-description",
          title: "2. MemoApp service",
          body: "MemoApp provides tools for shop management, including memos, customers, dues, inventory, purchases, expenses, employees, notes, reports, exports, sync, and support. Features may change over time as we improve the app.",
        },
        {
          id: "account-responsibility",
          title: "3. Account and shop responsibilities",
          body: "You are responsible for your account, shop workspace, users, roles, login credentials, and all activity that happens through your account. You agree to:",
          items: [
            "Provide accurate account and shop information.",
            "Keep your password, email, and device secure.",
            "Grant staff or managers only the access they need for their work.",
            "Review records, exports, reports, and calculations before relying on them for business, tax, accounting, or legal decisions.",
            "Tell us promptly if you believe your account or shop data has been accessed without permission.",
          ],
        },
        {
          id: "business-records",
          title: "4. Business records and customer data",
          body: "You own the business records and customer information you enter, upload, import, or generate in MemoApp. You are responsible for having the legal right to store and process that information, including customer names, phone numbers, email addresses, payment details, due records, invoices, memos, notes, and reports. MemoApp does not guarantee that your records satisfy tax, accounting, consumer protection, or industry-specific legal requirements.",
        },
        {
          id: "acceptable-use",
          title: "5. Acceptable use",
          body: "You agree not to misuse MemoApp. Prohibited activity includes:",
          items: [
            "Illegal business activity, fraud, money laundering, scams, forged records, fake transactions, or misleading customer records.",
            "Harassment, abuse, threats, discrimination, or harmful conduct toward customers, staff, support, or other users.",
            "Unauthorized access, credential sharing outside your organization, data theft, scraping, reverse engineering, malware, spam, or attacks on the service.",
            "Using customer data, exports, or backups in a way that violates law, privacy rights, consent requirements, or third-party terms.",
            "Interfering with app security, sync, billing, support, infrastructure, or other users' ability to use MemoApp.",
          ],
        },
        {
          id: "subscriptions",
          title: "6. Subscriptions, plans, and payments",
          body: "MemoApp may offer free and paid plans. Plan features, limits, prices, billing cycles, trials, renewal rules, and payment methods may vary. If paid features are enabled, you are responsible for fees, taxes, and payment information associated with your account. We may change plan terms with reasonable notice where required.",
        },
        {
          id: "backups-exports",
          title: "7. Exports and data loss",
          body: "MemoApp may provide exports, sync, and offline use to help you preserve records. These tools do not replace your responsibility to keep appropriate copies of important business data. You should regularly verify that exports are complete, readable, and stored where you expect.",
        },
        {
          id: "availability",
          title: "8. Service availability and changes",
          body: "We work to keep MemoApp reliable, but the service may be unavailable or limited because of maintenance, internet problems, device issues, third-party services, security events, updates, or causes outside our control. We may add, remove, suspend, or modify features to improve security, reliability, compliance, or product quality.",
        },
        {
          id: "intellectual-property",
          title: "9. Intellectual property",
          body: "MemoApp, including its software, interface, design, brand, text, workflows, and related materials, belongs to MemoApp or its licensors. These terms do not transfer ownership of MemoApp to you. You may use the service only as allowed by these terms.",
        },
        {
          id: "termination",
          title: "10. Suspension, bans, and termination",
          body: "MemoApp may restrict features, suspend access, ban accounts, remove content, preserve evidence, or terminate service when we believe an account is involved in illegal activity, fraud, abuse, security risk, payment issues, policy violations, or activity that may harm users, customers, MemoApp, or third parties. You may stop using MemoApp at any time.",
        },
        {
          id: "disclaimers",
          title: "11. Disclaimers",
          body: "MemoApp is provided as a business productivity tool. We do not provide legal, tax, accounting, financial, or professional advice. Reports, dues, inventory values, invoices, exports, and calculations should be reviewed by you or a qualified professional before being used for official decisions. To the maximum extent allowed by law, the service is provided without warranties that it will always be uninterrupted, error-free, or fit for every specific purpose.",
        },
        {
          id: "liability",
          title: "12. Limitation of liability",
          body: "To the maximum extent allowed by law, MemoApp will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including lost profits, lost revenue, lost data, business interruption, or losses caused by user error, third-party services, internet failure, device problems, unauthorized access, or misuse of the service.",
        },
        {
          id: "changes",
          title: "13. Changes to these terms",
          body: "We may update these Terms of Service from time to time. When meaningful changes are made, we will update the date above and may provide notice in the app. Continuing to use MemoApp after updated terms take effect means you accept the updated terms.",
        },
      ],
      contactTitle: "Questions about these terms",
      contactBody:
        "If you have questions about these Terms of Service, account access, acceptable use, billing, or data requests, contact MemoApp support.",
      contactEmailLabel: "Email",
      whatsappSupportLabel: "Talk with us",
      backToHome: "Back to home",
    },
  },
  bn: {
    privacyPolicy: {
      eyebrow: "গোপনীয়তা নীতি",
      title: "গোপনীয়তা নীতি",
      intro:
        "MemoApp OroraSoft-এর তৈরি ও রক্ষণাবেক্ষণকৃত ব্যবসা ব্যবস্থাপনা সফটওয়্যার। দোকানের রেকর্ড ও গ্রাহকের তথ্য ব্যবহারের সময় আমরা কীভাবে তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ ও সুরক্ষা করি — তা এই নীতিতে বর্ণিত।",
      lastUpdatedLabel: "সর্বশেষ আপডেট",
      lastUpdatedDate: "৩ জুন, ২০২৬",
      trustBarItems: [
        "OroraSoft-এর একটি product",
        "বাংলাদেশের রিটেইলারদের সেবা",
        "memoappbd.com",
        "memoappbd@gmail.com",
      ],
      businessIdentityTitle: "MemoApp সম্পর্কে",
      businessIdentityBody:
        "MemoApp বাংলাদেশের দোকানে বিল, স্টক, কাস্টমার বাকি, ক্রয়, খরচ ও রিপোর্টের জন্য ব্যবহৃত হয়। দোকান মালিক, ম্যানেজার ও স্টাফের জন্য ইমেইলে সাপোর্ট পাওয়া যায়।",
      summaryTitle: "আমাদের গোপনীয়তার অঙ্গীকার",
      summaryItems: [
        "আমরা বিজ্ঞাপন বা মার্কেটিংয়ের জন্য আপনার ব্যক্তিগত, গ্রাহক বা ব্যবসার তথ্য বিক্রি, ভাড়া, বিনিময় বা শেয়ার করি না।",
        "Shop data শুধু MemoApp feature, support, security ও lawful operation-এর জন্য ব্যবহার করা হয়।",
        "App-এ control থাকলে record export বা delete করতে পারেন, এবং account বা data deletion request-এর জন্য আমাদের সাথে যোগাযোগ করতে পারেন।",
      ],
      sectionNavTitle: "নীতির অংশ",
      mobileNavToggleLabel: "নীতির অংশ দেখুন",
      sections: [
        {
          id: "about-memoapp",
          title: "১. MemoApp সম্পর্কে",
          body: "MemoApp বাংলাদেশের দোকানের জন্য ব্যবসা ব্যবস্থাপনা সফটওয়্যার। আইনসম্মত business record keeping — বিল, স্টক, বাকি, ক্রয়, খরচ ও রিপোর্ট-এর জন্য। MemoApp ব্যবহার করলে আপনি এই policy ও Terms of Service অনুযায়ী ডাটা process-এ সম্মত হন।",
        },
        {
          id: "information-we-collect",
          title: "২. আমরা যে তথ্য সংগ্রহ করি",
          body: "আপনি MemoApp কীভাবে ব্যবহার করেন তার উপর নির্ভর করে আমরা নিচের তথ্য সংগ্রহ বা process করতে পারি:",
          items: [
            "আপনার নাম, ইমেইল, ফোন নম্বর, login provider, দোকানের নাম, role এবং authentication status-এর মতো account তথ্য।",
            "অ্যাপে যোগ করা business record, যেমন memo, customer, supplier, product, inventory, due, purchase, expense, employee, note, report, export এবং shop activity।",
            "আপনি নিজে যোগ করা বা supported file format দিয়ে import করা customer contact details।",
            "Service চালানো, secure রাখা এবং উন্নত করার জন্য device type, browser, app usage event, sync status, error log এবং support message-এর মতো technical তথ্য।",
          ],
        },
        {
          id: "how-we-use-information",
          title: "৩. আমরা তথ্য কীভাবে ব্যবহার করি",
          body: "আমরা শুধু MemoApp-এর বৈধ উদ্দেশ্যে তথ্য ব্যবহার করি, যেমন:",
          items: [
            "Shop management feature, account access, role-based permission, sync, export, report এবং customer support দেওয়া।",
            "Account সুরক্ষা, misuse প্রতিরোধ, suspicious activity তদন্ত, bug fix, reliability বজায় রাখা এবং legal obligation পূরণ।",
          ],
        },
        {
          id: "data-sharing",
          title: "৪. তথ্য শেয়ারিং",
          body: "আমরা বিজ্ঞাপন, মার্কেটিং বা অপ্রাসঙ্গিক business purpose-এর জন্য আপনার personal, customer বা business record কারও কাছে বিক্রি, ভাড়া, বিনিময় বা শেয়ার করি না। আপনার shop data আপনারই। MemoApp চালানো, service সুরক্ষা, support request-এর উত্তর দেওয়া বা প্রযোজ্য আইন মানার জন্য প্রয়োজনীয় infrastructure ও service provider শুধু data process করতে পারে।",
        },
        {
          id: "security",
          title: "৫. নিরাপত্তা",
          body: "আপনার তথ্য সুরক্ষার জন্য আমরা encrypted connection, authentication, per-shop data separation, role-based access এবং monitoring-এর মতো যুক্তিসঙ্গত technical ও organizational safeguard ব্যবহার করি। কোনো online service সম্পূর্ণ নিরাপত্তা guarantee করতে পারে না, তাই login credential নিরাপদ রাখুন এবং সন্দেহজনক activity দ্রুত report করুন।",
        },
        {
          id: "retention-deletion",
          title: "৬. তথ্য সংরক্ষণ ও deletion",
          body: "আপনার account active থাকা পর্যন্ত বা MemoApp দেওয়া, legal requirement মানা, dispute resolve করা, abuse প্রতিরোধ এবং reliable record রাখার জন্য প্রয়োজনীয় সময় পর্যন্ত আমরা তথ্য রাখি। App-এ control থাকলে record export বা delete করতে পারেন, এবং account বা data deletion request-এর জন্য আমাদের সাথে যোগাযোগ করতে পারেন।",
        },
        {
          id: "acceptable-use",
          title: "৭. অবৈধ activity, abuse ও account ban",
          body: "MemoApp আইনসম্মত business management-এর জন্য তৈরি। কোনো account অবৈধ activity, fraud, harassment, unauthorized access, harmful automation, data theft, policy violation বা platform/অন্য user-এর ঝুঁকিপূর্ণ কাজে ব্যবহার হলে MemoApp feature সীমিত করতে, access suspend করতে, account ban করতে, প্রয়োজন হলে evidence preserve করতে বা lawful authority request-এ সহযোগিতা করতে পারে।",
        },
        {
          id: "children",
          title: "৮. শিশুদের গোপনীয়তা",
          body: "MemoApp একটি business tool এবং শিশুদের জন্য নয়। Applicable law অনুযায়ী business account তৈরি ও এই policy মেনে নেওয়ার মতো বয়সী user-দের জন্য এটি তৈরি।",
        },
        {
          id: "changes",
          title: "৯. এই policy পরিবর্তন",
          body: "Product, legal বা operational পরিবর্তন অনুযায়ী আমরা সময়ে সময়ে এই Privacy Policy update করতে পারি। গুরুত্বপূর্ণ update হলে উপরের date পরিবর্তন করা হবে এবং app-এর ভিতরে notice দেওয়া হতে পারে।",
        },
      ],
      contactSupportEyebrow: "MemoApp support",
      contactTitle: "প্রশ্ন বা data request",
      contactBody:
        "Privacy Policy, data deletion বা account access সম্পর্কে প্রশ্ন থাকলে MemoApp support টিমের সাথে যোগাযোগ করুন।",
      contactEmailLabel: "ইমেইল",
      whatsappSupportLabel: "আমাদের সাথে কথা বলুন",
      ororaSoftLinkLabel: "OroraSoft সম্পর্কে",
      backToHome: "হোমে ফিরে যান",
    },
    termsOfService: {
      eyebrow: "সেবার শর্তাবলী",
      title: "সেবার শর্তাবলী",
      intro:
        "MemoApp ব্যবহারের নিয়ম — account responsibility, lawful use, shop data, customer record, export, subscription ও account suspension এখানে বর্ণিত।",
      lastUpdatedLabel: "সর্বশেষ আপডেট",
      lastUpdatedDate: "৩ জুন, ২০২৬",
      summaryTitle: "মূল শর্তগুলো সংক্ষেপে",
      summaryItems: [
        "MemoApp আইনসম্মত shop operation ও record keeping-এর জন্য একটি business management tool।",
        "আপনি যে business, customer, memo, inventory, payment ও export information যোগ বা import করেন, তার সঠিকতা ও বৈধ ব্যবহারের দায়িত্ব আপনার।",
        "অবৈধ, প্রতারণামূলক, অপব্যবহারমূলক, ক্ষতিকর বা policy violation activity হলে feature সীমিত, suspension বা account ban হতে পারে।",
      ],
      sectionNavTitle: "শর্তের অংশ",
      sections: [
        {
          id: "acceptance",
          title: "১. এই শর্ত মেনে নেওয়া",
          body: "Account তৈরি, MemoApp access বা MemoApp-এর কোনো feature ব্যবহার করলে আপনি এই Terms of Service এবং Privacy Policy মেনে নিচ্ছেন। আপনি সম্মত না হলে account তৈরি বা service ব্যবহার করবেন না।",
        },
        {
          id: "service-description",
          title: "২. MemoApp service",
          body: "MemoApp shop management-এর জন্য memo, customer, due, inventory, purchase, expense, employee, note, report, export, sync ও support feature দেয়। App উন্নত করার জন্য feature সময়ের সাথে পরিবর্তন হতে পারে।",
        },
        {
          id: "account-responsibility",
          title: "৩. Account ও shop responsibility",
          body: "আপনার account, shop workspace, user, role, login credential এবং account থেকে হওয়া সব activity-এর দায়িত্ব আপনার। আপনি সম্মত হচ্ছেন:",
          items: [
            "সঠিক account ও shop information দিতে।",
            "Password, email ও device নিরাপদ রাখতে।",
            "Staff বা manager-কে শুধু কাজের জন্য প্রয়োজনীয় access দিতে।",
            "Business, tax, accounting বা legal decision নেওয়ার আগে record, export, report ও calculation review করতে।",
            "Account বা shop data অনুমতি ছাড়া access হয়েছে মনে হলে দ্রুত আমাদের জানাতে।",
          ],
        },
        {
          id: "business-records",
          title: "৪. Business record ও customer data",
          body: "MemoApp-এ আপনি যে business record ও customer information যোগ, upload, import বা generate করেন তার মালিক আপনি। Customer name, phone number, email, payment details, due record, invoice, memo, note ও report সংরক্ষণ বা process করার legal right থাকা আপনার দায়িত্ব। MemoApp guarantee করে না যে আপনার record tax, accounting, consumer protection বা industry-specific legal requirement পূরণ করবে।",
        },
        {
          id: "acceptable-use",
          title: "৫. Acceptable use",
          body: "আপনি MemoApp misuse করবেন না। নিষিদ্ধ activity-এর মধ্যে রয়েছে:",
          items: [
            "অবৈধ business activity, fraud, money laundering, scam, forged record, fake transaction বা misleading customer record।",
            "Customer, staff, support বা অন্য user-এর প্রতি harassment, abuse, threat, discrimination বা harmful conduct।",
            "Unauthorized access, organization-এর বাইরে credential sharing, data theft, scraping, reverse engineering, malware, spam বা service attack।",
            "Customer data, export বা backup আইন, privacy right, consent requirement বা third-party terms লঙ্ঘন করে ব্যবহার করা।",
            "App security, sync, billing, support, infrastructure বা অন্য user-এর MemoApp ব্যবহারে বাধা দেওয়া।",
          ],
        },
        {
          id: "subscriptions",
          title: "৬. Subscription, plan ও payment",
          body: "MemoApp free এবং paid plan দিতে পারে। Plan feature, limit, price, billing cycle, trial, renewal rule ও payment method ভিন্ন হতে পারে। Paid feature চালু থাকলে account-এর fee, tax এবং payment information-এর দায়িত্ব আপনার। প্রয়োজন হলে reasonable notice দিয়ে plan terms পরিবর্তন করা হতে পারে।",
        },
        {
          id: "backups-exports",
          title: "৭. Export ও data loss",
          body: "Record সংরক্ষণে সহায়তার জন্য MemoApp export, sync ও offline use দিতে পারে। এগুলো গুরুত্বপূর্ণ business data-এর নিজস্ব copy রাখার আপনার দায়িত্বের বিকল্প নয়। Export complete, readable এবং প্রত্যাশিত জায়গায় আছে কিনা নিয়মিত verify করা উচিত।",
        },
        {
          id: "availability",
          title: "৮. Service availability ও পরিবর্তন",
          body: "MemoApp reliable রাখার চেষ্টা করা হয়, তবে maintenance, internet problem, device issue, third-party service, security event, update বা আমাদের নিয়ন্ত্রণের বাইরে থাকা কারণে service unavailable বা limited হতে পারে। Security, reliability, compliance বা product quality উন্নত করার জন্য feature যোগ, remove, suspend বা modify করা হতে পারে।",
        },
        {
          id: "intellectual-property",
          title: "৯. Intellectual property",
          body: "MemoApp-এর software, interface, design, brand, text, workflow এবং related material MemoApp বা এর licensor-এর সম্পত্তি। এই terms আপনাকে MemoApp-এর ownership দেয় না। আপনি শুধু এই terms অনুযায়ী service ব্যবহার করতে পারেন।",
        },
        {
          id: "termination",
          title: "১০. Suspension, ban ও termination",
          body: "Account অবৈধ activity, fraud, abuse, security risk, payment issue, policy violation বা user, customer, MemoApp বা third party-এর ক্ষতির ঝুঁকিতে জড়িত মনে হলে MemoApp feature সীমিত করতে, access suspend করতে, account ban করতে, content remove করতে, evidence preserve করতে বা service terminate করতে পারে। আপনি যেকোনো সময় MemoApp ব্যবহার বন্ধ করতে পারেন।",
        },
        {
          id: "disclaimers",
          title: "১১. Disclaimer",
          body: "MemoApp একটি business productivity tool। আমরা legal, tax, accounting, financial বা professional advice দিই না। Official decision নেওয়ার আগে report, due, inventory value, invoice, export ও calculation আপনি বা qualified professional review করবেন। আইন যতটুকু অনুমতি দেয়, service কোনো guarantee ছাড়াই দেওয়া হয় যে এটি সবসময় uninterrupted, error-free বা প্রতিটি specific purpose-এর জন্য fit হবে।",
        },
        {
          id: "liability",
          title: "১২. Liability limitation",
          body: "আইন যতটুকু অনুমতি দেয়, lost profit, lost revenue, lost data, business interruption, user error, third-party service, internet failure, device problem, unauthorized access বা service misuse থেকে হওয়া indirect, incidental, special, consequential, exemplary বা punitive damage-এর জন্য MemoApp দায়ী থাকবে না।",
        },
        {
          id: "changes",
          title: "১৩. এই terms পরিবর্তন",
          body: "আমরা সময়ে সময়ে এই Terms of Service update করতে পারি। গুরুত্বপূর্ণ পরিবর্তন হলে উপরের date update করা হবে এবং app-এর ভিতরে notice দেওয়া হতে পারে। Updated terms কার্যকর হওয়ার পরে MemoApp ব্যবহার চালিয়ে গেলে আপনি updated terms মেনে নিচ্ছেন।",
        },
      ],
      contactTitle: "এই terms সম্পর্কে প্রশ্ন",
      contactBody:
        "এই Terms of Service, account access, acceptable use, billing বা data request সম্পর্কে প্রশ্ন থাকলে MemoApp support-এ যোগাযোগ করুন।",
      contactEmailLabel: "ইমেইল",
      whatsappSupportLabel: "আমাদের সাথে কথা বলুন",
      backToHome: "হোমে ফিরে যান",
    },
  },
} as const satisfies Record<"en" | "bn", LocalizedLegalContent>;
