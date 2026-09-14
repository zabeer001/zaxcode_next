import React from 'react';
import { testimonials } from './data';
import SectionHeader from './SectionHeader';

function TestimonialsSection() {
    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeader eyebrow="What clients say" title="Less like a handoff, more like a real technology partner." />

                <div className="grid gap-5 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-white p-7 text-black">
                            <div className="mb-8 text-5xl leading-none text-black">“</div>
                            <p className="min-h-32 text-lg leading-8 text-black/75">{testimonial.quote}</p>
                            <div className="mt-8 border-t border-white/10 pt-5">
                                <div className="font-bold">{testimonial.name}</div>
                                <div className="text-sm text-black/50">{testimonial.role}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;
