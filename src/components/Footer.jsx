import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, link: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, link: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, link: 'mailto:hello@yourname.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Portfolio
          </div>
          <p className="text-gray-400 mb-6">
            © 2024 Your Name. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;