const GA_MEASUREMENT_ID = "G-LPQHRL9HJ5";

/**
 * Injects the Google tag directly in <head> so Analytics' installer
 * and Realtime can detect G-LPQHRL9HJ5 (next/script afterInteractive
 * only preloads and is often missed by Google's HTML checker).
 */
export function GoogleAnalytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
