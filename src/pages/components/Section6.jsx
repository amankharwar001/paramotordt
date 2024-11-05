import Image from 'next/image'

export default function Section6() {
    return (
        <div className="container m-auto flex flex-col md:flex-row items-center justify-between p-8 bg-background">
            <div className="md:w-1/2 mb-6 md:mb-0 relative">
                <Image
                    src="/paramotor_assets/men-left.jpg"
                    alt="Paramotor Logo"
                    className=" rounded-xl w-[80%] object-cover"
                    width={100}
                    height={100}

                />
                <img className='relative -top-28  -right-[45%]' src="https://rstheme.com/products/html/sasco/assets/images/feature/style2/card1.png" alt="" />
            </div>
            <div className="md:w-1/2 md:pl-8">
                <h1 className="text-3xl font-bold text-primary">Our goal is to make online payment easy for everyone.</h1>
                <p className="mt-4 text-muted-foreground">Onrare lectus sit amet est placerat in egestas erat for imperdiet. Adipiscing at in tellus integer feugiat.</p>
                <div className="mt-6">
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg">Get Free Demo</button>
                </div>
                <div className="mt-8 p-4 bg-card rounded-lg shadow-md">
                    <p className="text-muted-foreground">Remaining credit</p>
                    <p className="text-2xl font-bold">$2,792.30</p>
                    <p className="text-muted-foreground">Daily credit limit $50,000</p>
                    <div className="mt-4">
                        <p className="text-muted-foreground">Due in 6 Days</p>
                        <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg mt-2">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}