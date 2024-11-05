import React from "react";
import Image from 'next/image'

const Section1 = () => {
  return (
    <div>
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="relative w-[36%]">
          <h2 className=" font-bold  mb-4 ">
            <span className=" text-blue-900">Paramoters</span> has been trusted by 500+ leading Companies
          </h2>
          <span className="absolute w-20 md:w-32 h-[3px] bg-blue-900"></span>
        </div>
        <div className="space-y-4 ">
          <div className="flex flex-wrap justify-end">
            <img
              className="h-[3.2vw] "
              src="/paramotor_assets/partnerlogo/logo1.png"
              alt="@amara logo"
            />
            <img
              className="h-[3.2vw]"
              src="/paramotor_assets/partnerlogo/logo2.png"
              alt="treva. logo"
            />
            <img
              className="h-[3.2vw]"
              src="/paramotor_assets/partnerlogo/logo3.png"
              alt="velocity9 logo"
            />
            <img
              className="h-[3.2vw]"
              src="/paramotor_assets/partnerlogo/logo4.png"
              alt="velocity9 logo"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <img
              className="h-[3.2vw] "
              src="/paramotor_assets/partnerlogo/logo1.png"
              alt="@amara logo"
            />
            <img
              className="h-[3.2vw]"
              src="/paramotor_assets/partnerlogo/logo2.png"
              alt="treva. logo"
            />
            <img
              className="h-[3.2vw]"
              src="/paramotor_assets/partnerlogo/logo3.png"
              alt="velocity9 logo"
            />
            <img
              className="h-[3.2vw]"
              src="/paramotor_assets/partnerlogo/logo4.png"
              alt="velocity9 logo"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section1;
