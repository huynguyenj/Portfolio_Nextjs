'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
type ItemObject = {
  name:string,
  section:string;
}
const navItem: ItemObject[] =[
 {name:"Skills",section:"#skills"},
 {name:"Projects",section:"#projects"},
 {name:"Contact",section:"#contact"},

]
export default function Navbar() {
  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if(currentScrollY > lastScrollY && currentScrollY > 100){
        setShow(false);
      }else{
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll",handleScroll);
  },[lastScrollY])
  return (
    <nav className={`fixed top-0 w-full h-[15vh] px-5 flex items-center justify-between bg-black/100   z-50 transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='w-[40%] flex gap-3 items-center'>
        <Image src='/assets/technologyLogo.png' width={50} height={50} alt='Logo website'/>
      </div>
      <ul className='flex gap-5 w-[60%] justify-end'>
           {navItem.map((item,index) => (
              <li className='w-fit py-3 px-5 h-fit hover:bg-white hover:text-black cursor-pointer duration-500 rounded-2xl' key={index}>
                <a className='text-[1.2rem]' href={item.section}>{item.name}</a>
              </li>
            ))}
      </ul>
    </nav>
  )
}
