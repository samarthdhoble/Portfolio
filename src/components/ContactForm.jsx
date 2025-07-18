import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

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
    <div className="bg-[#0d0d0d] rounded-2xl p-10 w-full max-w-xl mx-auto border border-[#1e1e1e] shadow-[0_0_20px_#0ea5e966]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Get in Touch</h2>
        <p className="text-sm text-gray-400 mb-4">Have a project in mind or just want to say hi? Let’s talk.</p>

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="bg-[#1a1a1a] text-white p-4 rounded-md border border-[#333] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="bg-[#1a1a1a] text-white p-4 rounded-md border border-[#333] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <textarea
          name="message"
          placeholder="Your message..."
          required
          value={formData.message}
          onChange={handleChange}
          className="bg-[#1a1a1a] text-white p-4 rounded-md border border-[#333] h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        ></textarea>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} />
        </button>

        {status === 'sent' && (
          <p className="text-green-500 font-medium">✅ Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 font-medium">⚠️ Something went wrong. Try again later.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
