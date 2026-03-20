import React from 'react'
import { ProjectCard } from '../Components/ProjectCard'


export const Projects = ({ className, id }) => {
  return (
    <section id={id} className={className}>
    <div className='w-screen'>

      <div className='flex flex-col'>
          <h1 className=' text-white text-5xl font-bold flex justify-center'>Best/  <p className='text-emerald-500'>Projects</p></h1>
          <span className='w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-4xl'></span>
      </div>

      <div className='w-full flex flex-wrap justify-center mt-10 gap-10 px-10'>
          <ProjectCard title="Project 1" description="Description for Project 1" tags={['React', 'Tailwind CSS', 'JavaScript']} />
          <ProjectCard title="Project 2" description="Description for Project 2" tags={['React', 'Node.js']} />
          <ProjectCard title="Project 3" description="Description for Project 3" tags={['Vue.js', 'Tailwind CSS']} />
      </div>

   

    </div>
    </section>

  )
}
