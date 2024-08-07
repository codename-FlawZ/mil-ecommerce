import React from 'react'
import Button from './design/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {

  useGSAP(() => {
    gsap.to('#divcta', { opacity: 1, delay: 1.5 })
    gsap.to('#boxcta', { opacity: 1, delay: 4, y: 0 })
  }, [])

  return (
	<section id='Home' className='w-full h-screen'>
    <div id='divcta' className="bg-hero-bg rounded-xl flex flex-col items-end m-4 h-full bg-cover text-white max-sm:w-full max-sm:h-screen max-sm:bg-cover opacity-0">
      <div id='boxcta' className="bg-gradient-to-r from-neutral-500/40 to-neutral-400/60 flex-col rounded-2xl flex blur-8 mt-[10rem] mr-5 opacity-0 -translate-y-20">
      <h1 className='m-4 font-bold text-5xl text-center'>New Arrivals</h1>
      <p className='m-4 font-semibold text-2xl flex justify-center items-end text-center'>Look all the new merch we got fresh in our store <br /> and also look at our recent trending products</p>
      <div className="flex justify-center items-center pb-3">
      <Button />
      </div>
      </div>
    </div>
  </section>
  )
}

export default Hero