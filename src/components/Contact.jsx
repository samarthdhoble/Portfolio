import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600">Ready to bring your project to life? Get in touch!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks variant="contact" />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;