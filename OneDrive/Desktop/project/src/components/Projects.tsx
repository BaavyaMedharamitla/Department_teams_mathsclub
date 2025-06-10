import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  isVisible: boolean;
  delay: number;
}

const Project: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  demoLink, 
  codeLink,
  isVisible,
  delay
}) => {
  return (
    <div 
      className={`card group hover:transform hover:scale-[1.02] transition-all duration-300 fade-in-bottom ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full px-3 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> Demo
            </a>
          )}
          {codeLink && (
            <a 
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300"
            >
              <Github className="h-4 w-4 mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Isai-Live Music Application",
      description: "A responsive blog website built with React and styled with Tailwind CSS. Features dark mode and responsive design.",
      image: "src/components/img/img.png",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      demoLink: "https://baavyamedharamitla.github.io/Isai",
      codeLink: "https://github.com/BaavyaMedharamitla/Isai"
    },
    {
      title: "HelpConnect",
      description: "A simple task management application with CRUD operations built with React and local storage.",
      image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "JavaScript", "Local Storage"],
      demoLink: "https://github.com/BaavyaMedharamitla/45-Days-WebDev-Internship-ApexPlanet/tree/main/Task-5_Final_Project_Optimization",
      codeLink: "https://github.com/BaavyaMedharamitla/45-Days-WebDev-Internship-ApexPlanet"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my skills and projects.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            Here are some of the projects I've worked on to demonstrate my skills and knowledge.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              isVisible={inView}
              delay={index * 150}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
          >
            <Github className="h-5 w-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;