import React from 'react'
import { ProjectCard } from '../Components/ProjectCard'

export const Projects = ({ className, id }) => {
  return (
    <section id={id} className={className}>
      <div className='w-full px-4 sm:px-8 md:px-10 py-16'>

        {/* Título */}
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold flex gap-2'>
            Best/ <span className='text-emerald-500'>Projects</span>
          </h1>
          <span className='w-24 text-start h-1 bg-emerald-500 mx-auto mt-4 rounded-full'></span>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          <ProjectCard title="Project 1" description="Description for Project 1" tags={['React', 'Tailwind CSS', 'JavaScript']} />
          <ProjectCard title="Project 2" description="Description for Project 2" tags={['React', 'Node.js']} />
          <ProjectCard title="Project 3" description="Description for Project 3" tags={['Vue.js', 'Tailwind CSS']} />
        </div>

      </div>
    </section>
  )
}