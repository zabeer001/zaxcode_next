import React from 'react';
import { stats } from './data';
import SectionHeader from './SectionHeader';

function StatsSection() {
    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="A proven track record" title="Built for measurable operational improvement." />
            <div className="grid gap-4 md:grid-cols-4">
                {stats.map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/15 bg-white p-7 text-black">
                        <div className="text-4xl font-bold">{value}</div>
                        <p className="mt-3 text-sm text-black/55">{label}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}

export default StatsSection;
