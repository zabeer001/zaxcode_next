import React from 'react';
import { Atom, Braces, Cloud, Code2, Headphones, Palette, PanelsTopLeft, Workflow } from 'lucide-react';
import { marqueeItems } from './data';

const marqueeIcons = {
    LARAVEL: Code2,
    REACT: Atom,
    SAAS: PanelsTopLeft,
    'UI/UX': Palette,
    CLOUD: Cloud,
    AUTOMATION: Workflow,
    APIs: Braces,
    SUPPORT: Headphones,
};

function MarqueeStrip() {
    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y-1 border-white bg-black py-12 text-white">
            <div className="flex whitespace-nowrap">
                <div className="animate-wifix-marquee flex shrink-0 items-center gap-16 pr-16 text-4xl font-bold text-white/35">
                    {[...marqueeItems, ...marqueeItems].map((item, index) => {
                        const Icon = marqueeIcons[item];

                        return (
                            <span key={`${item}-${index}`} className="flex items-center gap-16">
                                <span className="flex items-center gap-4">
                                    <Icon aria-hidden="true" className="h-9 w-9 text-white/70" strokeWidth={1.6} />
                                    {item}
                                </span>
                                <span className="text-white">/</span>
                            </span>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default MarqueeStrip;
