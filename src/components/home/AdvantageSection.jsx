import React from 'react';
import { advantages } from './data';
import SectionHeader from './SectionHeader';

function AdvantageSection() {
    return (
        <section id="process" className="pb-24">
            <SectionHeader eyebrow="The Zaxcode advantage" title="How we keep projects useful after launch." />
            <div className="grid gap-5 md:grid-cols-2">
                {advantages.map(([title, text]) => (
                    <article key={title} className="rounded-2xl border border-base-300 bg-base-200/55 p-7">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="mt-4 leading-7 text-base-content/60">{text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default AdvantageSection;
