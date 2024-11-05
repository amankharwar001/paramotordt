import React from "react";

const Section4 = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto p-6">
        <div className="md:flex items-center gap-8">
            <h2 className="font-bold w-[95%]">
            Pay without worry, trust we won't make you sorry
            </h2>
            <div className="relative">
              <p className=" text-muted-foreground pb-5">
              Sem morbi non arcu primis porttitor mollis sodales maecenas. Ac nibh
              sapien senectus sagittis amet porta enim fringilla praesent metus
              urna. Malesuada habitasse interdum volutpat.
              </p>
              <span className="absolute w-20 md:w-32 h-[3px] bg-blue-900"></span>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-card bg-white p-6 rounded-lg shadow-md flex gap-2">
            <div className=" w-28">
              <div className="bg-black rounded-full p-1 w-10 h-10 flex items-center justify-center">
                <img
                  aria-hidden="true"
                  alt="connected-people-icon"
                  src="/paramotor_assets/coins.png"
                  className=""
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Payment Solution</h3>
              <p className="text-muted-foreground">
                Volutpat id molestie quisque lorem tristique nibh consectetur
                fringilla habitant odio urna.
              </p>
            </div>
          </div>
          <div className="bg-card bg-white p-6 rounded-lg shadow-md flex gap-2">
            <div className=" w-28">
              <div className="bg-black rounded-full p-1 w-10 h-10 flex items-center justify-center">
                <img
                  aria-hidden="true"
                  alt="connected-people-icon"
                  src="/paramotor_assets/chart_graph.png"
                  className=""
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Growth Business</h3>
              <p className="text-muted-foreground">
                Volutpat id molestie quisque lorem tristique nibh consectetur
                fringilla habitant odio urna.
              </p>
            </div>
          </div>
          <div className="bg-card bg-white p-6 rounded-lg shadow-md flex gap-2">
            <div className=" w-28">
              <div className="bg-black rounded-full p-1 w-10 h-10 flex items-center justify-center">
                <img
                  aria-hidden="true"
                  alt="connected-people-icon"
                  src="/paramotor_assets/ui-user-group.png"
                  className=""
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Connected People</h3>
              <p className="text-muted-foreground">
                Volutpat id molestie quisque lorem tristique nibh consectetur
                fringilla habitant odio urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
