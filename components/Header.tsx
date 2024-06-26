import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className="border-b boder-gray-200 py-4 px-6 flex items-center justify-center">
    <a href="https://assuva.com.tr/">
    <Image src="/assuva-logo.png" alt="Assuva Logo" className="h-16" 
    width={70}
    height={70} />
    </a>
  </nav>
  )
}

export default Header