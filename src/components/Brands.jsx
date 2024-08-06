import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Brands = () => {

  useGSAP(() => {
    gsap.to('#titlecta', { scrollTrigger: '#brands', opacity: 1, delay: 1 }),
    gsap.to('#brandscta', { scrollTrigger: '#brands', opacity: 1, delay: 2 }),
    gsap.to('#textcta', { scrollTrigger: '#brands', opacity: 1, delay: 3 })
  }, [])

  return (
	<section id="brands" className='w-full text-white font-light text-center text-4xl pt-8'>
    <h1 id="titlecta" className="opacity-0">Look at the brands that we worked with</h1>
    <div id="brandscta" className="flex space-x-16 m-10 wrapper opacity-0">
      <img src='./assets/images/brands/g1.png' className="max-w-none" alt="Versace" />
      <img src='./assets/images/brands/g2.png' className="max-w-none" alt="Zara" />
      <img src='./assets/images/brands/g3.png' className="max-w-none" alt="Gucci" />
      <img src='./assets/images/brands/g4.png' className="max-w-none" alt="Prada" />
      <img src='./assets/images/brands/g5.png' className="max-w-none" alt="Calvin Klein" />
    </div>
    <p id="textcta" className="pt-10 text-xl font-light opacity-0">Looking to work with more brands in the future</p>
  </section>
  )
}

export default Brands