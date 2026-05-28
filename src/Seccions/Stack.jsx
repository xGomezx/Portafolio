import React from 'react'
import { StackCard } from './../Components/StackCard'
import {
  SiJavascript, SiReact, SiNodedotjs,
  SiTailwindcss, SiMysql, SiDocker,
  SiGit, SiMongodb
} from 'react-icons/si'

const techs = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React',      icon: SiReact },
  { name: 'Node.js',    icon: SiNodedotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
   { name: 'MySQL',        icon: SiMysql },
  { name: 'Git',        icon: SiGit },
  { name: 'MongoDB',    icon: SiMongodb },
]

export const Stack = ({ className, id }) => {
  return (
    <section id={id} className={className}>
      <div className='w-full px-4 sm:px-8 md:px-16 py-16'>

        {/* Header */}
        <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12'>
          <div>
            <p className='text-emerald-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2'>
              Expertise
            </p>
            <h1 className='text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase'>
              The Stack
            </h1>
          </div>
          <p className='text-gray-400 text-sm sm:text-base md:text-right max-w-xs md:max-w-sm leading-relaxed'>
            Utilizing the most cutting-edge tools to build seamless, scalable applications.
          </p>
        </div>

        {/* Separador */}
        <span className='block w-full h-px bg-white/10 mb-12'></span>

        {/* Grid de tecnologías */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {techs.map((tech) => (
            <StackCard key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>

      </div>
    </section>
  )
}