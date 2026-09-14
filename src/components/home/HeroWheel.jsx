import React from 'react';

function HeroWheel({ wheelMoveProgress, wheelRotation, wheelScale, wheelScrolled }) {
    return (
        <div
            className={`wifix-hero-wheel-enter pointer-events-none relative flex w-full justify-center overflow-visible lg:w-[42%] lg:justify-end ${
                wheelScrolled ? 'z-0 opacity-100' : 'z-10 opacity-100'
            }`}
        >
            <div className="hero-wheel-stage relative flex h-[34rem] w-full items-center justify-center overflow-visible lg:h-[40rem]">
                <div
                    className={`ship-wheel origin-center transition-[color,opacity,transform] duration-300 ease-out ${
                        wheelScrolled ? 'ship-wheel-scrolled' : 'text-base-content'
                    }`}
                    style={{
                        transform: `
                            translateX(${-wheelMoveProgress * 42}vw)
                            scale(${wheelScale})
                            rotate(${wheelRotation}deg)
                        `,
                    }}
                    aria-label="Rotating Zaxcode logo"
                    role="img"
                >
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 349 293"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <defs>
                            <linearGradient id="hero-logo-dark" x1="77" y1="38" x2="278" y2="258">
                                <stop stopColor="#171c27" />
                                <stop offset="0.55" stopColor="#05070c" />
                                <stop offset="1" stopColor="#151923" />
                            </linearGradient>
                            <linearGradient id="hero-logo-blue" x1="104" y1="126" x2="150" y2="196">
                                <stop stopColor="#0879ff" />
                                <stop offset="1" stopColor="#0757f5" />
                            </linearGradient>
                        </defs>

                        <path
                            d="M67.5 73.8 100.2 40.8h162.9L158.9 145.3c-2.6-8.5-20.4-26.8-29.7-23.2-3.7 1.4-6.2 4.7-7.6 8.2l43.8-56.5H67.5Z"
                            fill="url(#hero-logo-dark)"
                            stroke="#f4f6fa"
                            strokeWidth="1.2"
                            strokeLinejoin="round"
                        />

                        <path
                            d="m119.2 122.3-35.8 35.8 50.5 48.8 32.4-32.3-38.7-38.8c-5.8-5.8-7.5-10.3-8.4-13.5Z"
                            fill="url(#hero-logo-blue)"
                            stroke="#f4f6fa"
                            strokeWidth="1.2"
                            strokeLinejoin="round"
                        />

                        <path
                            d="m244.2 98.7-31.8 31.8 20.4 19.7L120 259.4h159.8l32.7-32.9h-93.8l80.5-76.3-55-51.5Z"
                            fill="url(#hero-logo-dark)"
                            stroke="#f4f6fa"
                            strokeWidth="1.2"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HeroWheel;
