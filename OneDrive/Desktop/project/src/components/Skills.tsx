import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Monitor } from 'lucide-react';

interface SkillItemProps {
  name: string;
  percentage: number;
  isVisible: boolean;
  delay: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, percentage, isVisible, delay }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className={`skill-progress-bar ${isVisible ? 'dark:skill-progress-bar-dark' : ''}`}>
        <div 
          className={`skill-progress-fill ${isVisible ? 'animate' : ''}`} 
          style={{ 
            width: `${percentage}%`,
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const frontendSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React.js', percentage: 75 },
    { name: 'Tailwind CSS', percentage: 80 },
  ];

  const backendSkills = [
    { name: 'PHP', percentage: 60 },
    { name: 'Python', percentage: 40 },
    { name: 'C', percentage: 40 },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto">
            Here are my technical skills and proficiency levels in various technologies.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`fade-in-bottom ${inView ? 'is-visible' : ''}`}>
            <div className="flex items-center mb-8">
              <Monitor className="h-6 w-6 text-primary-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontend Development
              </h3>
            </div>
            
            <div>
              {frontendSkills.map((skill, index) => (
                <SkillItem 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  isVisible={inView}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          <div className={`fade-in-bottom ${inView ? 'is-visible' : ''} delay-150`}>
            <div className="flex items-center mb-8">
              <Server className="h-6 w-6 text-primary-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Backend & Other Skills
              </h3>
            </div>
            
            <div>
              {backendSkills.map((skill, index) => (
                <SkillItem 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  isVisible={inView}
                  delay={index * 100 + 500} // Additional delay for second column
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies I Work With
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'HTML5', icon: 'html-icon' },
              { name: 'CSS3', icon: 'css-icon' },
              { name: 'JavaScript', icon: 'js-icon' },
              { name: 'React', icon: 'react-icon' },
              { name: 'Tailwind CSS', icon: 'tailwind-icon' },
              { name: 'PHP', icon: 'php-icon' },
              { name: 'Python', icon: 'python-icon' },
              { name: 'Git', icon: 'git-icon' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className={`card p-6 flex flex-col items-center justify-center fade-in-bottom ${inView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 100 + 1000}ms` }}
              >
                <div className="h-12 w-12 flex items-center justify-center mb-4 text-primary-500">
                  <Code className="h-10 w-10" />
                </div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;