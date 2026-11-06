import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";

import { SITE_URL } from "@/data/site";

// A résumé's pairing: Source Serif 4 for the name and the section titles
// (with its optical sizes, so the large settings are drawn for large sizes),
// Source Sans 3 for everything read. next/font downloads both at build time
// and serves them from this site, with fallbacks sized to them, so the page
// asks no font server for anything and nothing moves while they load.
const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const text = Source_Sans_3({
  variable: "--font-text",
  subsets: ["latin"],
});

// The same static build is served from two hosts: adembrouri.com (Cloudflare)
// and doudoumi14.github.io (GitHub Pages). Without a canonical link Google sees
// two identical pages, picks one itself, and reports the other as a duplicate
// with no user-selected canonical. The tag below ships in both copies and names
// adembrouri.com as the one to index.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "Adem Brouri, P.Eng.",
  description:
    "Engineering leadership, technology consulting and an MBA in progress, plus the side projects that keep the technical skills sharp.",
};

// Runs before first paint so a dark-mode visitor never sees a white flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // themeScript below intentionally adds `dark` to <html> before hydration,
    // so the server and client classNames legitimately differ on first paint.
    <html
      lang="en"
      className={`${display.variable} ${text.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
