import React from 'react';

const Banner = () => {
  return (
    <>

   
  <div className=" w-[100vw] h-[90vh] flex-col overflow-hidden relative flex ">
  <div className="image-container">
    <div style={{ display: 'flex' }}>
   <div className='bg-orange-400'  style={{ width: '60%', height: '768px' }} >
   </div  >
      <img
        src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-city-with-arms-crossed_23-2148767033.jpg?w=360&t=st=1699219038~exp=1699219638~hmac=af49fa3255e772b9d005ac806427b56456b0b5ed78696d19e3587792ad7f25dd"
        alt=""
        style={{ width: '40%', height: '100%',opacity:'0.8'}}
      />
    </div>
  </div>




        <div className="absolute self-center flex flex-col items-center mt-10">
          <div className="justify-center text-5xl leading-[118.8px] tracking-[3.6px] self-center max-w-[1094px]"
           >
            Find, Apply, Succeed
          </div>
          <div className="bg-white self-stretch flex flex-col mt-7 w-[80vw] h-[13vh] px-5 py-1 rounded-xl border-[4px] border-solid border-neutral-700 border-opacity-20 max-md:max-w-full max-md:mt-10">
            <div className="self-center flex w-full max-w-[1425px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="self-center flex items-start gap-5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/61322ece-125c-42ba-aa39-eadfc560f099?apiKey=98c2e51ab1a04825837c41320a839326&"
            className="aspect-[0.71] object-contain object-center w-[20px] overflow-hidden self-stretch max-w-full"
          />
          <div className="justify-center text-black text-opacity-40 text-xs leading-6 tracking-wider self-center max-w-[323px] grow shrink-0 basis-auto my-auto">
            <input type="text" placeholder='Skills, Company or Job Title'/>
            
          </div>
        </div>
        <div className="self-stretch flex items-start justify-between gap-3.5 max-md:justify-center">
          <div className="bg-black bg-opacity-40 self-stretch w-[3px] h-[11vh] grow shrink-0 basis-auto" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/141a3b21-0e16-474f-997d-fe2de2a1e53f?apiKey=98c2e51ab1a04825837c41320a839326&"
            className="aspect-square object-contain object-center w-[25px] overflow-hidden self-center max-w-full my-auto"
          />
          <div className="text-black text-opacity-40 text-xs leading-6 tracking-wider self-center my-auto whitespace-nowrap">
          <input type="text" placeholder='Location'/>
          </div>
        </div>

        {/* Experience box */}
        <div className="self-stretch flex items-start justify-between gap-1.5 max-md:justify-center">
          <div className="bg-black bg-opacity-40 self-stretch w-[3px] h-[11vh] grow shrink-0 basis-auto" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c67c95cb-6e5d-4ab9-baa1-4798b335396e?apiKey=98c2e51ab1a04825837c41320a839326&"
            className="aspect-[1.52] object-contain object-center w-[25px] fill-black overflow-hidden self-center max-w-full my-auto"
          />

          <div className="text-black text-opacity-40 text-xs leading-6 tracking-wider my-auto">
            Experience
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/85da70e9-e50e-44da-a998-b6bbdc7ddb71?apiKey=98c2e51ab1a04825837c41320a839326&"
            className="aspect-[1.78] object-contain object-center w-4 fill-zinc-800 fill-opacity-20 overflow-hidden self-center max-w-full my-auto"
          />
        </div>
        <button className="text-stone-950 text-sm self-center bg-emerald-600 bg-opacity-90 w-[7vw] p-2 max-w-full my-auto whitespace-nowrap max-md:pl-2.5">
          Search
        </button>
      </div>
    </div>
  </div>
</div>

        
   



      </>
    



  );
};

export default Banner;
