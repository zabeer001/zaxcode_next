import React from 'react';

function ContactSection() {
    return (
        <section id="contact" className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-t border-white/10 bg-black px-4 py-24 text-center text-white sm:px-6 lg:px-8">
            <div className="absolute inset-0 wifix-panel-grid opacity-35" />
            <div className="relative mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                    Have an idea worth building?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
                    Tell us what you want to create, improve, or simplify. Zaxcode will help turn it into a clear
                    plan and a digital product people enjoy using.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
                    <a href="/contact" className="btn btn-lg w-full rounded-full border-0 bg-white px-8 text-black hover:bg-white/90 md:w-auto">
                        Start a conversation
                    </a>
                    <a href="mailto:zabeer@zaxcode.com" className="btn btn-outline btn-lg w-full rounded-full border-white/50 px-8 text-white hover:bg-white hover:text-black md:w-auto">
                        zabeer@zaxcode.com
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
