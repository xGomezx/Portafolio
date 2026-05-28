import React from 'react'
import Img1 from '../assets/IMG1.jpg'
import { Github, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ title, description, tags }) => {
  return (
    <div className="w-full h-auto text-white bg-[#191919]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500 transition-all duration-500 transform hover:-translate-y-2">
      
      {/* Imagen */}
      <div className="h-44 sm:h-48 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
        <img
          src={Img1}
          alt="Project Image"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 sm:p-6 flex flex-col gap-3">
        
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-[10px] sm:text-xs bg-white/10 px-2 py-1 rounded text-emerald-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center pt-2 border-t border-white/10">
          <a href="#" className="text-sm font-semibold hover:text-emerald-400 transition-colors flex items-center gap-1">
            Code <Github size={14} />
          </a>
          <a href="#" className="text-sm text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1">
            Live Demo <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </div>
  )
}