import React from 'react'
import Avatar from '../assets/Avatar-removebg-preview.png'
import { Download } from 'lucide-react';

export const NavBar = () => {
  return (
    <header className='w-full flex justify-center'>
        <nav className='w-5/6 fixed top-4 z-50 h-16 rounded-2xl flex justify-between items-center px-10 bg-black/40 backdrop-blur-sm border-b border-white/10'>
            <ul className='flex gap-20 text-white font-bold'>
                {/* Asegúrate de que los ID coincidan con tus secciones */}
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
           
            {/* El botón de descarga ahora apunta al archivo correctamente */}
            <a href={Avatar} download="Mi_CV.png" className='inline-block'>
                <button type="button" className='cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-2'>
                    Download CV
                    <Download size={20} />
                </button>
            </a>
        </nav>
    </header>
  )
}