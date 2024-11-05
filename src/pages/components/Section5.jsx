import Image from 'next/image'

export default function Section5() {
    return (
        <div className="container m-auto flex flex-col md:flex-row items-center p-8 ">
            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">Manage your money with Paramotor</h1>
                <p className="text-muted-foreground mb-6">
                    Auctor urna nunc id cursus metus aliquam eleifend mi. Sit amet risus nullam eget. Ut lectus arcu bibendum at. Id interdum velit laoreet id donec ultricies tincidunt arcu. Mauris ultricies eros.
                </p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded-lg">
                    Get Free Demo
                </button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 relative">
                <div className='flex justify-end'>
                    <Image
                        src="/paramotor_assets/mony-rcv.png"
                        alt="Paramotor Logo"
                        className="rounded-xl bg-slate-200 w-[80%]"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="mt-4 absolute bottom-24 left-10" >
                    <div className="bg-card p-4  mb-2">
                        <div className='shadow-md rounded-lg flex w-72' >
                            <Image
                                src="/paramotor_assets/shape-1.png"
                                alt="Paramotor Logo"
                                className="rounded-xl bg-slate-200 w-full object-cover"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className='shadow-md rounded-lg flex w-72 mt-16' >
                            <Image
                                src="/paramotor_assets/shape-2.png"
                                alt="Paramotor Logo"
                                className="rounded-xl bg-slate-200 w-full object-cover"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}