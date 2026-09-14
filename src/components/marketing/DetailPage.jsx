import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import React from 'react';
import { marketingIcons } from './marketingIcons';
import { serializeJsonLd, siteUrl } from '@/lib/seo';

function DetailPage({ catalogType, eyebrow, item }) {
    const Icon = marketingIcons[item.slug];
    const catalogLabel = catalogType === 'services' ? 'Services' : 'Industries';
    const pageUrl = `${siteUrl}/${catalogType}/${item.slug}`;
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': catalogType === 'services' ? 'Service' : 'WebPage',
                '@id': `${pageUrl}/#primary`,
                name: item.title,
                description: item.summary,
                url: pageUrl,
                ...(catalogType === 'services' ? { provider: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Zaxcode', url: siteUrl }, areaServed: ['Bangladesh', 'Worldwide'] } : { isPartOf: { '@id': `${siteUrl}/#website` } }),
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                    { '@type': 'ListItem', position: 2, name: catalogLabel, item: `${siteUrl}/${catalogType}` },
                    { '@type': 'ListItem', position: 3, name: item.title, item: pageUrl },
                ],
            },
        ],
    };

    return (
        <div className="pb-24 pt-28">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
            <nav aria-label="Breadcrumb">
            <Link href={`/${catalogType}`} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-base-content/60 transition hover:text-base-content">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                All {catalogLabel.toLowerCase()}
            </Link>
            </nav>

            <section className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-base-200/55 px-6 py-14 sm:px-10 lg:grid lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12 lg:px-14 lg:py-20">
                <div className="absolute inset-0 wifix-panel-grid opacity-40" />
                <div className="relative">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-base-content/50">{eyebrow}</p>
                    <h1 className="mt-5 text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">{item.title}</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-base-content/65">{item.summary}</p>
                    <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-base-content px-6 py-3 font-bold text-base-100 transition hover:-translate-y-0.5">
                        Discuss your project
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                </div>
                <div className="relative mt-12 flex justify-center lg:mt-0">
                    <div className="absolute inset-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-base-content/10" />
                    <div className="absolute inset-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-base-content/5" />
                    <div className="relative grid h-40 w-40 place-items-center rounded-[2.25rem] border border-base-content/15 bg-base-100/85 shadow-xl backdrop-blur">
                        <Icon aria-hidden="true" className="h-20 w-20" strokeWidth={1.2} />
                    </div>
                </div>
            </section>

            <section className="grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-base-content/45">The approach</p>
                    <h2 className="mt-4 text-4xl font-bold leading-tight">Built around the work that matters.</h2>
                </div>
                <div>
                    <p className="text-xl leading-9 text-base-content/70">{item.intro}</p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        {item.highlights.map((highlight) => (
                            <div key={highlight} className="rounded-2xl border border-base-300 bg-base-200/55 p-5">
                                <Check aria-hidden="true" className="mb-4 h-5 w-5" strokeWidth={2.3} />
                                <p className="font-bold leading-6">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="rounded-[2rem] bg-black px-6 py-14 text-white sm:px-10 lg:px-14">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">What we can deliver</p>
                        <h2 className="mt-4 text-4xl font-bold leading-tight">A focused solution, not a pile of features.</h2>
                    </div>
                    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2">
                        {item.deliverables.map((deliverable, index) => (
                            <div key={deliverable} className="bg-black p-6">
                                <span className="text-xs font-bold tracking-[0.2em] text-white/35">{String(index + 1).padStart(2, '0')}</span>
                                <p className="mt-4 text-lg font-bold">{deliverable}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-base-content/45">How we move forward</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight">A clear path from problem to useful product.</h2>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {item.process.map((step, index) => (
                        <div key={step} className="rounded-2xl border border-base-300 bg-base-200/55 p-6">
                            <span className="text-4xl font-bold text-base-content/20">0{index + 1}</span>
                            <p className="mt-8 text-lg font-bold leading-7">{step}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-8 rounded-[2rem] border border-base-300 bg-base-200/55 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold">Ready to discuss {item.title.toLowerCase()}?</h2>
                    <p className="mt-3 leading-7 text-base-content/60">Tell us what you are trying to improve, and we’ll help identify a practical first step.</p>
                </div>
                <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-base-content px-6 py-3 font-bold text-base-100">
                    Contact Zaxcode
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
            </section>
        </div>
    );
}

export default DetailPage;
