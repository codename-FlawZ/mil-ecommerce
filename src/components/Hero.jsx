import React from 'react'
import Button from './design/Button'

const Hero = () => {
  return (
	<section id='Home' className='w-full h-screen'>
    <div className="bg-hero-bg rounded-xl flex flex-col items-start m-4 h-full bg-cover text-white">
      <div className="bg-gradient-to-r from-neutral-500/40 to-neutral-400/60 flex-col rounded-2xl flex blur-8">
      <h1 className='m-4 font-bold text-5xl text-center'>New Arrivals</h1>
      <p className='m-4 font-semibold text-2xl flex justify-center items-end text-center'>Look all the new merch we got fresh in our store</p>
      <Button />
      </div>
    </div>
  </section>
  )
}

export default Hero