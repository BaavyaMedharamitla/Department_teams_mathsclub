import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Code className="h-6 w-6 text-primary-500 mr-2" />
            <span className="font-display text-xl font-bold">Baavya Medharamitla</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Baavya Medharamitla. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm flex items-center">
             
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;