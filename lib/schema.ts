import { landingContent } from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";

export const openGraphImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "MemoApp SaaS POS dashboard, billing, stock, dues, and AI preview",
} as const;

export const pageSeo = {
  home: {
    title: "MemoApp | AI-Powered POS, Inventory & Business Management",
    description: siteConfig.description,
  },
  features: {
    title: "AI-Powered Features - Modern POS, Inventory & Dues",
    openGraphTitle:
      "MemoApp AI-Powered Features - Modern POS, Inventory & Dues",
    description:
      "Explore MemoApp's AI-powered features for modern Bangladeshi shops: POS billing, memo sharing, inventory, purchase and supplier ledgers, customer dues, reports, backup, team workflows, and smart business assistance.",
    keywords: [
      "MemoApp features",
      "POS software features Bangladesh",
      "inventory management software BD",
      "Dues tracking app",
      "customer due tracking software",
      "Bangla POS app",
      "Google Drive backup POS",
      "AI shop assistant",
    ],
    path: "/features",
  },
  workflow: {
    title: "How MemoApp Works - AI-Powered Modern Shop Workflow",
    openGraphTitle: "How MemoApp Works - AI-Powered Modern Shop Workflow",
    description:
      "See how MemoApp supports a modern AI-powered shop day from opening the counter to billing, stock updates, due collection, purchases, expenses, reports, sync, and backup.",
    keywords: [
      "shop daily workflow software",
      "POS workflow Bangladesh",
      "retail workflow management",
      "shop counter software",
      "offline POS workflow",
      "memo billing workflow",
    ],
    path: "/workflow",
  },
  pricing: {
    title: "Pricing & Plans - AI-Powered POS Software in Bangladesh",
    openGraphTitle:
      "MemoApp Pricing & Plans - AI-Powered POS Software in Bangladesh",
    description:
      "Compare MemoApp Trial, Basic, Growth, Business, and Enterprise plans for modern AI-powered POS billing, inventory, dues, reports, backup, team access, and growing shop workflows in Bangladesh.",
    keywords: [
      "MemoApp pricing",
      "POS software price Bangladesh",
      "shop management software price",
      "dokan management software dam",
      "inventory software pricing BD",
      "SaaS POS subscription Bangladesh",
    ],
    path: "/pricing",
  },
  faq: {
    title: "FAQ - AI-Powered POS, Inventory, Pricing & Support",
    openGraphTitle:
      "MemoApp FAQ - AI-Powered POS, Inventory, Pricing & Support",
    description:
      "Find answers about MemoApp's modern AI-powered POS setup, memos, inventory, dues, team access, pricing plans, offline sync, backup, and support options.",
    keywords: [
      "MemoApp FAQ",
      "MemoApp support",
      "POS software questions Bangladesh",
      "inventory app help",
      "shop management software support",
    ],
    path: "/faq",
  },
  privacyPolicy: {
    title: "Privacy Policy - MemoApp Data & Google API Use",
    openGraphTitle: "MemoApp Privacy Policy - Data & Google API Use",
    description:
      "Read how MemoApp collects, uses, stores, shares, and protects account, shop, customer, Google Contacts, and Google Drive backup data.",
    keywords: [
      "MemoApp privacy policy",
      "MemoApp Google Contacts privacy",
      "MemoApp Google Drive backup privacy",
      "POS app privacy policy",
      "shop management data policy",
    ],
    path: "/privacy-policy",
  },
  termsOfService: {
    title: "Terms of Service - MemoApp",
    openGraphTitle: "MemoApp Terms of Service",
    description:
      "Review the terms for using MemoApp, including account responsibilities, lawful shop data use, Google integrations, backups, subscriptions, and acceptable use.",
    keywords: [
      "MemoApp terms of service",
      "MemoApp terms",
      "POS app terms",
      "shop management software terms",
      "Google Drive backup terms",
    ],
    path: "/terms-of-service",
  },
} as const;

const featureNames = landingContent.en.featureCards.map(
  (feature) => feature.title,
);

