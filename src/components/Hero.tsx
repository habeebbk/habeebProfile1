import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm Habeeb Rahman
              <span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full-stack developer specializing in building exceptional digital
              experiences. Currently focused on building accessible,
              human-centered products.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/me.png"
              alt="Profile"
              className="rounded-full w-72 h-72 object-cover mx-auto border-8 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
