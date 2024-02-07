import React from 'react'
import { team } from '../helper/data'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className='py-12'>
      <div className="max-w-screen-xl mx-auto px-12 text-center md:px-8">
        

        <div className='mt-10'>
          <div>
          {team.map((item, index) =>(
              <div key={index}>
                <div className="mx-auto">
                  <img src={item.avatar} alt={item.name} className='w-20 h-20 rounded-full mx-auto' />
                </div>
                <div className='mt-2'>
                  <h4 className='font-semibold text-2xl'>{item.name}</h4>
                  <p className='font-[500] text-blue-800'>{item.title}</p>
                  <p className='text-gray-500'>{item.desc}</p>
                  <div className='flex justify-center items-center gap-4 mt-4'>
                    <a href={item.linkedin} target='_blank' rel='noreferrer' className='text-2xl text-[#0270AD]'><FaLinkedin /></a>
                    <a href={item.github} target='_blank' rel='noreferrer' className='text-2xl text-gray-900'><FaGithub /></a>
                  </div>
                </div>
              </div>
            ))}
          
          </div>

        </div>
      </div>
    </div>
  )
}

export default About