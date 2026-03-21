import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center">
      <div className="mx-auto flex w-full max-w-4xl flex-col px-6 py-16 sm:px-8 lg:px-12">
        <section className="overflow-hidden rounded-3xl border border-fd-border bg-gradient-to-br from-fd-card via-fd-background to-fd-card p-8 shadow-sm sm:p-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-fd-muted-foreground">
              Past Question Bank
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-fd-foreground sm:text-5xl">
              QVault
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-fd-muted-foreground sm:text-lg">
              Engineering past questions organized by semester, subject, and
              chapter for faster revision.
            </p>
            <div className="mt-8 flex">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-full bg-fd-primary px-5 py-3 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
              >
                Open Docs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
