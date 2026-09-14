import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { marketingIcons } from './marketingIcons';

function CatalogPage({ catalogType, eyebrow, title, description, items }) {
    const itemLabel = catalogType === 'services' ? 'service' : 'industry';

    return (
        <div className="pb-24 pt-28">
            <section className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-base-200/55 px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
                <div className="absolute inset-0 wifix-panel-grid opacity-45" />
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-base-content/10" />
                <div className="relative max-w-4xl">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-base-content/50">{eyebrow}</p>
                    <h1 className="mt-5 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">{title}</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-base-content/65">{description}</p>
                </div>
            </section>

            <section className="py-20">
                <div className="mb-10 flex items-end justify-between gap-6">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-base-content/45">Explore</p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Choose the right {itemLabel}.</h2>
                    </div>
                    <span className="hidden text-sm font-bold text-base-content/45 sm:block">{items.length} focused pages</span>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const Icon = marketingIcons[item.slug];

                        return (
                            <Link
                                key={item.slug}
                                href={`/${catalogType}/${item.slug}`}
                                className="group flex min-h-96 flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-200/55 transition duration-300 hover:-translate-y-1 hover:border-base-content/25 hover:shadow-xl"
                            >
                                <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-base-300 bg-base-100/50">
                                    <div className="absolute inset-0 wifix-panel-grid opacity-55" />
                                    <span className="absolute left-5 top-4 text-xs font-bold tracking-[0.2em] text-base-content/35">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-base-content/15 bg-base-100 shadow-sm transition duration-300 group-hover:-rotate-3 group-hover:scale-110">
                                        <Icon aria-hidden="true" className="h-10 w-10" strokeWidth={1.45} />
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h2 className="text-2xl font-bold">{item.title}</h2>
                                    <p className="mt-4 flex-1 leading-7 text-base-content/60">{item.summary}</p>
                                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
                                        View {itemLabel}
                                        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="rounded-[2rem] bg-black px-6 py-14 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/45">Have something specific in mind?</p>
                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Let’s shape the right approach together.</h2>
                </div>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-0.5 lg:mt-0">
                    Start a conversation
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
            </section>
        </div>
    );
}

export default CatalogPage;
