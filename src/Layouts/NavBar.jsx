import React, { useState } from 'react'
import Avatar from '../assets/Avatar-removebg-preview.png'
import CV from '../assets/CV-JuanJoseGomez.pdf'
import { Download, Menu, X } from 'lucide-react';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='w-full flex justify-center'>
      <nav className='w-11/12 md:w-5/6 fixed top-4 z-50 h-14 md:h-16 rounded-2xl flex justify-between items-center px-4 md:px-10 bg-black/40 backdrop-blur-sm border-b border-white/10'>

        {/* Logo / iniciales — visible solo en mobile */}
        <span className='text-emerald-500 font-bold text-lg md:hidden'>JJG</span>

        {/* Links — ocultos en mobile, visibles en desktop */}
        <ul className='hidden md:flex gap-20 text-white font-bold'>
          <li className='hover:text-emerald-500 transition-colors'>
            <a href="#about">About</a>
          </li>
          <li className='hover:text-emerald-500 transition-colors'>
            <a href="#projects">Projects</a>
          </li>
          <li className='hover:text-emerald-500 transition-colors'>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Lado derecho */}
        <div className='flex items-center gap-3'>
          {/* Botón CV compacto en mobile, completo en desktop */}
          <a href={CV} download="CV-JuanJoseGomez.pdf" className='inline-block'>
            <button
              type="button"
              className='cursor-pointer bg-white text-black px-3 py-2 md:px-4 rounded-lg font-bold hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-2'
            >
              <span className='hidden md:inline'>Download CV</span>
              <span className='md:hidden text-sm'>CV</span>
              <Download size={16} className='md:w-5 md:h-5' />
            </button>
          </a>

          {/* Hamburguesa — solo en mobile */}
          <button
            className='md:hidden text-white p-1'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Drawer mobile */}
      {/* Drawer mobile */}
      {menuOpen && (
        <div className='fixed top-20 left-1/2 -translate-x-1/2 w-11/12 z-40 bg-black/90 backdrop-blur-sm rounded-2xl p-5 md:hidden border border-white/10'>
          <ul className='flex flex-col gap-1 text-white font-bold'>
            <li>
              <a
                href="#about"
                className="block px-3 py-3 rounded-lg hover:bg-white/10 hover:text-emerald-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-3 py-3 rounded-lg hover:bg-white/10 hover:text-emerald-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-3 py-3 rounded-lg hover:bg-white/10 hover:text-emerald-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul >
        </div >
      )}
    </header >
  )
}