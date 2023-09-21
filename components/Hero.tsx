import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image"

type Props = {}

function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Insert phrase or quote on Hero.tsx",
      "Or perhaps a testimonial?",
      "Maybe a third quote here",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className='h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image src="logo.svg" height={250} width={250} alt={'Beyond the Box logo'} priority={true} />

      <div>
        <h2 className="text-sm uppercase text-white pb-6 tracking-[10px]">Morgan Bettis-Pahl</h2>
        <h1 className="font-serif text-cyan-300">
          <span>{text}</span>
          <Cursor cursorColor="white" />
        </h1>

        <div>
          <button className='heroButton'>About</button>
          <button className='heroButton'>Experience</button>
          <button className='heroButton'>Skills</button>
          <button className='heroButton'>Projects</button>
        </div>
      </div>
    </div>
  )
}

export default Hero