import { landingContent } from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";

export const openGraphImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "MemoApp business management dashboard — billing, stock, dues, and AI preview",
} as const;

export const pageSeo = {
  home: {
    title: "MemoApp | AI-Powered Business Management Software for Bangladesh",
    description: siteConfig.description,
  },
  features: {
    title: "MemoApp Features | Billing, Inventory & Dues",
    openGraphTitle:
      "MemoApp Features | Billing, Inventory & Dues for Bangladesh Shops",
    description:
      "Explore MemoApp features: POS billing, Excel/CSV import, inventory, customer dues, reports, team access, and AI — a modern web app that runs on any device.",
    keywords: [
      "MemoApp features",
      "memoapp features",
      "memo app features",
      "memo app bd",
      "POS software features Bangladesh",
      "inventory management software BD",
      "baki tracking app",
      "Bangla POS app",
    ],
    path: "/features",
  },
  workflow: {
    title: "MemoApp Workflow | How the memo app runs your shop day",
    openGraphTitle:
      "MemoApp Workflow | memo app bd daily shop operations guide",
    description:
      "See how memoapp supports onboarding, counter billing, baki collection, restocking, expenses, reports, and sync for Bangladesh retail teams.",
    keywords: [
      "MemoApp workflow",
      "memo app workflow",
      "memo app bd",
      "shop daily workflow software",
      "POS workflow Bangladesh",
      "offline POS workflow",
    ],
    path: "/workflow",
  },
  pricing: {
    title:
      "Pricing & Plans — AI-Powered Business Management Software in Bangladesh",
    openGraphTitle:
      "MemoApp Pricing & Plans — AI-Powered Business Management Software in Bangladesh",
    description:
      "Compare MemoApp Trial, Basic, Growth, Business, and Enterprise plans for billing, inventory, dues, reports, backup, team access, and AI-assisted shop workflows in Bangladesh.",
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
    title: "MemoApp FAQ | Setup, Billing, Inventory & Support",
    openGraphTitle: "MemoApp FAQ | Billing, Inventory, Dues & Pricing Answers",
    description:
      "Find answers about MemoApp setup, billing, inventory, customer dues, pricing, offline sync, bKash payment, and support for Bangladeshi shop owners.",
    keywords: [
      "MemoApp FAQ",
      "memo app faq",
      "memo app bd",
      "memoapp support",
      "POS software questions Bangladesh",
    ],
    path: "/faq",
  },
  privacyPolicy: {
    title: "MemoApp Privacy Policy",
    openGraphTitle: "MemoApp Privacy Policy",
    description:
      "How MemoApp collects, uses, stores, and protects shop and customer data. Developed and maintained by OroraSoft.",
    keywords: [
      "MemoApp privacy policy",
      "memo app privacy",
      "memo app bd privacy",
      "shop management data policy",
    ],
    path: "/privacy-policy",
  },
  termsOfService: {
    title: "Terms of Service - MemoApp",
    openGraphTitle: "MemoApp Terms of Service",
    description:
      "Review the terms for using MemoApp, including account responsibilities, lawful shop data use, exports, subscriptions, and acceptable use.",
    keywords: [
      "MemoApp terms of service",
      "MemoApp terms",
      "POS app terms",
      "shop management software terms",
    ],
    path: "/terms-of-service",
  },
} as const;

const featureNames = landingContent.en.featureCards.map(
  (feature) => feature.title,
);

const pricingOffers = [
  {
    name: "Free",
    price: "0",
    description: "30 days of free access for exploring core MemoApp workflows.",
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
    price: "2499",
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
    alternateName: ["memoapp", "memo app", "memo app bd"],
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    logo: absoluteUrl("/logo.png"),
    parentOrganization: {
      "@type": "Organization",
      name: "OroraSoft",
      url: "https://www.ororasoft.com/",
    },
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
        itemListElement: [
          ...landingContent.en.featureCards.map((feature, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: feature.title,
            description: feature.description,
          })),
          ...landingContent.en.featuresRoute.setupJourney.steps.map(
            (step, index) => ({
              "@type": "ListItem",
              position: landingContent.en.featureCards.length + index + 1,
              name: step.title,
              description: step.description,
            }),
          ),
        ],
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
      step: [
        ...landingContent.en.workflowRoute.onboardingSteps.map(
          (step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.description,
            url: absoluteUrl("/workflow"),
          }),
        ),
        ...landingContent.en.workflowRoute.timeline.map((step, index) => ({
          "@type": "HowToStep",
          position:
            landingContent.en.workflowRoute.onboardingSteps.length + index + 1,
          name: step.title,
          text: step.description,
          url: absoluteUrl("/workflow"),
        })),
      ],
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
      publisher: {
        "@type": "Organization",
        name: "OroraSoft",
        url: "https://www.ororasoft.com/",
      },
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      about: [
        "Privacy policy",
        "Shop management data protection",
        "Customer data use",
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
      about: ["Terms of service", "Acceptable use", "Data export"],
    },
  ];
}
