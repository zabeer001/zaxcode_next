import React from 'react';

function AboutSection() {
    return (
        <section id="about" className="relative left-1/2 w-screen -translate-x-1/2 bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                    <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                        We solve business problems with technology that keeps working.
                    </h2>
                </div>
                <div className="space-y-5 text-lg leading-8 text-white/65">
                    <p>
                        Zaxcode does not just deliver screens. We understand the goal, map the experience, build
                        maintainable software, and make every interaction earn its place.
                    </p>
                    <p>
                        From high-converting websites to SaaS dashboards, portals, APIs, and automation, every decision
                        is made to create meaningful business value.
                    </p>
                    <p className="font-bold text-white">No fluff. No guesswork. Just systems that run.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
