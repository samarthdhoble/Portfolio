import React from 'react';

const SkillCard = ({ skill }) => {
  const SkillIcon = skill.icon;

  return (
    <div className="bg-[#0e0e0e] p-6 rounded-2xl border border-[#1f1f1f] shadow-md hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-blue-500 rounded-lg mb-4 shadow-lg">
        <SkillIcon size={30} className="text-blue-400" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{skill.name}</h3>
      <div className="w-full bg-[#222] rounded-full h-2 mb-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-400">{skill.level}% Proficiency</span>
    </div>
  );
};

export default SkillCard;
