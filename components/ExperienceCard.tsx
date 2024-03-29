import { motion } from 'framer-motion'
import React from 'react'
import Image from "next/image"

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0, }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
          height={500}
          width={500}
          src={"/exp1.jpg"}
          alt={"first experience logo"}
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Position of experience 1</h4>
        <p className='font-bold text-2xl mt-1'>Experience 1 employer name</p>
        <div className='flex space-x-2 my-2'>
          {/* tech used */}
          <Image
            className='h-10 w-10 rounded-full'
            height={10}
            width={10}
            src={"logo.svg"}
            alt='icon relating to experience 1'
          />
          <Image
            className='h-10 w-10 rounded-full'
            height={10}
            width={10}
            src={"next.svg"}
            alt='icon relating to experience 1'
          />
          <Image
            className='h-10 w-10 rounded-full'
            height={10}
            width={10}
            src={"/oldfavicon.jpg"}
            alt='icon relating to experience 1'
          />
        </div>
        <p className='uppercase py-5 text-gray-500'>Started work ... - Ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>First Summary point</li>
          <li>more Summary points</li>
          <li>more Summary points</li>
          <li>more Summary points</li>
          <li>more Summary points</li>
        </ul>

      </div>

    </article>
  )
}

export default ExperienceCard