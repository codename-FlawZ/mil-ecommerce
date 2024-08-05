import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Notification = () => {

  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, y: 0, delay: 2 })
    gsap.to('#textcta', { opacity: 1, delay: 2.5 })
  }, [])

  return (
	<section id='cta' className='bg-white rounded-t-xl opacity-0 translate-y-20'>
    <div id='textcta' className="text-center flex justify-center gap-1 py-1 opacity-0">
      <h1 className='cursor-default'>Free delivery to all of our trending products!</h1>
      <p className='cursor-default'>|</p>
      <a href="#" className='underline hover:text-blue-500 duration-200 cursor-pointer'>Know more</a>
    </div>
  </section>
  )
}

export default Notification