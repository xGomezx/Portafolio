import React from 'react'
import { ProjectCard } from '../Components/ProjectCard'

export const Projects = () => {
  return (
    <div className='w-screen'>

      <div className='flex flex-col'>
          <h1 className=' text-white text-5xl font-bold flex justify-center'>Best/  <p className='text-emerald-500'>Projects</p></h1>
          <span className='w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-4xl'></span>
      </div>

      <div className='w-full flex justify-center mt-10 gap-10 px-10'>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
      </div>

   

    </div>

  )
}
