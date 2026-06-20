import Link from "next/link";

/**
 * Server-rendered application purpose copy for homepage crawlers and OAuth reviewers.
 * Placed above the interactive landing shell so the purpose is in the initial HTML.
 */
export function HomepageVerificationIntro() {
  return (
    <section
      aria-label="MemoApp application purpose"
      className="border-b border-(--color-border) bg-white px-5 pb-10 pt-24 lg:px-8 lg:pt-28"
      id="application-purpose"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--color-primary)">
          About this application
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
          MemoApp: POS and shop management software for Bangladeshi retailers
        </h1>
        <p className="mt-5 text-base leading-8 text-(--color-muted) sm:text-lg">
          MemoApp is a web application that helps shop owners and staff manage
          counter billing, inventory, customer dues, supplier purchases,
          expenses, reports, and team workflows in one place. The app is
          developed by OroraSoft for grocery, pharmacy, hardware, wholesale, and
          other local retail businesses in Bangladesh.
        </p>
        <p className="mt-4 text-base leading-8 text-(--color-muted)">
          MemoApp requests Google user data only for optional features you
          choose: read-only Google Contacts access for customer import, and
          Google Drive access to create or update backup files when you request
          backup or enable automatic backup. MemoApp does not use Google user
          data for advertising or sell it to third parties.
        </p>
        <p className="mt-6 text-sm font-semibold text-(--color-ink)">
          <Link
            className="text-(--color-primary) underline decoration-(--color-primary)/30 underline-offset-4 hover:text-(--color-primary-dark)"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <span aria-hidden="true" className="mx-2 text-(--color-muted)">
            ·
          </span>
          <Link
            className="text-(--color-primary) underline decoration-(--color-primary)/30 underline-offset-4 hover:text-(--color-primary-dark)"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </section>
  );
}
