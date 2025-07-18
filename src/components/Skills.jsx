import React from 'react';
import { Monitor, Palette, Smartphone, Code } from 'lucide-react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = [
    { name: "Frontend Development", icon: Monitor, level: 95 },
    { name: "UI/UX Design", icon: Palette, level: 59 },
    { name: "Backend Development", icon: Code, level: 89 },
    { name: "Mobile Friendly Design", icon: Smartphone, level: 88 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100" data-aos="fade-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Services</h2>
          <p className="text-xl text-gray-600">What I bring to your next project</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
