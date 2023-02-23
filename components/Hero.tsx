import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image"

type Props = {}

function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Insert phrase or quote using Hero.tsx",
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
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

    </div>
  )
}

export default Hero