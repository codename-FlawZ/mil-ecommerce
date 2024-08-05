import { FaUserLarge } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";

const Navbar = () => {
  return (
	  <header className='bg-neutral-900'>
      <nav className='border-b-neutral-500 flex justify-between'>
        <div className="flex flex-start gap-3 uppercase text-sm font-bold text-white mx-1 items-center cursor-pointer pl-1 ">
          <a href="#Store" className='hover:text-gray-500 active:border-blue-500 duration-200 active:text-gray-500'>Store</a>
          <a href="#Trending" className='hover:text-gray-500 active:border-blue-500 duration-200 active:text-gray-500'>Trending</a>
          <a href="#Contact" className='hover:text-gray-500 active:border-blue-500 duration-200 active:text-gray-500'>Contact</a>
        </div>
        <div className="flex items-center justify-between text-center cursor-default">
          <a href="#Home" className='text-xl font-bold text-white'>MIL</a>
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