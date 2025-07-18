import React from 'react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Projects Built', color: 'text-blue-600' },
    { number: '100+', label: 'DSA Problems Solved', color: 'text-purple-600' },
    { number: '3+', label: 'Years of Learning', color: 'text-green-600' },
    { number: '∞', label: 'Passion for Growth', color: 'text-orange-600' }
  ];

  const technologies = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Java'];

  return (
    <section data-aos="fade-up" id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600">
            Turning curiosity into code — building my future one project at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm Samarth Dhoble, a passionate Computer Engineering student at KJ College of Engineering, Pune.
              I love building full-stack web applications and learning how things work under the hood. From frontend design 
              to backend logic, I enjoy every part of the development process.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I’m currently focused on improving my DSA skills, participating in coding competitions, and working on projects like 
              ShareMeal — a platform to donate food and spread kindness. I'm a firm believer in learning by building, and 
              I spend every possible hour improving my skills, exploring new tech, or helping peers.
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