const pricingOffers = [
  {
    name: "Trial",
    price: "0",
    description: "14-day trial access for exploring core MemoApp workflows.",
  },
  {
    name: "Basic",
    price: "499",
    description: "Monthly plan for clean POS billing, stock, and dues.",
  },
  {
    name: "Growth",
    price: "1199",
    description:
      "Monthly plan for growing shops adding manager and staff logins, reports, AI, and import/export.",
  },
  {
    name: "Business",
    price: "2999",
    description:
      "Monthly plan for established teams with unlimited records, full employee roles, and priority support.",
  },
  {
    name: "Enterprise",
    price: "0",
    description:
      "Custom pricing for chains, wholesalers, and multi-branch operations — contact sales.",
  },
] as const;

function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

function buildBreadcrumb(path: string, pageName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: absoluteUrl(path),
      },
    ],
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MemoApp",
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    logo: absoluteUrl("/logo.png"),
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: "MemoApp",
      url: siteConfig.url,
    },
  };
}

export function buildSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MemoApp",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: siteConfig.description,
    url: siteConfig.url,
    offers: pricingOffers.map((offer) => ({
      "@type": "Offer",
      name: `${offer.name} plan`,
      price: offer.price,
      priceCurrency: "BDT",
      category: "SaaS POS subscription",
      description: offer.description,
      url: absoluteUrl("/pricing"),
      availability: "https://schema.org/InStock",
    })),
    featureList: featureNames,
  };
}

export function buildHomePageSchema() {
  return [
    buildSoftwareApplicationSchema(),
    buildOrganizationSchema(),
    buildWebSiteSchema(),
  ];
}

export function buildFeaturesPageSchema() {
  return [
    buildBreadcrumb(pageSeo.features.path, "Features"),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageSeo.features.openGraphTitle,
      url: absoluteUrl(pageSeo.features.path),
      description: pageSeo.features.description,
      mainEntity: {
        "@type": "ItemList",
        name: "MemoApp feature list",
        itemListElement: landingContent.en.featureCards.map(
          (feature, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: feature.title,
            description: feature.description,
          }),
        ),
      },
    },
  ];
}

export function buildWorkflowPageSchema() {
  return [
    buildBreadcrumb(pageSeo.workflow.path, "Workflow"),
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Run a retail shop day with MemoApp",
      description: pageSeo.workflow.description,
      totalTime: "P1D",
      step: landingContent.en.workflowRoute.timeline.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
        url: absoluteUrl("/workflow"),
      })),
    },
  ];
}

export function buildPricingPageSchema() {
  return [
    buildBreadcrumb(pageSeo.pricing.path, "Pricing"),
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "MemoApp POS and Shop Management Software",
      description: pageSeo.pricing.description,
      brand: {
        "@type": "Brand",
        name: "MemoApp",
      },
      offers: pricingOffers.map((offer) => ({
        "@type": "Offer",
        name: `${offer.name} plan`,
        price: offer.price,
        priceCurrency: "BDT",
        description: offer.description,
        url: absoluteUrl("/pricing"),
        availability: "https://schema.org/InStock",
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: landingContent.en.pricingRoute.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export function buildFaqPageSchema() {
  return [
    buildBreadcrumb(pageSeo.faq.path, "FAQ"),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: landingContent.en.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export function buildPrivacyPolicyPageSchema() {
  return [
    buildBreadcrumb(pageSeo.privacyPolicy.path, "Privacy Policy"),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageSeo.privacyPolicy.openGraphTitle,
      url: absoluteUrl(pageSeo.privacyPolicy.path),
      description: pageSeo.privacyPolicy.description,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      about: [
        "Privacy policy",
        "Google Contacts data use",
        "Google Drive backup data use",
        "Shop management data protection",
      ],
    },
  ];
}

export function buildTermsOfServicePageSchema() {
  return [
    buildBreadcrumb(pageSeo.termsOfService.path, "Terms of Service"),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageSeo.termsOfService.openGraphTitle,
      url: absoluteUrl(pageSeo.termsOfService.path),
      description: pageSeo.termsOfService.description,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      about: [
        "Terms of service",
        "Acceptable use",
        "Google Contacts import",
        "Google Drive backup",
      ],
    },
  ];
}
