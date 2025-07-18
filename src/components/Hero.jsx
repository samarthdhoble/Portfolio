import React from 'react';
import { Code, ChevronDown } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#e0f2ff] via-white to-[#f3e8ff] overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#93c5fd_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#c084fc_0%,transparent_40%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl"
        >
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-inner">
            <Code size={48} className="text-blue-600" />
          </div>
        </motion.div>

        {/* Name + Typing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Samarth Dhoble
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <Typewriter
              words={[
                'Crafting beautiful websites 💻',
                'Turning code into experiences 🌟',
                'Building impactful products 🚀',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>

          <a
            href="/samarth_dhoble.pdf"
            download
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 text-center"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SocialLinks variant="hero" />
        </motion.div>
      </div>

      {/* Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
