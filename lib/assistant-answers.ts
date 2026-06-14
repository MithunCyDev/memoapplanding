import {
  appLoginUrl,
  ororaSoftAboutUrl,
  type LandingContent,
  type Language,
} from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";

export interface AssistantAnswer {
  text: string;
  suggestions: string[];
  links: {
    label: string;
    href: string;
  }[];
  matched: boolean;
}

function includesAny(value: string, keywords: readonly string[]) {
  return keywords.some((keyword) => value.includes(keyword));
}

function normalizeQuestion(question: string) {
  return question.trim().toLowerCase();
}

function formatList(items: readonly string[], limit = 5) {
  return items.slice(0, limit).join(", ");
}

function getRouteLabel(
  content: LandingContent,
  href: string,
  fallbackLabel: string,
) {
  return (
    content.footer.productLinks.find((link) => link.href === href)?.label ??
    content.footer.legalLinks.find((link) => link.href === href)?.label ??
    fallbackLabel
  );
}

function formatPlanPrice(plan: LandingContent["pricingPlans"][number]) {
  const separator = plan.monthlyTerm.startsWith("/") ? "" : " ";

  return `${plan.monthlyPrice}${separator}${plan.monthlyTerm}`;
}

function buildPricingAnswer(
  content: LandingContent,
  language: Language,
): AssistantAnswer {
  const highlightedPlan =
    content.pricingPlans.find((plan) => plan.highlighted) ??
    content.pricingPlans[0];
  const planSummary = content.pricingPlans
    .map((plan) => `${plan.name}: ${formatPlanPrice(plan)} - ${plan.target}`)
    .join("\n");
  const recommendation =
    language === "bn"
      ? `ঘুরে দেখতে চাইলে ${content.pricingPlans[0].name} দিয়ে শুরু করুন। ব্যস্ত দোকানের জন্য ${highlightedPlan.name} ভালো, কারণ এতে আছে ${formatList(highlightedPlan.features, 4)}।`
      : `Most visitors should start with ${content.pricingPlans[0].name} if they want to explore first. ${highlightedPlan.name} is highlighted for busy shops because it adds ${formatList(highlightedPlan.features, 4)}.`;

  return {
    text: `${content.pricingHeading.title}\n\n${planSummary}\n\n${recommendation}`,
    suggestions: [
      content.assistant.quickPrompts[1].query,
      content.assistant.quickPrompts[2].query,
    ],
    links: [
      { label: content.footer.tryForFree, href: appLoginUrl },
      {
        label: getRouteLabel(content, "/pricing", "Pricing"),
        href: "/pricing",
      },
    ],
    matched: true,
  };
}

function buildFeaturesAnswer(content: LandingContent): AssistantAnswer {
  const features = content.featureCards
    .slice(0, 8)
    .map((feature) => `${feature.title}: ${feature.description}`)
    .join("\n");

  return {
    text: `${content.featuresHeading.title}\n\n${features}`,
    suggestions: [
      content.assistant.quickPrompts[0].query,
      content.assistant.quickPrompts[2].query,
    ],
    links: [
      {
        label: getRouteLabel(content, "/features", "Features"),
        href: "/features",
      },
    ],
    matched: true,
  };
}

function buildWorkflowAnswer(content: LandingContent): AssistantAnswer {
  const steps =
    "timeline" in content.workflowRoute
      ? content.workflowRoute.timeline
      : content.workflowSteps;
  const stepSummary = steps
    .map((step) => `${step.step}. ${step.title} - ${step.description}`)
    .join("\n");

  return {
    text: `${content.workflowHeading.title}\n\n${stepSummary}`,
    suggestions: [
      content.assistant.quickPrompts[1].query,
      content.assistant.quickPrompts[0].query,
    ],
    links: [
      {
        label: getRouteLabel(content, "/workflow", "Workflow"),
        href: "/workflow",
      },
    ],
    matched: true,
  };
}

