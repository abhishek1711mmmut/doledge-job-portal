import React from 'react';

const BlogsSection = () => {
    return (
        <>
            <div className="self-center flex w-full max-w-[1349px] flex-col mt-36 px-5 max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-black text-center text-4xl font-bold leading-[66px] tracking-[2px] self-center max-w-[862px]">
                    Latest Blogs
                </div>
                <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        {/* First Card */}
                        <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0  
                        
                        transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl 
                        ">
                            <div className="shadow-sm bg-white flex-grow flex flex-col w-full mx-auto pl-1 pr-px pb-3 border-[3px] border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-10">
                                {/* Your content for the first card */}
                                <img
                                    src="https://img.freepik.com/free-vector/business-infographic-with-image_23-2148340472.jpg?w=1060&t=st=1699265496~exp=1699266096~hmac=95eeb43bc1ed13c173e7226fbd872386411aeaaad9f68b766ad9ac1ed0f75f9b"
                                    alt="Business Infographic"
                                    className="max-w-full h-[300px] block mx-auto" /> {/* Set a fixed height here */}
                                <div className="text-black text-3xl self-center mt-5 max-md:max-w-full overflow-hidden text-left font-semibold ml-3">
                                    The Benefits of Using a Professional Resume Service
                                </div>
                                <div className="text-black text-lg mt-7 max-md:max-w-full overflow-hidden text-left flex items-center">
                                    <div className="mr-6 ml-3">Category:</div>
                                    <div className="text-orange-400 text-opacity-90 text-lg font-bold self-center my-auto whitespace-nowrap">
                                        Jobseekers, General
                                    </div>
                                </div>
                                <div className='text-left mt-5 ml-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum iure sint alias debitis id, facilis inventore fugit voluptas quisquam vero voluptatem voluptates accusantium animi vel expedita distinctio voluptate eius?
                                </div>
                                {/* 1 end */}
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
                            <div className="shadow-sm bg-white flex-grow flex flex-col w-full mx-auto pl-1 pr-px pb-3 border-[3px] border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-10   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ">
                                {/* Your content for the second card */}
                                <img
                                    src="https://img.freepik.com/free-vector/modern-business-infographic-template_23-2148446318.jpg?w=1060&t=st=1699265759~exp=1699266359~hmac=97af85ad94a9c577f09d12331e6e0b7cb58eb0030892669a0d4451ce40cecd8c"
                                    className="max-w-full h-[300px] block mx-auto" /> {/* Set a fixed height here */}
                                <h2 className="text-black text-3xl self-center mt-5 max-md:max-w-full overflow-hidden text-left font-semibold ml-3">
                                    The Benefits of Using a Professional Resume Service
                                </h2>
                                <div className="text-black text-lg mt-7 max-md:max-w-full overflow-hidden text-left flex items-center">
                                    <div className="mr-6 ml-3">Category:</div>
                                    <div className="text-orange-400 text-opacity-90 text-lg font-bold self-center my-auto whitespace-nowrap ">
                                        Jobseekers, General
                                    </div>
                                </div>
                                <div className='text-left mt-5 ml-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum iure sint alias debitis id, facilis inventore fugit voluptas quisquam vero voluptatem voluptates accusantium animi vel expedita distinctio voluptate eius?
                                </div>
                                {/* 2 end */}
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
                            <div className="shadow-sm bg-white flex-grow flex flex-col w-full mx-auto pl-1 pr-px pb-3 border-[3px] border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-10   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ">
                                {/* Your content for the third card */}
                                <img
                                    src="https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg?w=1060&t=st=1699267465~exp=1699268065~hmac=691c12ff3674f2ff543399d6ec110313d4d06f9b27d699b851f906552373196c"
                                    alt="Business Infographic"
                                    className="max-w-full h-[300px] block mx-auto" /> {/* Set a fixed height here */}
                                <h2 className="text-black text-3xl self-center mt-5 max-md:max-w-full overflow-hidden text-left font-semibold ml-3">
                                    The Benefits of Using a Professional Resume Service
                                </h2>
                                <div className="text-black text-lg mt-7 max-md:max-w-full overflow-hidden text-left flex items-center">
                                    <div className="mr-6 ml-3">Category:</div>
                                    <div className="text-orange-400 text-opacity-90 text-lg font-bold self-center my-auto whitespace-nowrap">
                                        Jobseekers, General
                                    </div>
                                </div>
                                <div className='text-left mt-5 ml-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum iure sint alias debitis id, facilis inventore fugit voluptas quisquam vero voluptatem voluptates accusantium animi vel expedita distinctio voluptate eius?
                                </div>
                                {/* 3 end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogsSection;
