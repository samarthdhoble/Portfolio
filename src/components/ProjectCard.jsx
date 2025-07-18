import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all overflow-hidden group shadow-lg">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 mb-4 text-sm">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-600 rounded text-xs tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-400 hover:text-white transition-colors text-sm"
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
