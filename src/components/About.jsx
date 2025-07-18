import React from 'react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Projects Built', color: 'text-blue-500' },
    { number: '100+', label: 'DSA Problems Solved', color: 'text-red-500' },
    { number: '3+', label: 'Years of Learning', color: 'text-yellow-500' },
    { number: '∞', label: 'Hunger for Growth', color: 'text-green-500' }
  ];

  const technologies = [ 'Python','React', 'JavaScript', 'Node.js', 'Express.js' , 'MongoDB', 'MySQL' , 'Tailwind CSS', 'Java' ,'C++', 'Git' , 'GitHub' , 'RestAPIs', 'EJS', 'Vite'];

  return (
    <section data-aos="fade-up" id="about" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Who Am I?</h2>
          <p className="text-lg text-gray-600 mt-4 font-medium">
            Passion-driven coder, growth-oriented learner, and full-stack builder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I'm <span className="font-semibold text-blue-600">Samarth Dhoble</span>, a Computer Engineering student from KJ College, Pune.
              My interest lies in building powerful full-stack apps and solving real-world problems with tech.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I’m currently sharpening my DSA and dev skills, building apps like <span className="font-semibold text-green-600">WanderLust</span>,
              and competing in coding contests. I believe in **learning by building**, and spend most of my time coding, exploring tech, and improving bit by bit.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-gray-800 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-xl shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-extrabold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
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
