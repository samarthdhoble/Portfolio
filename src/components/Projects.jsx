import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
const projects = [
  {
    id: 1,
    title: "Wanderlust (AirBnb Clone)",
    description: "A full-stack travel campground app with authentication, image upload, and CRUD features.",
    image: "https://plus.unsplash.com/premium_photo-1683649964203-baf13fa852e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your own image if needed
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
    link: "https://wanderlust-1fu6.onrender.com",
    github: "https://github.com/samarthdhoble/wanderlust"
  },
  {
    id: 2,
    title: "Amazon Clone (Frontend Only)",
    description: "A static Amazon homepage clone built using HTML, CSS, and vanilla JavaScript. Includes functional cart UI design.",
    image: "https://plus.unsplash.com/premium_photo-1661434758776-faf568a8a34f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/samarthdhoble/javascript-amazon-project"
  },
  {
    id: 3,
    title: "React WebApp",
    description: "A modern, responsive React-based web app with clean UI and reusable components.",
    image: "https://images.unsplash.com/photo-1705077031869-51b60754302a?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/samarthdhoble/React-WeatherApp"
  }
];


  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">A showcase of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;