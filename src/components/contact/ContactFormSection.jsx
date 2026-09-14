'use client';

import React, { useState } from 'react';
import { subjectOptions } from './data';

function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: subjectOptions[0],
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-base-300/60 bg-base-100 p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-bold">Message Form</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(event) => handleChange('fullName', event.target.value)}
          className="input input-bordered w-full rounded-xl"
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={(event) => handleChange('email', event.target.value)}
          className="input input-bordered w-full rounded-xl"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(event) => handleChange('phone', event.target.value)}
          className="input input-bordered w-full rounded-xl"
        />
        <select
          value={formData.subject}
          onChange={(event) => handleChange('subject', event.target.value)}
          className="select select-bordered w-full rounded-xl"
        >
          {subjectOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <textarea
        required
        rows={6}
        value={formData.message}
        onChange={(event) => handleChange('message', event.target.value)}
        placeholder="Write your message..."
        className="textarea textarea-bordered mt-4 w-full rounded-xl"
      />

      <button type="submit" className="btn btn-primary mt-6 rounded-xl px-8">
        Send Message
      </button>

      {isSubmitted && (
        <div className="mt-4 rounded-xl border border-success/35 bg-success/10 px-4 py-3 text-sm text-success">
          Message submitted locally. Next step: connect this form to backend API/email service.
        </div>
      )}
    </form>
  );
}

export default ContactFormSection;
