import React from 'react'

const Store = () => {
  return (
	<section className='w-full h-screen rounded-xl bg-white' id='Store'>
    <h1 className='text-center font-light text-3xl pt-1'>Our Store</h1>
    <div className="grid grid-cols-3 gap-1 place-items-center w-full min-h-[100vh]">
      <div className="flex flex-col">
        <img src="./assets/images/products/n1.png" className='w-[40%] cursor-pointer hover:opacity-65 duration-200' alt="" />
        <h1>Product</h1>
      </div>
      <div className="flex flex-col">
        <img src="./assets/images/products/n1.png" className='w-[40%]' alt="" />
        <h1>Product</h1>
      </div>
      <div className="flex flex-col">
        <img src="./assets/images/products/n1.png" className='w-[40%]' alt="" />
        <h1>Product</h1>
      </div>
      <div className="flex flex-col">
        <img src="./assets/images/products/n1.png" className='w-[40%]' alt="" />
        <h1>Product</h1>
      </div>
      <div className="flex flex-col">
        <img src="./assets/images/products/n1.png" className='w-[40%]' alt="" />
        <h1>Product</h1>
      </div>
      <div className="flex flex-col">
        <img src="./assets/images/products/n1.png" className='w-[40%]' alt="" />
        <h1>Product</h1>
      </div>
      <div className="flex flex-col">
        <img src="./assets/images/products/n1.png" className='w-[40%]' alt="" />
        <h1>Product</h1>
      </div>
      <div className="flex flex-col">
        <img src="./assets/images/products/n1.png" className='w-[40%]' alt="" />
        <h1>Product</h1>
      </div>
    </div>
  </section>
  )
}

export default Store