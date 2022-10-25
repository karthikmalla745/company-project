import React from 'react'

const Product = () => {
  return (
//   <div className="grid grid-rows-3 grid-flow-col gap-4 m-4 p-4">
//   <div className="row-span-3 border-2 m-3 p-3">
//     <h1 className='text-3xl font-bold'>OUR OFFERINGS</h1>
//   </div>
//   <div className="col-span-2 border-2 m-3 p-3">
//     <h1 className='text-3xl font-bold'>STORE AI</h1>
//   </div>
//   <div className="row-span-2 col-span-2 border-2 m-3 p-3">
//     <h1 className='text-3xl font-bold'>EDGE-</h1>
//   </div>
// </div>
    <div className=' bg-gray-150 md:py-24 py-14'>
        <div className='max-w-7xl mx-auto px-4 flex md:flex-row flex-col gap-10'>
            <div className='md:w-1/3 sm:w-2/3 w-full'>
                <h1 className='lg:w-44 md:text-3xl text-2xl font-bold md:mb-10 mb-5'>Our Offerings</h1>
                <p className='lg:w-64 text-base font-semibold text-gray-600 mb-5'>
                Loopr offers a no-code SaaS platform to adopt pre-built and end-to-end AI solutions, within days, at no up-front cost.
                </p>
            </div>
            <div className='sm:w-2/3 w-full'>
                <div className='flex flex-col justify-between lg:gap-24 gap-5 md:flex-row md:mb-24 mb-14'>
                    <div className='md:mb-0 mb-10'>
                    <img alt="Loopr AI Store" src="https://cdn.loopr.ai/site-media/assets/edge_img_ee6b08eb80.png" width="179" height="121"/>
                    </div>
                    <div>
                        <p className='mb-3 text-gray-400 text-xl font-bold'>01</p>
                        <div className='flex justify-between w-full items-center mb-5'>
                            <h3 className='my-0 md:text-2xl text-xl font-bold'>Loopr Ai Store</h3>
                            <a href="/products/loopr-ai-store">
                                <svg className="arrow-right-black" xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 15.208 10.209">
                                    <path id="Path_203" data-name="Path 203" d="M397.861,1016.255l5,4.712-5,4.634,5-4.634H388.156" transform="translate(-388.155 -1015.891)" fill="none" stroke="#1f1f1f" stroke-linejoin="round" stroke-width="1">

                                    </path>
                                </svg>
                            </a>
                        </div>
                        <p className='text-base lg:pr-20 text-gray-600'>
                        Ready to use plug & play Machine Vision and NLP solutions for various use cases across industries
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-between lg:gap-24 gap-5 md:flex-row-reverse'>
                    <div className='md:mb-0 mb-10'>
                    <img alt="Loopr Edge" src="https://cdn.loopr.ai/site-media/assets/ai_store_img_8df5aea3bd.png" width="190" height="140"/>
                    </div>
                    <div>
                        <p className="mb-3 text-gray-400 text-xl font-bold">
                            02
                        </p>
                        <div className="flex justify-between w-full items-center mb-5">
                                <h3 className="my-0 md:text-2xl text-xl font-bold">
                                    Loopr Edge - 
                                    </h3>
                                    <a href="/products/loopr-edge">
                                        <svg className="arrow-right-black" xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 15.208 10.209"><path id="Path_203" data-name="Path 203" d="M397.861,1016.255l5,4.712-5,4.634,5-4.634H388.156" transform="translate(-388.155 -1015.891)" fill="none" stroke="#1f1f1f" stroke-linejoin="round" stroke-width="1"></path></svg>
                                    </a>
                        </div>
                        <p className="text-base lg:pr-20 text-gray-600">
                                            Loopr's solutions are built edge first and can be easily deployed to different IoT devices and endpoints in the field
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
