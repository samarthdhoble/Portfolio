import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons — Only show if link/github exists */}
        <div className="flex space-x-4">
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
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
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
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
