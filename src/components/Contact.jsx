import React from 'react'

const Contact = () => {
  return (
	<section className='w-[95%] h-[80%] bg-black rounded-2xl pb-3 flex flex-col gap-5 items-center mx-6' id='Contact'>
    <h1 className=' uppercase text-white px-7 pt-4 text-4xl'>Contact us</h1>
    <div className="w-[95%] -[40%] bg-neutral-900 rounded-xl text-white flex flex-col mx-7 mb-5 pb-3 items-center">
      <p className='ml-1 pt-3 text-2xl pb-3'>Contact us for newsletter or future collabs</p>
      <span className='mb-2 items-center'>
        <input type="text" className='rounded-md w-[70%] p-3 text-black text-2xl' typeof='email' placeholder='Insert your best email' />
        <button className='rounded-md bg-red-500 ml-2 p-3 hover:bg-red-800 transition-color duration-200 text-2xl uppercase font-semibold' type='submit'>Confirm</button>
        <p className='text-center text-sm pt-2'>by submiting your email you confirm that you agree with our <a href="#Terms" className='text-gray-600 underline hover:text-white duration-200 transition-all'>Terms and conditions</a> and <br />our <a href="Privacy" className='text-gray-600 underline hover:text-white duration-200 transition-all'>Terms of Privacy</a>. Be sure to read before submiting!</p>
      </span>
    </div>
  </section>
  )
}

export default Contact