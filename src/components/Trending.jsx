import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Trending = () => {

  useGSAP(() => {
    gsap.to('#trendingcta', { opacity: 1, delay: 2.5, x: 0, scrollTrigger: { start: 'top bottom' } })
  }, [])

  return (
	<section id="Trending" className='w-full h-screen mt-10'>
    <h1 id='trendingcta' className='text-white font-light text-center text-5xl translate-x-20 opacity-0'>Trending products</h1>
    <div className="bg-neutral-800 w-[90%] h-screen rounded-xl mt-5 ml-12">
      <h1 className="text-center text-white text-xl pt-5 pb-3">Free Delivery to all products here in this section</h1>
      <div className="bg-neutral-300 w-[90%] rounded-xl h-[90%] m-12 mt-0 flex flex-col columns-3 justify-between fit-content">
        <img src="./assets/images/products/n1.png" alt="" width={180} />
        <img src="./assets/images/products/n2.png" alt="" width={180} />
        <img src="./assets/images/products/n3.png" alt="" width={180} />
        <img src="./assets/images/products/n4.png" alt="" width={180} />
        <img src="./assets/images/products/n5.png" alt="" width={180} />
        <img src="./assets/images/products/n6.png" alt="" width={180} />
        <img src="./assets/images/products/n7.png" alt="" width={180} />
        <img src="./assets/images/products/n8.png" alt="" width={180} />
      </div>
    </div>
  </section>
  )
}

export default Trending