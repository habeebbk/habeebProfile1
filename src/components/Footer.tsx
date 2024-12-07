import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'; // Import Instagram icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Habeeb.dev</h3>
            <p className="text-gray-400">Building digital experiences that matter.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/habeebbk" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/habeeb-rahman-063374248/" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/beeb_hub_/" className="hover:text-blue-400 transition-colors">
              <Instagram size={24} /> {/* Change Twitter to Instagram */}
            </a>
            <a href="habeebbk950@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} habeeb.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
