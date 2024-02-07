import React from "react";
import { stats } from "../helper/data";

const Stats = () => {
  return (
    <div className="pt-8">
      <div className="max-w-screen-2xl mx-auto px-4 text-gray-600 gap-x-12 justify-between md:px-8 ">
        <div className="max-w-screen-2xl mx-auto text-center ">
          <h3 className="text-4xl font-semibold">
            We do our best to make customers always happy
          </h3>
          <p className="my-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            expedita cum sequi, commodi illum laboriosam!
          </p>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
            {stats.map((item, index) => (
              <div
                key={index}
                className="text-center w-full px-4 py-6 sm:w-auto lg:py-4"
              >
                <h4 className="text-4xl font-semibold text-[#00CCBF]">
                  {item.data}
                </h4>
                <p className="font-[500] mt-3 text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
