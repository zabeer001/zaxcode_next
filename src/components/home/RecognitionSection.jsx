import React from 'react';
import { recognition } from './data';
import SectionHeader from './SectionHeader';

function RecognitionSection() {
    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
            <SectionHeader
                eyebrow="Awards & recognition"
                title="Recognized by the way the system behaves after launch."
                text="For Zaxcode, recognition means a product that feels clear, performs reliably, and creates value every day."
            />

            <div className="grid gap-4 md:grid-cols-4">
                {recognition.map(([title, text]) => (
                    <article key={title} className="rounded-2xl border border-white/15 bg-white p-6 text-black transition-transform duration-300 hover:-translate-y-1">
                        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                            ✓
                        </div>
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="mt-4 text-sm leading-7 text-black/60">{text}</p>
                    </article>
                ))}
            </div>
            </div>
        </section>
    );
}

export default RecognitionSection;
