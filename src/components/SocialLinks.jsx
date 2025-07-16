import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const SocialLinks = ({ variant = 'default' }) => {
  const socialLinks = [
    { icon: Github, link: 'https://github.com/samarthdhoble', label: 'GitHub' },
    { icon: Linkedin, link: 'https://linkedin.com/in/samarthdhoble', label: 'LinkedIn' },
    { icon: Code, link: 'https://twitter.com/samarthdhoble', label: 'Twitter' },
  ];

  const baseClasses =
    'p-3 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2';
    
  const variantClasses = {
    default: 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    footer: 'text-gray-400 hover:text-white focus:ring-white',
    contact: 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    hero: 'bg-white text-blue-600 shadow hover:bg-blue-600 hover:text-white focus:ring-blue-500', // ✅ New bright, visible style
  };

  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map(({ icon: Icon, link, label }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${baseClasses} ${variantClasses[variant]} hover:scale-110`}
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