function buildCompanyAnswer(
  content: LandingContent,
  language: Language,
): AssistantAnswer {
  const text =
    language === "bn"
      ? `MemoApp হলো ${content.footer.productBy}। OroraSoft এই product ডেভেলপ ও মেইনটেইন করে। Company detail জানতে OroraSoft about page দেখতে পারেন।`
      : `MemoApp is ${content.footer.productBy}. OroraSoft develops and maintains the product, and the landing page links to the OroraSoft about page for company details.`;

  return {
    text,
    suggestions: [
      content.assistant.quickPrompts[1].query,
      content.assistant.quickPrompts[3].query,
    ],
    links: [
      {
        label: content.footer.companyLinks[0]?.label ?? "About OroraSoft",
        href: ororaSoftAboutUrl,
      },
    ],
    matched: true,
  };
}

function buildGoogleAnswer(
  content: LandingContent,
  language: Language,
): AssistantAnswer {
  const driveFeature = content.featureCards.find((feature) =>
    feature.title.toLowerCase().includes("google"),
  );
  const legalNote =
    language === "bn"
      ? "Google Contacts ও Google Drive data use সম্পর্কে বিস্তারিত জানতে public Privacy Policy দেখতে পারেন।"
      : "You can also review the public Privacy Policy for more detail about Google Contacts and Google Drive data use.";

  return {
    text: `${driveFeature?.description ?? content.footer.googleDataNote}\n\n${content.footer.googleDataNote} ${legalNote}`,
    suggestions: [
      content.assistant.quickPrompts[0].query,
      content.assistant.quickPrompts[4].query,
    ],
    links: [
      {
        label: getRouteLabel(content, "/privacy-policy", "Privacy Policy"),
        href: "/privacy-policy",
      },
      {
        label: getRouteLabel(content, "/terms-of-service", "Terms of Service"),
        href: "/terms-of-service",
      },
    ],
    matched: true,
  };
}

