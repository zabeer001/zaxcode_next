import React from 'react';
import Link from 'next/link';
import { BriefcaseBusiness, GraduationCap, Rocket, ShoppingBag, TrendingUp, UsersRound } from 'lucide-react';
import { industries } from './data';
import SectionHeader from './SectionHeader';

const industryIcons = {
    'Startups & SaaS': Rocket,
    'Service Businesses': BriefcaseBusiness,
    Education: GraduationCap,
    'Retail & Commerce': ShoppingBag,
    'Professional Teams': UsersRound,
    'Growing Brands': TrendingUp,
};

function IndustriesSection() {
    return (
        <section className="py-24">
            <SectionHeader
                eyebrow="Success across industries"
                title="Practical systems for teams with real operational pressure."
                action={
                    <Link href="/industries" className="hidden rounded-full border border-base-content/15 px-5 py-2 text-sm font-bold md:block">
                        View all industries
                    </Link>
                }
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {industries.map(([title, text, slug], index) => {
                    const Icon = industryIcons[title];

                    return (
                        <Link href={`/industries/${slug}`} key={title} className="group block overflow-hidden rounded-2xl border border-base-300 bg-base-200/55 transition-transform duration-300 hover:-translate-y-1">
                            <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-base-300 bg-base-100/40">
                                <div className="absolute inset-0 wifix-panel-grid opacity-60 transition-opacity group-hover:opacity-90" />
                                <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full border border-base-content/10" />
                                <div className="absolute -bottom-16 -left-8 h-32 w-32 rounded-full border border-base-content/10" />
                                <span className="absolute left-5 top-4 text-xs font-bold tracking-[0.22em] text-base-content/35">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-base-content/15 bg-base-100/75 shadow-sm transition duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-lg">
                                    <Icon aria-hidden="true" className="h-10 w-10 text-base-content" strokeWidth={1.45} />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold">{title}</h3>
                                <p className="mt-4 leading-7 text-base-content/60">{text}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default IndustriesSection;
