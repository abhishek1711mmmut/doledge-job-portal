import React from "react";
import CompaniesHiring from "./CompaniesHiring";
import { FaChevronRight } from "react-icons/fa";
import discoverCareer from "../../images/discoverCareer.png";

const IndustriesHiring = () => {
  const industriesHiring = [
    {
      title1: "Fintech",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Real Estate",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Retail",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Healthcare",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "IT",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Hospitality",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Fintech",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Real Estate",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Retail",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Healthcare",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "IT",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
    {
      title1: "Hospitality",
      title2: "25+ Active Jobs",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&",
    },
  ];

  const careerDiscover = [
    {
      title1: "Frontend Developer",
      jobs: "20+ Jobs",
    },
    {
      title1: "Frontend Developer",
      jobs: "20+ Jobs",
    },
    {
      title1: "Frontend Developer",
      jobs: "20+ Jobs",
    },
    {
      title1: "Frontend Developer",
      jobs: "20+ Jobs",
    },
    {
      title1: "Frontend Developer",
      jobs: "20+ Jobs",
    },
    {
      title1: "Frontend Developer",
      jobs: "20+ Jobs",
    },
    {
      title1: "Frontend Developer",
      jobs: "20+ Jobs",
    },
    {
      title1: "Frontend Developer",
      jobs: "20+ Jobs",
    },
  ];

  return (
    <div className="mx-auto flex flex-col w-full mt-10">
      <div className="justify-center text-black text-xl sm:text-3xl font-bold leading-[66px] tracking-wide sm:tracking-[2px] self-center  max-md:max-w-full">
        Top Industries Hiring Now
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mx-auto gap-3 md:gap-4 lg:gap-6 md:my-20 w-[90%] xl:w-[80%] max-w-[1350px]">
        {industriesHiring.map((item, index) => (
          <div
            className="bg-white flex flex-col items-start justify-center p-3 md:p-4 rounded-xl border-2 border-solid border-black border-opacity-10"
            key={index}
          >
            <div className="justify-center text-black text-[15px] font-bold  tracking-wider self-start">
              {item.title1}
            </div>

            <div className="flex justify-between items-center max-sm:w-full">
              <div className="justify-center text-black text-[12px] sm:text-base tracking-wider mt-2 self-start whitespace-nowrap">
                {item.title2}
              </div>
              <img
                loading="lazy"
                src={item.imgUrl}
                alt=""
                className="aspect-[0.57] object-contain object-center w-2 lg:w-[9px] mb-1  ml-2 fill-sky-500 overflow-hidden self-end "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Discover Your Dream Career */}
      <div className="relative bg-gradient-to-l from-[#DDA2A4] to-[#EDCCCE]/30 flex justify-start items-center lg:gap-5 w-[95%] md:w-[90%] lg:w-[88%] mx-auto rounded-2xl sm:p-3 mt-10 md:mt-12 lg:mt-20 h-[140px] md:h-[250px] lg:h-[300px] xl:h-full max-w-[1350px]">
        <div className="w-[150px] md:w-[300px] lg:w-[350px] 2xl:w-[400px] hidden xl:block">
          <img
            src={discoverCareer}
            alt=""
            className=" scale-x-90 scale-y-[80%] object-contain"
          />
        </div>
        <p className="text-[11px] md:text-xl lg:text-2xl font-bold pl-2 text-left max-lg:pl-5">
          Discover Your Dream Career:
          <br />
          Search, Find, Succeed
        </p>
        <div className="absolute right-3 md:right-[4%] 2xl:right-[6%] bg-[#FEFEFE] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-2 py-3 md:px-3 lg:px-4 md:py-8 lg:py-12 rounded-md sm:rounded-2xl">
          <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
            {careerDiscover.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-1 md:px-1 lg:px-3 sm:py-2 rounded-md sm:rounded-xl"
              >
                <h1 className="text-[8px] sm:text-base sm:font-bold">
                  {item.title1}
                </h1>
                <div className="flex justify-center items-center gap-x-4">
                  <p className="text-[8px] lg:text-base">{item.jobs}</p>
                  <FaChevronRight
                    color="#2196F3"
                    className="text-[8px] lg:text-base"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ARE YOU AN EMPLOYER ? */}
      <div className="mt-16 sm:mt-28 bg-gradient-to-r from-[#F69F60] to-[#f8f4f2] flex p-2 justify-around items-center py-5 sm:py-10 rounded-2xl border border-orange-900/30 w-[95%] md:w-[90%] 2xl:w-[88%] mx-auto max-w-[1350px] sm:max-xl:px-10 max-2xl:gap-x-5">
        <h1 className="text-[14px] md:text-xl lg:text-4xl font-bold text-left md:max-lg:tracking-wide">
          ARE YOU AN EMPLOYER ?
        </h1>
        <div className="text-[12px] md:text-xl lg:text-2xl font-medium flex flex-col xl:flex-row justify-center items-center gap-y-3 sm:gap-10">
          <button className="bg-[#2CB176] w-[150px] h-[35px] sm:w-[200px] sm:h-[50px] md:h-[70px] lg:w-[330px] 2xl:w-[380px] lg:h-[90px] rounded-xl flex justify-center items-center">
            Search your candidate
          </button>
          <button className="bg-[#DDA2A4] w-[150px] h-[35px] sm:w-[200px] sm:h-[50px] md:h-[70px] lg:w-[330px] 2xl:w-[380px] lg:h-[90px] rounded-xl flex justify-center items-center">
            Post a Job
          </button>
        </div>
      </div>

      {/* Section For Top Companies Hiring Now */}
      <CompaniesHiring />
    </div>
  );
};

export default IndustriesHiring;
