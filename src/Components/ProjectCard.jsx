import React from 'react'
import Img1 from '../assets/IMG1.jpg'
import { Github,ExternalLink } from 'lucide-react';

export const ProjectCard = ({ title, description, tags }) => {
  return (
    <div className="w-1/4 h-auto text-white bg-[#191919]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden  hover:border-[#00ff88] transition-all duration-500 transform hover:-translate-y-2">
      <div className="h-48 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
        <img
          src={Img1}
          alt="Project Image"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#00ff88] transition">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="text-[10px] bg-white/10 px-2 py-1 rounded text-[#00ff88]">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-sm font-semibold hover:underline flex items-center gap-1">
            Code <Github size={14} />
          </a>
          <a href="#" className="text-sm text-[#00ff88] font-semibold hover:underline flex items-center gap-1">
            Live Demo <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
