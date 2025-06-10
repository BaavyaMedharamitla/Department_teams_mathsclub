import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, User, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Here you'll find more information about me, my current studies, and what I'm passionate about.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className={`fade-in-bottom ${inView ? 'is-visible' : ''}`}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate Electronics and Communication Engineering student with a strong interest in web development and programming.
              </p>
              <p>
                Currently in my second year at Panimalar Engineering College, I am continuously expanding my knowledge in both my core field and software development skills.
              </p>
              <p>
                I enjoy building web applications using modern technologies and frameworks, with a focus on creating responsive and user-friendly interfaces.
              </p>
              <p>
                My goal is to combine my technical knowledge in electronics with my programming skills to create innovative solutions that bridge hardware and software.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">Baavya Medharamitla</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">Chennai, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">B.E. ECE Student</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700 dark:text-gray-300">2nd Year</span>
              </div>
            </div>
          </div>

          <div className={`fade-in-bottom ${inView ? 'is-visible' : ''} delay-150`}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Education & Interests
            </h3>
            
            <div className="mb-8">
              <div className="flex items-start mb-2">
                <div className="bg-primary-500 rounded-full p-2 mr-4 mt-1">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    B.E. in Electronics and Communication Engineering
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Panimalar Engineering College, Chennai
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    2027' batch - Present 3rd year
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              My Interests
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Besides my academic pursuits, I'm passionate about:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Web Development and UI/UX Design</li>
                <li>Frontend Frameworks (React.js)</li>
                <li>Mobile Responsive Design</li>
                <li>Learning New Technologies</li>
                <li>Problem Solving and Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;