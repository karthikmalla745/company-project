import React from 'react'

const Services = () => {
  return (
    <>
    <div className="md:py-20 py-10">
        <div className="max-w-7xl mx-auto px-4 flex lg:flex-row flex-col gap-4">
            <div className="lg:w-1/4 w-full">
                <h2 className="lg:w-44 md:text-3xl text-2xl font-bold md:mb-10 mb-3">Key Challenges in AI Adoption</h2>
            </div>
            <div className="lg:w-3/4 w-full">
                <div className="grid lg:grid-cols-3 xl:gap-16 md:gap-8 gap-5 grid-cols-1">
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="mt-6 md:mt-0 h-20">
                            <img src="https://cdn.loopr.ai/site-media/assets/key_chanllegences_1_d6beca02d7.png" width="77" height="77"/>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col pl-0 md:mb-0 mb-4">
                                <p className="lg:mt-10 mt-5 mb-3 text-gray-400 text-xl font-bold">01</p>
                                <h3 className="lg:h-24 my-0 xl:text-2xl text-xl font-bold mb-4">AI Development is complex</h3>
                                <p className="text-base text-gray-600 lg:h-32">Tedious development process which requires collecting large data sets, data labeling, model development, training and hyper-tuning</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="mt-6 md:mt-0 h-20">
                            <img src="https://cdn.loopr.ai/site-media/assets/key_chanllegences_2_7d5e7ca7d2.png" width="83" height="83"/>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col pl-0 md:mb-0 mb-4">
                                <p className="lg:mt-10 mt-5 mb-3 text-gray-400 text-xl font-bold">02</p>
                                <h3 className="lg:h-24 my-0 xl:text-2xl text-xl font-bold mb-4">Demands time and cost investments</h3>
                                <p className="text-base text-gray-600 lg:h-32">Hire in-house data scientists and engineers or outsource to software consulting vendors</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="mt-6 md:mt-0 h-20">
                            <img src="https://cdn.loopr.ai/site-media/assets/key_chanllegences_3_e9200ca05a.png" width="80" height="75"/>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col pl-0 md:mb-0 mb-4">
                                <p className="lg:mt-10 mt-5 mb-3 text-gray-400 text-xl font-bold">03</p>
                                <h3 className="lg:h-24 my-0 xl:text-2xl text-xl font-bold mb-4">Unsolved problems for traditional industries</h3>
                                <p className="text-base text-gray-600 lg:h-32">Despite a strong willingness, traditional industries like manufacturing and aerospace struggle to adopt AI automation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* key advantages */}

    <div className="md:py-20 py-10">
        <div className="max-w-7xl mx-auto px-4 flex lg:flex-row flex-col gap-4">
            <div className="lg:w-1/4 w-full">
                <h2 className="lg:w-44 md:text-3xl text-2xl font-bold md:mb-10 mb-3">The Loopr Advantage</h2>
                <p className="lg:w-64 text-base font-semibold text-gray-600 md:mb-10 mb-3"></p>
            </div>
            <div className="lg:w-3/4 w-full">
                <div className="grid lg:grid-cols-3 md:gap-16 gap-8 grid-cols-1">
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="md:w-24 w-16 h-24 mt-6 md:mt-0">
                            <img src="https://cdn.loopr.ai/site-media/assets/advantage_icon1_308a04f283.png" srcset="https://cdn.loopr.ai/site-media/assets/advantage_icon1_308a04f283.png 300w, https://cdn.loopr.ai/site-media/assets/advantage_icon1_308a04f283.png 768w, https://cdn.loopr.ai/site-media/assets/advantage_icon1_308a04f283.png 1280w" width="91" height="70" className=""/>
                        </div>
                        <div className="flex flex-col pl-0 md:mb-0 col-span-3">
                            <h3 className="md:text-2xl text-xl font-bold my-4">Self Service</h3>
                            <p className="text-base text-gray-600 lg:h-28">Al store of no code solutions which can be leveraged and monitored without data science or engineering expertise</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="md:w-24 w-16 h-24 mt-6 md:mt-0">
                            <img src="https://cdn.loopr.ai/site-media/assets/advantage_icon2_d52fdaa9fe.png" srcset="https://cdn.loopr.ai/site-media/assets/advantage_icon2_d52fdaa9fe.png 300w, https://cdn.loopr.ai/site-media/assets/advantage_icon2_d52fdaa9fe.png 768w, https://cdn.loopr.ai/site-media/assets/advantage_icon2_d52fdaa9fe.png 1280w" width="92" height="69" className=""/>
                        </div>
                        <div className="flex flex-col pl-0 md:mb-0 col-span-3">
                            <h3 className="md:text-2xl text-xl font-bold my-4">Fast</h3>
                            <p className="text-base text-gray-600 lg:h-28">Get started with accurate predictions and results within hours or days</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="md:w-24 w-16 h-24 mt-6 md:mt-0">
                            <img src="https://cdn.loopr.ai/site-media/assets/advantage_icon3_dd561f28d2.png" srcset="https://cdn.loopr.ai/site-media/assets/advantage_icon3_dd561f28d2.png 300w, https://cdn.loopr.ai/site-media/assets/advantage_icon3_dd561f28d2.png 768w, https://cdn.loopr.ai/site-media/assets/advantage_icon3_dd561f28d2.png 1280w" width="95" height="78" className=""/>
                        </div>
                        <div className="flex flex-col pl-0 md:mb-0 col-span-3">
                            <h3 className="md:text-2xl text-xl font-bold my-4">Pay-as-you-go</h3>
                            <p className="text-base text-gray-600 lg:h-28">No up-front cost and SaaS style consumption-based pricing. Attractive, cost-effective and low risk proposition for businesses</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="md:w-24 w-16 h-24 mt-6 md:mt-0">
                            <img src="https://cdn.loopr.ai/site-media/assets/advantage_icon4_44b39c1194.png" srcset="https://cdn.loopr.ai/site-media/assets/advantage_icon4_44b39c1194.png 300w, https://cdn.loopr.ai/site-media/assets/advantage_icon4_44b39c1194.png 768w, https://cdn.loopr.ai/site-media/assets/advantage_icon4_44b39c1194.png 1280w" width="85" height="77" className=""/>
                        </div>
                        <div className="flex flex-col pl-0 md:mb-0 col-span-3">
                            <h3 className="md:text-2xl text-xl font-bold my-4">Edge &amp; IoT Ready</h3>
                            <p className="text-base text-gray-600 lg:h-28">Deploy AI solutions to IoT devices of your choice.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="md:w-24 w-16 h-24 mt-6 md:mt-0">
                            <img src="https://cdn.loopr.ai/site-media/assets/advantage_icon5_ae5205a8ab.png" srcset="https://cdn.loopr.ai/site-media/assets/advantage_icon5_ae5205a8ab.png 300w, https://cdn.loopr.ai/site-media/assets/advantage_icon5_ae5205a8ab.png 768w, https://cdn.loopr.ai/site-media/assets/advantage_icon5_ae5205a8ab.png 1280w" width="93" height="89" className=""/>
                        </div>
                        <div className="flex flex-col pl-0 md:mb-0 col-span-3">
                            <h3 className="md:text-2xl text-xl font-bold my-4">Cross Function</h3>
                            <p className="text-base text-gray-600 lg:h-28">Horizontal platform with reusable AI solutions across different industries and functions</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 grid-cols-4 gap-2">
                        <div className="md:w-24 w-16 h-24 mt-6 md:mt-0">
                            <img src="https://cdn.loopr.ai/site-media/assets/advantage_icon6_406ed526cc.png" srcset="https://cdn.loopr.ai/site-media/assets/advantage_icon6_406ed526cc.png 300w, https://cdn.loopr.ai/site-media/assets/advantage_icon6_406ed526cc.png 768w, https://cdn.loopr.ai/site-media/assets/advantage_icon6_406ed526cc.png 1280w" width="79" height="86" className=""/>
                        </div>
                        <div className="flex flex-col pl-0 md:mb-0 col-span-3">
                            <h3 className="md:text-2xl text-xl font-bold my-4">Secure</h3>
                            <p className="text-base text-gray-600 lg:h-28">Flexibility to keep data on public cloud for ease of access or on your premise for maximum security.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services
