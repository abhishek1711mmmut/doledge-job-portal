import React from "react";
import ServicesImage from "../../images/ExploreServices.png";

const ExploreServices = () => {
  const services = [
    {
      img: ServicesImage,
      title: "Highlight Your Resume",
      content:
        "Highlight Your Resume is a specialized service dedicated to enhancing your job application materials.",
      priceBtn: "2 Months - Rs 899/-",
    },
    {
      img: ServicesImage,
      title: "Highlight Your Resume",
      content:
        "Highlight Your Resume is a specialized service dedicated to enhancing your job application materials.",
      priceBtn: "2 Months - Rs 899/-",
    },
    {
      img: ServicesImage,
      title: "Highlight Your Resume",
      content:
        "Highlight Your Resume is a specialized service dedicated to enhancing your job application materials.",
      priceBtn: "2 Months - Rs 899/-",
    },
  ];

  return (
    <div className="w-[80%] mx-auto max-w-[1300px]">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-10 sm:leading-[66px] sm:tracking-[2px]">
        Explore Our Premium Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-20 lg:max-xl:gap-5 m-5 sm:mt-10 lg:mt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 shadow-[rgba(0,_0,_0,_0.24)_3px_3px_8px] md:p-4 lg:p-0 rounded-lg"
          >
            <div className="">
              <img
                src={service.img}
                alt=""
                className="h-full w-full object-contain object-center mx-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-5 pb-4 px-4">
              <h1 className="font-semibold sm:font-normal text-xl sm:text-3xl">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg mx-auto text-justify">
                {service.content}
              </p>
              <div className="flex justify-between items-center">
                <button className="text-sm sm:text-lg bg-zinc-300 rounded-md sm:rounded-xl flex justify-center items-center px-2 sm:px-3 py-1">
                  {service.priceBtn}
                </button>
                <button className="text-orange-400 text-opacity-90 text-base sm:text-lg font-bold flex justify-center items-center">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreServices;
