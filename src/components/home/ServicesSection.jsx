import React from 'react';
import Link from 'next/link';
import { Building2, DatabaseZap, Globe2, PanelsTopLeft, PenTool, Workflow } from 'lucide-react';
import { services } from './data';

const serviceIcons = {
    web: Globe2,
    saas: PanelsTopLeft,
    design: PenTool,
    automation: Workflow,
    systems: Building2,
    erp: DatabaseZap,
};

function ServicesSection() {
    return (
        <section id="services" className="relative left-1/2 w-screen -translate-x-1/2 bg-white px-4 py-28 text-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                    <div>
                        <h2 className="text-5xl font-bold leading-tight md:text-7xl">Services built to move business.</h2>
                    </div>
                    <div className="max-w-2xl lg:ml-auto">
                        <p className="text-xl leading-8 text-black/60">
                            Strategy, design, engineering, automation, and dependable support brought together to move your
                            idea from possibility to a polished product.
                        </p>
                        <Link href="/services" className="mt-5 inline-flex border-b border-black pb-1 text-sm font-bold">
                            View all services
                        </Link>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {services.map((service, index) => {
                        const Icon = serviceIcons[service.icon];

                        return (
                            <Link
                                href={`/services/${service.slug}`}
                                key={service.title}
                                className={`group overflow-hidden rounded-[1.6rem] border border-black/10 ${
                                    index % 3 === 0 ? 'bg-black text-white' : 'bg-white text-black'
                                } shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                            >
                                <div className="grid min-h-80 md:grid-cols-[1.05fr_0.95fr]">
                                    <div className="flex flex-col justify-between p-7">
                                        <div>
                                            <div className={`mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-bold ${
                                                index % 3 === 0 ? 'border-white/25 text-white/70' : 'border-black/15 text-black/55'
                                            }`}>
                                                <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                                                {service.label}
                                            </div>
                                            <h3 className="text-3xl font-bold leading-tight">{service.title}</h3>
                                            <p className={`mt-5 leading-8 ${index % 3 === 0 ? 'text-white/65' : 'text-black/60'}`}>
                                                {service.text}
                                            </p>
                                        </div>

                                        <span
                                            className={`mt-8 inline-flex text-sm font-bold ${
                                                index % 3 === 0 ? 'text-white' : 'text-black'
                                            }`}
                                        >
                                            Learn more
                                        </span>
                                    </div>

                                    <div className={`relative min-h-52 overflow-hidden ${
                                        index % 3 === 0 ? 'bg-white/10' : 'bg-black'
                                    }`}>
                                        <div className="absolute inset-0 wifix-panel-grid opacity-30" />
                                        <Icon
                                            aria-hidden="true"
                                            className="absolute right-6 top-6 h-20 w-20 text-white/80 transition duration-300 group-hover:scale-110 group-hover:text-white"
                                            strokeWidth={1.15}
                                        />
                                        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                                            <div className="mb-5 flex gap-2">
                                                <span className="h-2 w-8 rounded-full bg-white" />
                                                <span className="h-2 w-8 rounded-full bg-white/60" />
                                                <span className="h-2 w-8 rounded-full bg-white/30" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-2 rounded-full bg-white/60" />
                                                <div className="h-2 w-2/3 rounded-full bg-white/30" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
