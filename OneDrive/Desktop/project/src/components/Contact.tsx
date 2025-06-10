import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.send(
    'service_bev3gmq',
    'template_tuqfo9c',
    formData,
    'jGwZ0CDXeQroNMwiw'
  )
  .then(() => {
    setIsSubmitting(false);
    setSubmitMessage('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitMessage(''), 5000);
  })
  .catch(() => {
    setIsSubmitting(false);
    setSubmitMessage('Failed to send message. Please try again.');
    setTimeout(() => setSubmitMessage(''), 5000);
  });
};


  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Feel free to contact me for any questions, collaborations, or opportunities.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <div className={`fade-in-bottom ${inView ? 'is-visible' : ''}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <a 
                    href="mailto:baavyamedharamitla@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    baavyamedharamitla@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 mr-4">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 7305304543
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me on social media
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/BaavyaMedharamitla" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-primary-500 dark:hover:bg-primary-500 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white rounded-full p-3 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
              href="https://www.linkedin.com/in/baavya-medharamitla-42a243338/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-primary-500 dark:hover:bg-primary-500 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white rounded-full p-3 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
          
          <div className={`fade-in-bottom ${inView ? 'is-visible' : ''} delay-150`}>
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400 rounded-lg">
                  {submitMessage}
                </div>
              )}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input" placeholder="Abc" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input" placeholder="abc@example.com" />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="input" placeholder="Project Inquiry" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="input resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full flex items-center justify-center">
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Send To Mail
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
