import React from 'react';
import { contactInfo } from './data';

function ContactInfoCard() {
  return (
    <div className="rounded-2xl border border-base-300/60 bg-base-100 p-5 shadow-sm">
      <h3 className="text-xl font-bold">Contact Information</h3>
      <div className="mt-3 space-y-3 text-sm text-base-content/80">
        <p>
          <span className="font-semibold">Email:</span> {contactInfo.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {contactInfo.phone}
        </p>
        <p>
          <span className="font-semibold">Office:</span> {contactInfo.office}
        </p>
      </div>
    </div>
  );
}

export default ContactInfoCard;
