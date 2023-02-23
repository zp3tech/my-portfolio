import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Header({ }: Props) {
  return (
    <header>
      <h1 className='red-text-500'>
        I am a header
      </h1>
      <div>
        {/* social icons */}
      </div>
    </header>
  )
}

export default Header