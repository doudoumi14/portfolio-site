import type { Metadata } from "next";
import Link from "next/link";

// Without this override the 404 page inherits the root layout's canonical and
// tells Google that every unknown URL is the homepage, which is how a site
// manufactures the duplicates Search Console then complains about.
export const metadata: Metadata = {
  title: "Page not found | Adem Brouri, P.Eng.",
  // Next already emits `noindex` for this route, so only the canonical needs
  // clearing.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
      <p className="text-[15px] text-muted">Error 404</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        That page does not exist.
      </h1>
      <p className="mt-4 text-muted">The link may be out of date, or the address mistyped.</p>
      <p className="mt-8">
        <Link
          href="/"
          className="font-semibold underline decoration-line decoration-2 underline-offset-[0.3em] transition-colors hover:decoration-foreground"
        >
          Back to the homepage
        </Link>
      </p>
    </main>
  );
}
