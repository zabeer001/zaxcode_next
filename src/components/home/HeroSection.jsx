'use client';

import React, { useEffect, useRef, useState } from 'react';
import HeroWheel from './HeroWheel';

function HeroSection() {
    const lastScrollY = useRef(0);

    const [wheelRotation, setWheelRotation] = useState(0);
    const [wheelScale, setWheelScale] = useState(1);
    const [wheelMoveProgress, setWheelMoveProgress] = useState(0);
    const [wheelScrolled, setWheelScrolled] = useState(false);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            // After small scroll, wheel turns red and goes behind content
            setWheelScrolled(currentScrollY > 40);

            if (Math.abs(delta) > 1) {
                setWheelRotation((rotation) => rotation + delta * 0.22);

                // Wheel expands while scrolling
                setWheelScale(Math.min(2.75, 1 + currentScrollY / 520));

                // Wheel moves from right side to middle, then stops
                setWheelMoveProgress(Math.min(1, currentScrollY / 650));

                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="relative -mx-4 border-b border-base-300 bg-base-100 px-4 pb-0 pt-32 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 lg:pt-44">
            <div className="mx-auto max-w-7xl overflow-visible">
                <div className="relative flex flex-col items-center gap-16 overflow-visible lg:flex-row lg:items-center lg:justify-between">
                    {/* Left Content */}
                    <div className="relative z-20 w-full max-w-4xl lg:w-[58%]">
                        <h1 className="wifix-hero-line max-w-4xl text-5xl font-medium leading-[1.08] text-base-content sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                            Web Development, SaaS, and Business Systems Built for Growth
                        </h1>

                        <p className="wifix-hero-line wifix-hero-line-delay-1 mt-8 max-w-3xl text-xl leading-8 text-base-content/80">
                            Zaxcode is a Bangladesh-based web development company creating fast websites, SaaS
                            products, custom ERP platforms, and business automation for ambitious teams worldwide.
                        </p>

                        <div className="wifix-hero-line wifix-hero-line-delay-2 mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                            <a
                                href="#contact"
                                className="btn rounded-full border-0 bg-base-content px-8 text-base-100 hover:bg-base-content/90"
                            >
                                Start a Project
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-base-content text-xl font-black text-error">
                                        C
                                    </span>

                                    <div>
                                        <div className="text-xs font-bold">Built with care</div>
                                        <div className="text-lg leading-none text-error">★★★★★</div>
                                    </div>
                                </div>

                                <div className="flex -space-x-3">
                                    {['bg-blue-200', 'bg-slate-200', 'bg-orange-200'].map((color, index) => (
                                        <span
                                            key={color}
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-base-100 text-xs font-bold text-base-content ${color}`}
                                        >
                                            {index + 1}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <HeroWheel
                        wheelMoveProgress={wheelMoveProgress}
                        wheelRotation={wheelRotation}
                        wheelScale={wheelScale}
                        wheelScrolled={wheelScrolled}
                    />
                </div>
            </div>

            {/* Optional marquee */}
            {/* <MarqueeStrip /> */}
        </header>
    );
}

export default HeroSection;
