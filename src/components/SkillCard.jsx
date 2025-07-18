import React from 'react';

const SkillCard = ({ skill }) => {
  const SkillIcon = skill.icon;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1" >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 shadow-md">
        <SkillIcon size={32} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-600">{skill.level}% Proficiency</span>
    </div>
  );
};

export default SkillCard;
