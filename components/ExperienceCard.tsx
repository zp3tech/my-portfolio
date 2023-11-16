import { motion } from 'framer-motion'
import React from 'react'
import Image from "next/image"

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
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
        <p>Experience 1 employer name</p>
        <div>
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p>Started work ... - Ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
      </ul>
      
      </div>

    </article>
  )
}

export default ExperienceCard