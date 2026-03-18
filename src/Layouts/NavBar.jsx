import React from 'react'
import Avatar from '../assets/Avatar-removebg-preview.png'

export const NavBar = () => {
  return (
    <header className='w-full flex justify-center '>
        <nav className='w-5/6 fixed top-4 z-50 h-16 rounded-2xl flex justify-between items-center px-10 bg-black/40 backdrop-blur-sm border-b border-white/10'>
            <ul className='flex gap-20 text-white font-bold '>
                <li className='hover:text-emerald-500 transition-colors'><a href="#about">About</a></li>
                <li className='hover:text-emerald-500 transition-colors'><a href="#projects">Projects</a></li>
                <li className='hover:text-emerald-500 transition-colors'><a href="#contact">Contact</a></li>
            </ul>
           
            <a href={Avatar} download="AvatarExample">
                 <button href="../assets/Avatar-removebg-preview.png" type="button" className='cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-300 transition-colors'>
                    Download CV
                </button>
            </a>
            
        </nav>
    </header>
  )
}