function buildSupportAnswer(
  content: LandingContent,
  language: Language,
): AssistantAnswer {
  const supportNote =
    language === "bn"
      ? `আপনি ফ্রি ট্রায়াল শুরু করতে পারেন, ${siteConfig.contactEmail}-এ support email করতে পারেন, অথবা assistant actions থেকে WhatsApp support ব্যবহার করতে পারেন।`
      : `You can start a free trial, email support at ${siteConfig.contactEmail}, or use WhatsApp support from the assistant actions.`;

  return {
    text: `${content.footer.contactDescription}\n\n${supportNote}`,
    suggestions: [
      content.assistant.quickPrompts[0].query,
      content.assistant.quickPrompts[1].query,
    ],
    links: [
      { label: content.footer.tryForFree, href: appLoginUrl },
      {
        label: content.assistant.emailSupportLabel,
        href: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    matched: true,
  };
}

function buildBanglaOfflineTeamAnswer(
  content: LandingContent,
): AssistantAnswer {
  const matchingFaq = content.faqs.find((faq) =>
    includesAny(faq.question.toLowerCase(), [
      "bangla",
      "internet",
      "team",
      "offline",
      "বাংলা",
      "ইন্টারনেট",
      "টিম",
    ]),
  );

  return {
    text:
      matchingFaq?.answer ??
      "MemoApp supports local shop teams with Bangla-friendly usage, offline-friendly workflows, and team-oriented features on paid plans.",
    suggestions: [
      content.assistant.quickPrompts[2].query,
      content.assistant.quickPrompts[0].query,
    ],
    links: [
      { label: getRouteLabel(content, "/faq", "FAQ"), href: "/faq" },
      {
        label: getRouteLabel(content, "/features", "Features"),
        href: "/features",
      },
    ],
    matched: true,
  };
}

function buildFaqAnswer(
  content: LandingContent,
  normalizedQuestion: string,
): AssistantAnswer | null {
  const candidates = [
    ...content.faqs,
    ...content.featuresRoute.faqs.map((faq) => ({
      ...faq,
      category: "Features",
    })),
    ...content.pricingRoute.faqs.map((faq) => ({
      ...faq,
      category: "Pricing",
    })),
  ];

  const match = candidates.find((faq) => {
    const combined =
      `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
    const words = normalizedQuestion
      .split(/\s+/)
      .filter((word) => word.length > 3);

    return words.some((word) => combined.includes(word));
  });

  if (!match) {
    return null;
  }

  return {
    text: `${match.question}\n\n${match.answer}`,
    suggestions: [
      content.assistant.quickPrompts[0].query,
      content.assistant.quickPrompts[1].query,
    ],
    links: [{ label: getRouteLabel(content, "/faq", "FAQ"), href: "/faq" }],
    matched: true,
  };
}

function buildFallbackAnswer(content: LandingContent): AssistantAnswer {
  return {
    text: content.assistant.fallbackMessage,
    suggestions: content.assistant.quickPrompts
      .slice(0, 3)
      .map((prompt) => prompt.query),
    links: [
      { label: content.assistant.whatsappSupportLabel, href: "whatsapp" },
      {
        label: content.assistant.emailSupportLabel,
        href: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    matched: false,
  };
}

export function getAssistantAnswer({
  content,
  language,
  question,
}: {
  content: LandingContent;
  language: Language;
  question: string;
}): AssistantAnswer {
  const normalizedQuestion = normalizeQuestion(question);
  const isBangla = language === "bn";

  if (
    includesAny(normalizedQuestion, [
      "price",
      "pricing",
      "plan",
      "cost",
      "trial",
      "subscription",
      "billing",
      "দাম",
      "প্রাইস",
      "প্ল্যান",
      "ট্রায়াল",
    ])
  ) {
    return buildPricingAnswer(content, language);
  }

  if (
    includesAny(normalizedQuestion, [
      "google",
      "drive",
      "backup",
      "contacts",
      "privacy",
      "terms",
      "ব্যাকআপ",
      "প্রাইভেসি",
    ])
  ) {
    return buildGoogleAnswer(content, language);
  }

  if (
    includesAny(normalizedQuestion, [
      "ororasoft",
      "company",
      "built",
      "developer",
      "about",
      "কে",
      "তৈরি",
      "কোম্পানি",
    ])
  ) {
    return buildCompanyAnswer(content, language);
  }

  if (
    includesAny(normalizedQuestion, [
      "workflow",
      "works",
      "how",
      "daily",
      "shop day",
      "process",
      "ওয়ার্কফ্লো",
      "কীভাবে",
      "দিন",
    ])
  ) {
    return buildWorkflowAnswer(content);
  }

  if (
    includesAny(normalizedQuestion, [
      "support",
      "contact",
      "whatsapp",
      "email",
      "help",
      "সাপোর্ট",
      "যোগাযোগ",
      "সাহায্য",
    ])
  ) {
    return buildSupportAnswer(content, language);
  }

  if (
    includesAny(normalizedQuestion, [
      "bangla",
      "offline",
      "internet",
      "team",
      "employee",
      "বাংলা",
      "ইন্টারনেট",
      "টিম",
      "এমপ্লয়ি",
    ])
  ) {
    return buildBanglaOfflineTeamAnswer(content);
  }

  if (
    includesAny(normalizedQuestion, [
      "feature",
      "inventory",
      "stock",
      "invoice",
      "due",
      "customer",
      "report",
      "ফিচার",
      "স্টক",
      "মেমো",
      "রিপোর্ট",
      "বাকি",
    ])
  ) {
    return buildFeaturesAnswer(content);
  }

  const faqAnswer = buildFaqAnswer(content, normalizedQuestion);

  if (faqAnswer) {
    return faqAnswer;
  }

  if (isBangla && normalizedQuestion.length < 2) {
    return buildFallbackAnswer(content);
  }

  return buildFallbackAnswer(content);
}
