import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-black px-6 py-40 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-signal-bright">Error 404</p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">This page is off camera.</h1>
        <p className="mt-6 max-w-xl text-lg text-white/70">The page you asked for does not exist or has moved.</p>
        <Link
          href="/"
          className="mt-10 inline-block bg-signal px-7 py-4 font-semibold text-white transition hover:bg-signal-deep"
        >
          Go to the homepage
        </Link>
      </div>
    </section>
  );
}
