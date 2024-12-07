import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-gray-900">
            habeeb.dev
          </a>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/habeebbk"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/habeeb-rahman-063374248/"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/beeb_hub_/"
              className="text-gray-600 hover:text-gray-900"
            >
              <Instagram size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
