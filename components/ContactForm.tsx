'use client';

import { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // In a real implementation, this would call an API endpoint
    // For now, we'll simulate a submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold tracking-tight text-brand-black mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-border-color focus:border-brand-black focus:outline-none transition-minimal bg-white text-brand-black text-base"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold tracking-tight text-brand-black mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-border-color focus:border-brand-black focus:outline-none transition-minimal bg-white text-brand-black text-base"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-xs font-semibold tracking-tight text-brand-black mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-border-color focus:border-brand-black focus:outline-none transition-minimal bg-white text-brand-black text-base"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold tracking-tight text-brand-black mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-border-color focus:border-brand-black focus:outline-none transition-minimal bg-white text-brand-black resize-none text-base"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-brand-gray border border-border-color text-brand-black text-sm">
          Thank you for your message. I'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-900 text-sm">
          Something went wrong. Please try again or email directly.
        </div>
      )}

      <div className="text-left">
        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </PrimaryButton>
      </div>
    </form>
  );
}
