import React from 'react'
import Link from 'next/link'


const NavButton = ({x, y, label, link, icon, newTab}) => {
  return (
    <div className='absolute cursor-pointer z-50'
         style={{transform: `translate(${x}, ${y})`}}
    >
        <Link href={link} className='text-foreground rounded-full flex items-center justify-center ' aria-label={label}>
        
        </Link>
    </div>
  )
}

export default NavButton