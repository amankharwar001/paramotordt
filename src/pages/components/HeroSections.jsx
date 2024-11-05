import React from "react";
import Image from 'next/image'

const HeroSections = () => {
  return (
    <div className="bg-gray-100">
      <div className="container-wrapper  mx-auto p-4 ">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-10">
            <div className="flex items-center">
              <Image
                src="/paramotor_assets/paramotor_logo.png"
                alt="Paramotor Logo"
                className="h-8"
                width={80}
                height={20}

              />
              <span className="text-lg font-semibold ml-2 ">Paramotor</span>
            </div>
            <div className="hidden md:block p-2 bg-slate-200 text-sm rounded-full space-x-4">
              <select className="border  rounded-full p-2 w-32">
                <option className="py-2 px-4 ">Personal</option>
                <option className="py-2 px-4 ">Business</option>
              </select>
              <span className="w-32">Bussiness</span>
            </div>

          </div>
          <div className="">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md">
              Sign up
            </button>
          </div>
        </div>
        <div className="relative bg-zinc-100 rounded-2xl h-3/4  overflow-hidden">
          <img
            src="/paramotor_assets/bannerimg.png"
            alt="Gift Card Image"
            className=" h-[75vh] w-full  object-cover "
          />
          <div className="absolute z-10 inset-0 flex md:max-w-2xl flex-col justify-center items-center md:items-start text-white px-7">
            <h1 className=" leading-tight font-bold">Paramotor Prepaid  Gift Card</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar leo.
            </p>
            <button className=" flex bg-black text-white  md:w-36 justify-center p-4 rounded-full mt-6">
              Know More
            </button>
          </div>
          <div className="absolute bg-black opacity-25 w-full h-full top-0"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
