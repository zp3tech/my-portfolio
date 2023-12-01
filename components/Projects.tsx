import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

type Props = {}

function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <Image height={100} width={100} src='logo.svg' alt='sample' />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#00ffff]/90'>
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsa debitis quas facilis, aperiam placeat sapiente dolorum cumque consectetur voluptatibus at illum. Totam laudantium, aspernatur possimus necessitatibus neque adipisci vitae.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* background stipe */}
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}

export default Projects