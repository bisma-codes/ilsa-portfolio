import React from 'react';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-pinterest-red mx-auto mb-6 flex items-center justify-center shadow-xl">
            <span className="text-white text-7xl font-bold font-pinterest">IN</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Where storytelling meets data<span className="block text-transparent bg-clip-text bg-pinterest-red">
          —and your brand takes off.</span>
        </h1>
        
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-pinterest-red text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View My Work
            <ArrowDown className="w-5 h-5" />
          </button>
          
          
        </div>

        
      </div>
    </section>
  );
};

export default Hero;