import React from 'react';
import { works } from './data';
import SectionHeader from './SectionHeader';

function WorkCard({ work, index }) {
    return (
        <article className="group grid gap-5 border-t border-white/15 py-8 md:grid-cols-[0.35fr_1fr_0.45fr] md:items-center">
            <div className="text-sm font-bold text-white/55">0{index + 1}</div>
            <div>
                <h3 className="text-2xl font-bold transition-colors group-hover:text-white/70">{work.title}</h3>
                <p className="mt-3 max-w-xl leading-7 text-white/60">{work.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
                {work.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}

function SelectedWorkSection() {
    return (
        <section id="systems" className="relative left-1/2 w-screen -translate-x-1/2 bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
            <SectionHeader
                eyebrow="Selected work"
                title="Selected products built for clarity, speed, and growth."
                action={
                    <a href="#contact" className="hidden rounded-full border border-white/30 px-5 py-2 text-sm font-bold md:block">
                        Explore all work
                    </a>
                }
            />

            <div>
                {works.map((work, index) => (
                    <WorkCard key={work.title} work={work} index={index} />
                ))}
            </div>
            </div>
        </section>
    );
}

export default SelectedWorkSection;
