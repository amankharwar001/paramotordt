export default function FooterSection() {
    return (
        <div className=" ">
            <div className="container bg-[#003066] p-16 rounded-2xl flex justify-between m-auto text-white z-20" >
                <div>
                    <h2 className=" font-bold mb-4">Have any question?</h2>
                    <p className="text-muted-foreground mb-6">Ask us anything. Do you have a love question you want us to answer?</p>
                </div>
                <div className="flex items-center">
                    <a href ="#" className="cursor-pointer text-2xl font-semibold text-[#003066] rounded-md bg-white p-5">Contact Us</a>
                </div>
            </div>
            <div className="bg-slate-100 h-[550px] pt-40 relative -top-32 -z-10">
                <div className="container m-auto grid grid-cols-5 gap-5 mt-10 ">
                    <div className="col-span-2 mt-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto odio cupiditate corrupti nemo blanditiis veniam voluptates, sunt quaerat possimus quo eligendi reiciendis magnam dicta quos enim quas magni voluptatum nam reprehenderit dignissimos!</p>
                    </div>
                    <div className="mt-4 ml-8">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="text-muted-foreground flex flex-col gap-5 mt-5">
                            <li>Our core Businesses</li>
                            <li>Our 'company purpose'</li>
                            <li>Jobs & Careers</li>
                            <li>Our Responsibility</li>
                        </ul>
                    </div>
                    
                    <div className="mt-4 ml-8">
                        <h3 className="text-lg font-semibold">Solutions</h3>
                        <ul className="text-muted-foreground flex flex-col gap-5 mt-5">
                            <li>Compliance Publications</li>
                            <li>Annual Reports</li>
                            <li>CSR Reports</li>
                            <li>Financial documentation</li>
                        </ul>
                    </div>
                    
                    <div className="mt-4 ml-8">
                        <h3 className="text-lg font-semibold">Products</h3>
                        <ul className="text-muted-foreground flex flex-col gap-5 mt-5">
                            <li>Gift Card</li>
                            <li>Prepaid Gift Card</li>
                            <li>Our job offers</li>
                            <li>Our websites</li>
                        </ul>
                    </div>
                </div>
                <footer className=" container m-auto mt-8 text-sm text-muted-foreground">
                    <hr />
                    Copyright @2024 Paramotordt. All rights reserved.
                </footer>
            </div>
        
        </div>
    )
}