import React from 'react'
import Airtel from '../images/AirtelLogo.png'
import HCL from '../images/HclLogo.png'
import Paytm from '../images/PaytmLogo.png'
import Jio from '../images/JioLogo.png'
import Justdial from '../images/JustdialLogo.png'
import Infosys from '../images/InfosysLogo.png'
import Review from '../images/ReviewIcon.png'


const CompaniesHiring = () => {

    const companies=[
        {
            src:Airtel,
        },
        {
            src:HCL
        },
        {
            src:Paytm,
        },
        {
            src:Jio
        },
        {
            src:Justdial
        },
        {
            src:Infosys
        }
    ];

    return (

        <div className='flex flex-col my-5 md:my-8 lg:my-10'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold leading-[66px] tracking-[2px] '>
                Top Industries Hiring Now
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-3 sm:my-10'>
            {
                companies.map((company, index)=>(
                    <div key={index} className='flex flex-col gap-y-1 sm:gap-y-3 border-2 border-solid border-black border-opacity-10 rounded-2xl p-1 sm:p-3'>
                        <div className='h-8 sm:h-10 mx-auto'>
                            <img src={company.src} alt="company_logo" className='h-full w-full object-contain object-center mx-auto' />
                        </div>
                        <div className='flex justify-start items-center gap-x-2 rounded-xl bg-gradient-to-r from-[#F69F60] to-[#f8f4f2] w-[80%] mx-auto py-1 px-2'>
                            <img src={Review} alt="" className='pl-2 w-6'/>
                            <p className='text-center text-[9px] sm:text-xs font-medium leading-4 tracking-wide '>
                                30k+ reviews
                            </p>
                        </div>
                        <button className='text-center text-[12px] sm:text-base font-medium leading-7 tracking-wider'>
                            View Jobs
                        </button>
                    </div>
                ))
            }
            </div>
            <button className='flex justify-center items-center text-orange-400 text-opacity-90 text-lg sm:text-3xl font-extrabold leading-9 sm:leading-10 tracking-widest sm:tracking-[4.76px] rounded-3xl border-[3px] border-solid border-orange-400 border-opacity-90 w-fit mx-auto px-3 py-2 sm:p-7'>
                View all companies
            </button>
        </div>
    )
}

export default CompaniesHiring