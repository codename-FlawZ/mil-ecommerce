import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Notification = () => {

  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, delay: 2, display: 'block', ease: 'Power1.easeIn', transition: '' })
    gsap.to('#textcta', { opacity: 1, delay: 3 })
  }, [])

  return (
	<section id='cta' className='bg-neutral-900 rounded-t-xl opacity-0 text-white hidden w-full'>
    <div id='textcta' className="text-center flex justify-center gap-1 py-1 opacity-0 max-sm:text-sm">
      <h1 className='cursor-default'>Free delivery to all of our trending products!</h1>
      <p className='cursor-default'>|</p>
      <a href="#Trending" className='underline hover:text-blue-500 duration-200 cursor-pointer'>Know more</a>
    </div>
  </section>
  )
}

export default Notification