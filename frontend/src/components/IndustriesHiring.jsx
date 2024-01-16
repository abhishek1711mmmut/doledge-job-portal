import React from 'react'
import { Link } from 'react-router-dom'
import CompaniesHiring from './CompaniesHiring'
import { FaChevronRight } from "react-icons/fa";
import discoverCareer from '../images/discoverCareer.png'

const IndustriesHiring = () => {

    const industriesHiring=[
        {
            title1:"Fintech",
            title2:"25+ Active Jobs",
            imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&"
        },
        {
            title1:"Real Estate",
            title2:"25+ Active Jobs",
            imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&"
        },
        {
            title1:"Retail",
            title2:"25+ Active Jobs",
            imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&"
        },
        {
            title1:"Healthcare",
            title2:"25+ Active Jobs",
            imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&"
        },
        {
            title1:"IT",
            title2:"25+ Active Jobs",
            imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&"
        },
        {
            title1:"Hospitality",
            title2:"25+ Active Jobs",
            imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/4d7bbea6-c42a-45c5-a451-a14cd023095c?apiKey=98c2e51ab1a04825837c41320a839326&"
        }
    ]

    const careerDiscover=[
        {
            title1:'Frontend Developer',
            jobs:'20+ Jobs'
        },
        {
            title1:'Frontend Developer',
            jobs:'20+ Jobs'
        },
        {
            title1:'Frontend Developer',
            jobs:'20+ Jobs'
        },
        {
            title1:'Frontend Developer',
            jobs:'20+ Jobs'
        },
        {
            title1:'Frontend Developer',
            jobs:'20+ Jobs'
        },
        {
            title1:'Frontend Developer',
            jobs:'20+ Jobs'
        },
        {
            title1:'Frontend Developer',
            jobs:'20+ Jobs'
        },
        {
            title1:'Frontend Developer',
            jobs:'20+ Jobs'
        }
    ]

    return (
        
        <div className="self-center flex w-[100vw]  flex-col sm:mt-30 p-2 sm:p-12 max-md:max-w-full">
            <div className="justify-center text-black text-xl sm:text-3xl font-bold leading-[66px] tracking-wide sm:tracking-[2px] self-center  max-md:max-w-full">
                Top Industries Hiring Now
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 mx-auto gap-3 sm:gap-6 mb-10">
                {
                    industriesHiring.map((item, index)=>(
                        <div className="sm:w-[11vw] sm:h-[13vh] bg-white flex flex-col items-start justify-center p-2 rounded-xl border-2 border-solid border-black border-opacity-10" key={index}>
                        
                            <div className="justify-center text-black text-[15px] font-bold  tracking-wider self-start">
                                {item.title1}
                            </div>
                                
                            <div className='flex justify-center items-center'>
                                <div className="justify-center text-black text-[12px] text-base tracking-wider mt-2 self-start whitespace-nowrap">
                                    {item.title2}
                                </div>
                                <img
                                    loading="lazy"
                                    src={item.imgUrl}
                                    className="aspect-[0.57] object-contain object-center w-[0.5vw] mb-1  ml-2 fill-sky-500 overflow-hidden self-end "
                                />
                            </div>
                        </div>
                    ))
                }
                {
                    industriesHiring.map((item, index)=>(
                        <div className="sm:w-[11vw] sm:h-[13vh] bg-white flex flex-col items-start justify-center p-2 rounded-xl border-2 border-solid border-black border-opacity-10" key={index}>
                        
                            <div className="justify-center text-black text-[15px] font-bold  tracking-wider self-start">
                                {item.title1}
                            </div>
                                
                            <div className='flex justify-center items-center'>
                                <div className="justify-center text-black text-[12px] text-base tracking-wider mt-2 self-start whitespace-nowrap">
                                    {item.title2}
                                </div>
                                <img
                                    loading="lazy"
                                    src={item.imgUrl}
                                    className="aspect-[0.57] object-contain object-center w-[0.5vw] mb-1  ml-2 fill-sky-500 overflow-hidden self-end "
                                />
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Discover Your Dream Career */}
            <div className='relative bg-gradient-to-l from-[#DDA2A4] to-[#EDCCCE]/30 flex justify-start items-center sm:gap-5 w-full sm:w-[90%] mx-auto rounded-2xl sm:p-3 mt-8 sm:mt-20 h-[140px]'>
                <div className='w-[150px] sm:w-[400px] hidden sm:block'>
                    <img src={discoverCareer} alt="" className=' scale-x-90 scale-y-[80%] object-contain'/>
                </div>
                <p className='text-[11px] sm:text-2xl font-bold pl-2 sm:pl-0 sm:text-left'>
                    Discover Your Dream Career:
                    <br />
                    Search, Find, Succeed
                </p>
                <div className='absolute right-3 sm:right-[7%] bg-[#FEFEFE] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-2 py-3 sm:px-4 sm:py-12 rounded-md sm:rounded-2xl'>
                    <div className='grid grid-cols-2 gap-2 sm:gap-4'>
                        {
                            careerDiscover.map((item, index)=>(
                                <div className='flex flex-col items-start justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-1 sm:px-3 sm:py-2 rounded-md sm:rounded-xl'>
                                    <h1 className='text-[8px] sm:text-base sm:font-bold'>
                                        {item.title1}
                                    </h1>
                                    <div className='flex justify-center items-center gap-x-4'>
                                        <p className='text-[8px]'>
                                            {item.jobs}
                                        </p>
                                        <FaChevronRight color='#2196F3' className='text-[8px]'/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* ARE YOU AN EMPLOYER ? */}
            <div className='mt-16 sm:mt-28 bg-gradient-to-r from-[#F69F60] to-[#f8f4f2] flex justify-around items-center py-10 rounded-2xl border border-orange-900/30'>
                <h1 className='text-[14px] sm:text-4xl font-bold text-left'>
                    ARE YOU AN EMPLOYER ?
                </h1>
                <div className='text-[12px] sm:text-2xl font-medium flex flex-col sm:flex-row justify-center items-center gap-y-3 sm:gap-10'>
                    <button className='bg-[#2CB176] w-[150px] h-[35px] sm:w-[380px] sm:h-[90px] rounded-xl flex justify-center items-center'>
                        Search your candidate
                    </button>
                    <button className='bg-[#DDA2A4] w-[150px] h-[35px] sm:w-[380px] sm:h-[90px] rounded-xl flex justify-center items-center'>
                        Post a Job
                    </button>
                </div>
            </div>

            {/* Section For Top Companies Hiring Now */}
           <CompaniesHiring/>

        </div>
    )
}

export default IndustriesHiring