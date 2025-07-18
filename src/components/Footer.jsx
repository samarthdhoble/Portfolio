import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, link: 'https://github.com/samarthdhoble', label: 'GitHub' },
    { icon: Linkedin, link: 'https://linkedin.com/in/samarthdhoble', label: 'LinkedIn' },
    { icon: Mail, link: 'mailto:samarthdhoble2005@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-[#0f0f11] text-gray-200 py-10 border-t border-gray-700" >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold tracking-wide mb-3">Samarth Dhoble</h2>
        <p className="text-sm text-gray-400 mb-6">
          © {new Date().getFullYear()} Samarth Dhoble. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-200"
              aria-label={social.label}
            >
              <social.icon size={22} strokeWidth={1.6} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
