import React from 'react';
import { experienceItems } from './data';

function ExperienceStrip() {
    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 py-24">
            <h2 className="mx-auto mb-12 max-w-4xl text-center text-4xl font-bold leading-tight md:text-6xl">
                We build digital operations that put you ahead of messy workflows.
            </h2>

            <div className="overflow-hidden">
                <div className="flex w-max gap-4 animate-wifix-marquee-slow">
                    {[...experienceItems, ...experienceItems].map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="flex h-36 w-60 shrink-0 items-end rounded-2xl border border-base-300 bg-base-200/70 p-5 shadow-xl"
                        >
                            <div>
                                <div className="mb-4 h-2 w-10 rounded-full bg-black" />
                                <p className="text-xl font-bold">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceStrip;
