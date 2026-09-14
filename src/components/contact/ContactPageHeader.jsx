import React from 'react';

function ContactPageHeader() {
  return (
    <div className="rounded-[2rem] border border-base-300/60 bg-base-100 p-6 shadow-lg md:p-8">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Let’s build something useful</h1>
      <p className="mt-3 max-w-3xl text-base-content/70">
        Tell us about your idea, your goals, and where you need help. We usually respond within 24 hours.
      </p>
    </div>
  );
}

export default ContactPageHeader;
