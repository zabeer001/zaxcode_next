import React from 'react';
import Link from 'next/link';

function ContactQuickBookingCard() {
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5">
      <h3 className="text-xl font-bold text-primary">Have a project in mind?</h3>
      <p className="mt-2 text-sm text-base-content/80">
        Share a short brief and we will help you identify the best way to move it forward.
      </p>
      <Link href="/#services" className="btn btn-outline mt-4 rounded-xl">
        Explore Services
      </Link>
    </div>
  );
}

export default ContactQuickBookingCard;
