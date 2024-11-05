import React from 'react'
import Image from 'next/image'
const Section3 = () => {
    return (
        <div className='container m-auto py-32 relative'>
            <div className='grid md:grid-cols-2 z-10'>
                <div className='relative'>

                    <div className="pt-24">
                        <div>
                            <h2 className="font-bold w-[95%]">Write Some heading related to content will come here lorem ipsum</h2>
                            <div className="relative">
                                <p className=" text-muted-foreground pb-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti necessitatibus officiis nulla itaque perferendis quaerat distinctio, similique optio soluta eligendi? Sed!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-10   flex '>
                        <div className='bg-slate-100 rounded-xl p-5 px-10 pr-12'>
                            <span className='font-semibold flex items-center'>10K Exclusive Agent</span>
                            <div className='relative h-10 my-5   w-full'>
                                <img className='rounded-full absolute w-12 z-10 ' src="/paramotor_assets/aboutsection/testimonial-1.jpg" alt="" />
                                <img className='rounded-full absolute w-12 left-[35px] z-20 ' src="/paramotor_assets/aboutsection/testimonial-2.jpg" alt="" />
                                <img className='rounded-full absolute w-12 left-[70px] z-30 ' src="/paramotor_assets/aboutsection/testimonial-3.jpg" alt="" />
                                <img className='rounded-full absolute w-12 left-[105px] z-40 ' src="/paramotor_assets/aboutsection/testimonial-6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 '>
                    <Image
                        src="/paramotor_assets/aboutsection/phonecard.jpg"
                        alt="Paramotor Logo"
                        className=" rounded-xl min-w-[380px] h-[720px] object-cover"
                        width={100}
                        height={100}

                    />
                    <div className=' w-2/5 py-8'>
                        <div className='w-full'>
                            <Image
                                src="/paramotor_assets/aboutsection/card-1-1.png"
                                alt="Paramotor Logo"
                                className="rounded-xl bg-slate-200 w-full"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className='w-full mt-5 bg-blue-900 rounded-2xl py-10 px-5'>
                            <div className=''>
                                <span className=' font-semibold text-2xl  text-white '>300+</span><br />
                                <span className='text-white '>Leading Member</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' pt-52 bg-[#003066] rounded-t-3xl relative -top-24 -z-[1]'>
                <div className='grid grid-cols-2 '>
                    <div className='relative'>
                        <div className='w-full  flex items-end justify-center'>
                            <Image
                                src="/paramotor_assets/aboutsection/robertocard.png"
                                alt="Paramotor Logo"
                                className="rounded-xl bg-slate-200 w-72 "
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className='absolute top-36 right-20 shadow-lg'>
                            <Image
                                src="/paramotor_assets/aboutsection/CONTENT-1.png"
                                alt="Paramotor Logo"
                                className="rounded-xl bg-slate-200 w-52 "
                                width={100}
                                height={100}
                            />
                            
                        </div>
                        <div className='absolute top-16 right-28'>
                        <Image
                                src="/paramotor_assets/aboutsection/Frame-1000003147-1.png"
                                alt="Paramotor Logo"
                                className="rounded-xl bg-slate-200 w-16 "
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>

                    <div className=" p-6 rounded-lg ">
                        <h2 className="text-3xl font-bold mb-4 text-white">Your path to hassle free payments</h2>
                        <p className="text-muted-foreground mb-6 text-white">Lorem ipsum dolor sit amet consectetur. Nisl pretium pretium erat ante eget volutpat libero. Felis quis morbi sociis vulputate viverra ac vitae orci. Convallis curabitur tellus euismod amet mauris suspendisse facilisis nibh massa. Consequat lorem diam massa etiam.</p>
                        <div className="text-muted-foreground text-center mt-2 flex gap-5 items-center justify-center">
                            <div>
                                <div className="text-2xl font-semibold text-red-500">4.9/5</div>
                                <div className="text-2xl text-white ">Client Rating</div>
                            </div>
                            <span className='text-2xl'>|</span>
                            <div>
                                <div className="text-2xl font-semibold text-red-500">99%</div>
                                <div className="text-2xl text-white">Secure Transaction</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3