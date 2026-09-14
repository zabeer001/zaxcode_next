'use client';

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { faqs } from './data';
import SectionHeader from './SectionHeader';

function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="pb-24">
            <SectionHeader
                eyebrow="FAQ"
                title="Questions people ask before starting a project."
                text="A few quick answers before we talk through your idea."
            />

            <div className="space-y-3">
                {faqs.map(([question, answer], index) => {
                    const isOpen = openIndex === index;
                    const answerId = `home-faq-answer-${index}`;

                    return (
                        <article key={question} className="overflow-hidden rounded-2xl border border-base-300 bg-base-200/55">
                            <h3>
                                <button
                                    type="button"
                                    aria-controls={answerId}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-xl font-bold transition-colors hover:bg-base-content/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-base-content sm:px-6"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    <span>{question}</span>
                                    <ChevronDown
                                        aria-hidden="true"
                                        className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                        strokeWidth={2.2}
                                    />
                                </button>
                            </h3>
                            <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="min-h-0 overflow-hidden">
                                    <div
                                        id={answerId}
                                        className="px-5 pb-6 leading-8 text-base-content/75 sm:px-6"
                                    >
                                        <p>{answer}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default FaqSection;
