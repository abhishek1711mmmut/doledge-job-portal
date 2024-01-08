import React from 'react'

const CompaniesHiring = () => {
    return (
        <div className='self-center flex w-full max-w-[1644px] flex-col mt-20 max-md:max-w-full max-md:md-10'>
            {/* <div className="self-center flex w-full max-w-[1689px] flex-col mt-11 px-5 max-md:max-w-full max-md:mt-10 */}

            <div className="justify-center text-black text-4xl font-bold leading-[66px] tracking-[2px] self-center max-w-[693px] max-md:max-w-full">
                Top Companies Hiring Now
            </div>


            <div className="self-center flex w-full max-w-[1620px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center mt-20">
                <div className="bg-white flex flex-col flex-1 mt-2.5 px-5 py-3 rounded-3xl border-2 border-solid border-black border-opacity-10">
                    <div className="flex w-full flex-col self-start">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69a9f04a-9e2f-429b-af2e-4f804c80fcf2?apiKey=98c2e51ab1a04825837c41320a839326&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a9f04a-9e2f-429b-af2e-4f804c80fcf2?apiKey=98c2e51ab1a04825837c41320a839326&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a9f04a-9e2f-429b-af2e-4f804c80fcf2?apiKey=98c2e51ab1a04825837c41320a839326&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a9f04a-9e2f-429b-af2e-4f804c80fcf2?apiKey=98c2e51ab1a04825837c41320a839326&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a9f04a-9e2f-429b-af2e-4f804c80fcf2?apiKey=98c2e51ab1a04825837c41320a839326&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a9f04a-9e2f-429b-af2e-4f804c80fcf2?apiKey=98c2e51ab1a04825837c41320a839326&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a9f04a-9e2f-429b-af2e-4f804c80fcf2?apiKey=98c2e51ab1a04825837c41320a839326&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69a9f04a-9e2f-429b-af2e-4f804c80fcf2?apiKey=98c2e51ab1a04825837c41320a839326&"
                            className="aspect-[3.33] object-contain object-center w-full overflow-hidden self-start"
                        />
                        <div className="flex w-full flex-col mt-3 pl-3 pr-5 py-1.5 rounded-xl self-start max-md:ml-2">
                            <div className="flex w-full items-start gap-4 self-start">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a65590d-9fe2-411e-aee0-053f0aefb1ce?apiKey=98c2e51ab1a04825837c41320a839326&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="justify-center text-black text-center text-xs font-medium leading-4 tracking-wide my-auto">
                                    30k+ reviews
                                </div>
                            </div>
                        </div>
                        <div className="justify-center text-black text-center text-base font-medium leading-7 tracking-wider mt-2">
                            View Jobs
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col flex-1 mt-2.5 pt-4 pb-2.5 px-5 rounded-3xl border-2 border-solid border-black border-opacity-10">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2685440-85ca-4965-8d6c-4b982bb6cd7d?apiKey=98c2e51ab1a04825837c41320a839326&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2685440-85ca-4965-8d6c-4b982bb6cd7d?apiKey=98c2e51ab1a04825837c41320a839326&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2685440-85ca-4965-8d6c-4b982bb6cd7d?apiKey=98c2e51ab1a04825837c41320a839326&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2685440-85ca-4965-8d6c-4b982bb6cd7d?apiKey=98c2e51ab1a04825837c41320a839326&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2685440-85ca-4965-8d6c-4b982bb6cd7d?apiKey=98c2e51ab1a04825837c41320a839326&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2685440-85ca-4965-8d6c-4b982bb6cd7d?apiKey=98c2e51ab1a04825837c41320a839326&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2685440-85ca-4965-8d6c-4b982bb6cd7d?apiKey=98c2e51ab1a04825837c41320a839326&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2685440-85ca-4965-8d6c-4b982bb6cd7d?apiKey=98c2e51ab1a04825837c41320a839326&"
                        className="aspect-[3.13] object-contain object-center w-[119px] overflow-hidden self-center max-w-full"
                    />
                    <div className="self-center flex w-[158px] max-w-full flex-col mt-4 pl-3 pr-5 py-1.5 rounded-xl">
                        <div className="flex w-full items-start gap-4 self-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25495bff-f19b-4064-b778-262aea90d96a?apiKey=98c2e51ab1a04825837c41320a839326&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                            />
                            <div className="justify-center text-black text-center text-xs font-medium leading-4 tracking-wide my-auto">
                                30k+ reviews
                            </div>
                        </div>
                    </div>
                    <div className="justify-center text-black text-center text-base font-medium leading-7 tracking-wider mt-2">
                        View Jobs
                    </div>
                </div>
                <div className="bg-white flex flex-col flex-1 mt-2.5 px-5 py-3 rounded-3xl border-2 border-solid border-black border-opacity-10">
                    <div className="self-center flex w-[158px] max-w-full flex-col">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07dee71f-9527-424c-a940-38d47017fa62?apiKey=98c2e51ab1a04825837c41320a839326&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07dee71f-9527-424c-a940-38d47017fa62?apiKey=98c2e51ab1a04825837c41320a839326&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07dee71f-9527-424c-a940-38d47017fa62?apiKey=98c2e51ab1a04825837c41320a839326&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07dee71f-9527-424c-a940-38d47017fa62?apiKey=98c2e51ab1a04825837c41320a839326&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07dee71f-9527-424c-a940-38d47017fa62?apiKey=98c2e51ab1a04825837c41320a839326&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07dee71f-9527-424c-a940-38d47017fa62?apiKey=98c2e51ab1a04825837c41320a839326&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07dee71f-9527-424c-a940-38d47017fa62?apiKey=98c2e51ab1a04825837c41320a839326&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07dee71f-9527-424c-a940-38d47017fa62?apiKey=98c2e51ab1a04825837c41320a839326&"
                            className="aspect-[2.85] object-contain object-center w-[137px] overflow-hidden max-w-full ml-4 self-start max-md:ml-2.5"
                        />
                        <div className="self-stretch flex w-full flex-col mt-3 pl-3 pr-5 py-1.5 rounded-xl">
                            <div className="flex w-full items-start gap-4 self-start">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef71d4c-3b70-4afc-9828-dd9dad869198?apiKey=98c2e51ab1a04825837c41320a839326&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="justify-center text-black text-center text-xs font-medium leading-4 tracking-wide my-auto">
                                    30k+ reviews
                                </div>
                            </div>
                        </div>
                        <div className="justify-center text-black text-center text-base font-medium leading-7 tracking-wider mt-2">
                            View Jobs
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col flex-1 mt-2.5 px-5 py-3 rounded-3xl border-2 border-solid border-black border-opacity-10">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e5726a5-8d75-4525-931f-7cd384be0210?apiKey=98c2e51ab1a04825837c41320a839326&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e5726a5-8d75-4525-931f-7cd384be0210?apiKey=98c2e51ab1a04825837c41320a839326&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e5726a5-8d75-4525-931f-7cd384be0210?apiKey=98c2e51ab1a04825837c41320a839326&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e5726a5-8d75-4525-931f-7cd384be0210?apiKey=98c2e51ab1a04825837c41320a839326&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e5726a5-8d75-4525-931f-7cd384be0210?apiKey=98c2e51ab1a04825837c41320a839326&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e5726a5-8d75-4525-931f-7cd384be0210?apiKey=98c2e51ab1a04825837c41320a839326&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e5726a5-8d75-4525-931f-7cd384be0210?apiKey=98c2e51ab1a04825837c41320a839326&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e5726a5-8d75-4525-931f-7cd384be0210?apiKey=98c2e51ab1a04825837c41320a839326&"
                        className="aspect-[1.02] object-contain object-center w-[49px] overflow-hidden self-center max-w-full"
                    />
                    <div className="self-center flex w-[158px] max-w-full flex-col mt-3 pl-3 pr-5 py-1.5 rounded-xl">
                        <div className="flex w-full items-start gap-4 self-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db08567d-1b72-410e-9ada-6b5e2c2fd979?apiKey=98c2e51ab1a04825837c41320a839326&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                            />
                            <div className="justify-center text-black text-center text-xs font-medium leading-4 tracking-wide my-auto">
                                30k+ reviews
                            </div>
                        </div>
                    </div>
                    <div className="justify-center text-black text-center text-base font-medium leading-7 tracking-wider mt-2">
                        View Jobs
                    </div>
                </div>
                <div className="bg-white flex flex-col flex-1 my-auto pt-4 pb-2.5 px-5 rounded-3xl border-2 border-solid border-black border-opacity-10">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e9d2f1d5-deac-46be-9346-73a1d2a58cbe?apiKey=98c2e51ab1a04825837c41320a839326&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9d2f1d5-deac-46be-9346-73a1d2a58cbe?apiKey=98c2e51ab1a04825837c41320a839326&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9d2f1d5-deac-46be-9346-73a1d2a58cbe?apiKey=98c2e51ab1a04825837c41320a839326&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9d2f1d5-deac-46be-9346-73a1d2a58cbe?apiKey=98c2e51ab1a04825837c41320a839326&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9d2f1d5-deac-46be-9346-73a1d2a58cbe?apiKey=98c2e51ab1a04825837c41320a839326&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9d2f1d5-deac-46be-9346-73a1d2a58cbe?apiKey=98c2e51ab1a04825837c41320a839326&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9d2f1d5-deac-46be-9346-73a1d2a58cbe?apiKey=98c2e51ab1a04825837c41320a839326&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9d2f1d5-deac-46be-9346-73a1d2a58cbe?apiKey=98c2e51ab1a04825837c41320a839326&"
                        className="aspect-[3.71] object-contain object-center w-[130px] overflow-hidden self-center max-w-full"
                    />
                    <div className="self-center flex w-[158px] max-w-full flex-col mt-5 pl-3 pr-5 py-1.5 rounded-xl">
                        <div className="flex w-full items-start gap-4 self-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ebf2e99-85e0-4bed-afcb-03e76aa3e7ea?apiKey=98c2e51ab1a04825837c41320a839326&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                            />
                            <div className="justify-center text-black text-center text-xs font-medium leading-4 tracking-wide my-auto">
                                30k+ reviews
                            </div>
                        </div>
                    </div>
                    <div className="justify-center text-black text-center text-base font-medium leading-7 tracking-wider mt-2">
                        View Jobs
                    </div>
                </div>
                <div className="bg-white flex flex-col flex-1 pt-4 pb-2.5 px-5 rounded-3xl border-2 border-solid border-black border-opacity-10">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb116ee4-65d7-459f-95b0-69305c802a87?apiKey=98c2e51ab1a04825837c41320a839326&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb116ee4-65d7-459f-95b0-69305c802a87?apiKey=98c2e51ab1a04825837c41320a839326&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb116ee4-65d7-459f-95b0-69305c802a87?apiKey=98c2e51ab1a04825837c41320a839326&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb116ee4-65d7-459f-95b0-69305c802a87?apiKey=98c2e51ab1a04825837c41320a839326&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb116ee4-65d7-459f-95b0-69305c802a87?apiKey=98c2e51ab1a04825837c41320a839326&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb116ee4-65d7-459f-95b0-69305c802a87?apiKey=98c2e51ab1a04825837c41320a839326&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb116ee4-65d7-459f-95b0-69305c802a87?apiKey=98c2e51ab1a04825837c41320a839326&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb116ee4-65d7-459f-95b0-69305c802a87?apiKey=98c2e51ab1a04825837c41320a839326&"
                        className="aspect-[2.47] object-contain object-center w-[111px] overflow-hidden self-center max-w-full"
                    />
                    <div className="self-center flex w-[158px] max-w-full flex-col mt-3 pl-3 pr-5 py-1.5 rounded-xl">
                        <div className="flex w-full items-start gap-4 self-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8888a93e-db72-43c1-84ff-07d55c0196c2?apiKey=98c2e51ab1a04825837c41320a839326&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                            />
                            <div className="justify-center text-black text-center text-xs font-medium leading-4 tracking-wide my-auto">
                                30k+ reviews
                            </div>
                        </div>
                    </div>
                    <div className="justify-center text-black text-center text-base font-medium leading-7 tracking-wider mt-2">
                        View Jobs
                    </div>
                </div>
            </div>

            <div className="bg-white self-center flex w-[440px] max-w-full flex-col ml-5 mt-8 px-5 py-10 rounded-3xl border-[3px] border-solid border-orange-400 border-opacity-90">
          <div className="justify-center text-orange-400 text-opacity-90 text-center text-3xl font-extrabold leading-10 tracking-[4.76px] self-center max-w-[412px]">
            View all companies
          </div>
        </div>

        </div>







    )
}

export default CompaniesHiring