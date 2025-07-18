import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/samarthdhoble7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#111827] rounded-2xl p-8 w-full max-w-xl shadow-lg border border-[#1f2937]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="bg-[#1f2937] text-white p-3 rounded-md border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="bg-[#1f2937] text-white p-3 rounded-md border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="bg-[#1f2937] text-white p-3 rounded-md border border-[#374151] h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
        ></textarea>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#10b981] text-black font-semibold py-3 px-6 rounded-md hover:scale-105 transition-all duration-300"
        >
          {status === 'sending' ? 'Sending...' : 'Send'} <Send size={16} />
        </button>

        {status === 'sent' && (
          <p className="text-green-400 font-medium mt-2">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 font-medium mt-2">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
