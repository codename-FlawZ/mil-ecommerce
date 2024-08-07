import { FaUserLarge } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

  useGSAP(() => {
    gsap.to('#logocta', { opacity: 1, delay: 2.5, x: 0 })
  }, [])

  return (
	  <header className='bg-neutral-900 w-full'>
      <nav className='border-b-neutral-500 flex justify-between'>
        <div className="flex flex-start gap-3 uppercase text-xs font-bold text-white mx-1 items-center cursor-pointer pl-1 max-sm:hidden">
          <a href="#Store" className='hover:text-gray-500 active:border-blue-500 duration-200 active:text-gray-500'>Store</a>
          <a href="#Trending" className='hover:text-gray-500 active:border-blue-500 duration-200 active:text-gray-500'>Trending</a>
          <a href="#Contact" className='hover:text-gray-500 active:border-blue-500 duration-200 active:text-gray-500'>Contact</a>
        </div>
        <div className="flex items-center justify-between text-center cursor-default">
          <a id="logocta" href="#Home" className='text-xl font-bold text-white max-sm:pl-6 opacity-0 translate-x-20'>MIL</a>
        </div>
        <div className="flex flex-end items-center text-white pr-5 py-3 mx-5 gap-5">
          <FaUserLarge className="hover:text-gray-500 duration-200 cursor-pointer" />
          <BsBagFill className="hover:text-gray-500 duration-200 cursor-pointer" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar