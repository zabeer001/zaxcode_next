import React from 'react';
import ContactInfoCard from './ContactInfoCard';
import ContactQuickBookingCard from './ContactQuickBookingCard';

function ContactSidebar() {
  return (
    <aside className="space-y-5">
      <ContactInfoCard />
      <ContactQuickBookingCard />
    </aside>
  );
}

export default ContactSidebar;
