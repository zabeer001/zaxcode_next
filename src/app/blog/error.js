'use client';

export default function BlogError({ reset }) {
  return <section className="mx-auto max-w-3xl pb-24 pt-36 text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] opacity-45">Temporarily unavailable</p><h1 className="mt-4 text-4xl font-bold">The blog could not be loaded.</h1><p className="mt-4 opacity-65">Please try again in a moment. Published content remains safely stored in Laravel.</p><button type="button" className="btn btn-primary mt-8" onClick={reset}>Try again</button></section>;
}
