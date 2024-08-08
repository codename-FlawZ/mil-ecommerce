import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { FaCartPlus } from "react-icons/fa";


const Trending = () => {

  useGSAP(() => {
    gsap.to('#trendingcta', { opacity: 1, delay: 2.5, x: 0, scrollTrigger: { start: 'top bottom' } })
  }, [])

  return (
	<section id="Trending" className='w-full h-screen mt-10'>
    <h1 id='trendingcta' className='text-white font-light text-center text-5xl translate-x-20 opacity-0'>Trending products</h1>
    <div className="bg-neutral-800 w-[90%] h-[85%] rounded-xl mt-5 ml-12">
      <h1 className="text-center text-white text-xl pt-5 pb-3">Free Delivery to all products here in this section</h1>
      <div className="bg-neutral-300 w-[90%] rounded-xl h-[55%] m-12 mt-3 flex flex-row justify-center gap-6">
        <div className="flex flex-col columns-3 mt-8 w-fit">
        <img src="./assets/images/products/n1.png" alt="" width={180} />
        <h1 className="text-center">Natural orange/black shirt</h1>
        <p className="text-center">from 159$ to 199$</p>
        <button className="bg-gradient-to-r from-black to-neutral-800 text-white rounded-2xl w-[7.5rem] items-center ml-6 mt-2 hover:bg-gradient-to-r hover:from-neutral-800 hover:to-neutral-600 transition-all ease duration-200">Add to cart</button>
        </div>
        <div className="w-fit flex-col columns-3 mt-8 flex">
        <img src="./assets/images/products/n2.png" alt="" width={180} />
        <h1 className="text-center">White/Blue Jeans</h1>
        <p className="text-center">from 69$ to 89$</p>
        <button className="bg-gradient-to-r from-black to-neutral-800 text-white rounded-2xl w-[7.5rem] items-center ml-6 mt-2 hover:bg-gradient-to-r hover:from-neutral-800 hover:to-neutral-600 transition-all ease duration-200">Add to cart</button>
        </div>
        <div className="w-fit flex-col columns-3 mt-8 flex">
        <img src="./assets/images/products/n5.png" alt="" width={180} />
        <h1 className="text-center">Austrailian Shirt</h1>
        <p className="text-center">from 59$ to 65$</p>
        <button className="bg-gradient-to-r from-black to-neutral-800 text-white rounded-2xl w-[7.5rem] items-center ml-6 mt-2 hover:bg-gradient-to-r hover:from-neutral-800 hover:to-neutral-600 transition-all ease duration-200">Add to cart</button>
        </div>
        <div className="w-fit flex-col columns-3 mt-8 flex">
        <img src="./assets/images/products/n6.png" alt="" width={180} />
        <h1 className="text-center">Canadian short</h1>
        <p className="text-center">From 39$ to 59$</p>
        <button className="bg-gradient-to-r from-black to-neutral-800 text-white rounded-2xl w-[7.5rem] items-center ml-6 mt-2 hover:bg-gradient-to-r hover:from-neutral-800 hover:to-neutral-600 transition-all ease duration-200">Add to cart</button>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-7 pt-2">
        <h1 className="text-2xl font-light text-white uppercase">Click here to see other products</h1>
        <button className="bg-gradient-to-r from-neutral-700 text-white to-neutral-500 text-xl font-light w-[8rem] rounded-xl"><a href="#Store">Go to Store</a></button>
      </div>
    </div>
  </section>
  )
}

export default Trending