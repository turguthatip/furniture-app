import React from 'react'
import Image from 'next-export-optimize-images/image'

const Header = () => {
  return (
    <nav className="border-b border-gray-200 py-4 px-4 md:px-8 flex items-center justify-start">
    <a href="/">
    <Image src="/assuva-logo.png" alt="Assuva Logo" className="h-24"
    width={105}
    height={105} />
    </a>
  </nav>
  )
}

export default Header