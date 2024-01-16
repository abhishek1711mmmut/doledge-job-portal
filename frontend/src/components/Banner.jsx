import React, { useState, useCallback } from 'react';
import bgRight from '../images/bgPerson.png'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineUpload } from "react-icons/ai";
import {useDropzone} from 'react-dropzone'


const Banner = () => {

  const [search1, setSearch1] = useState("")
  const [search2, setSearch2] = useState("")
  const [search3, setSearch3] = useState("0")

  const handleSubmit=()=>{
    console.log(search1, search2, search3);
  }

  const [selectedFile, setSelectedFile] = useState(null)
  
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    setSelectedFile(acceptedFiles[0])
    console.log(acceptedFiles[0])
  }, [])
  
  const {getRootProps, getInputProps, open, fileRejections} = useDropzone({
    noClick:true,
    accept:{
      'application/*':['.pdf','.doc','.docx']
    },
    maxSize:'2097152',
    onDrop
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));


  return (
    <div>
      <div className='relative flex w-full h-[30vh] md:h-[40vh] lg:h-[75vh]'>
        <div className='bg-gradient-to-tr from-orange-400 to-orange-300/60 w-[55%] sm:w-[62%]'></div>
        <img src={bgRight} alt="" className='w-[45%] sm:w-[38%]'/>
        <div className='absolute left-[50%] -translate-x-[50%] top-[10%] sm:top-[15%] w-full sm:w-[75%]'>
          <div className='flex flex-col justify-center gap-3 md:gap-10 lg:gap-20'>
            <h1 className='text-xl md:text-4xl lg:text-6xl tracking-wider'>
              Find, Apply, Succeed  
            </h1>
            <div className='flex flex-col self-center justify-center items-center mx sm:flex-row rounded-md sm:border-4 w-[60%] sm:w-full bg-white'>
              <div className='flex justify-start items-center gap-x-2 lg:gap-x-5 w-full p-1 sm:p-2 sm:rounded-l-lg flex-0'>
                <CiSearch className='text-lg md:text-[50px] lg:text-[60px]'/>
                <input 
                  type="search" 
                  name="search1" 
                  id="search1"
                  onChange={(e)=>setSearch1(e.target.value)}
                  value={search1}
                  placeholder='Skills, Company or Job Title'
                  className='w-full outline-none text-[10px] md:text-[13px] lg:text-base'
                />
              </div>
              <div className='flex sm:justify-center items-center gap-x-2 w-full p-1 lg:p-2 flex-1 sm:border-l-4 sm:border-r-4'>
                <CiLocationOn className='text-base md:text-[30px] lg:text-[55px]'/>
                <input 
                  type="search" 
                  name="search2" 
                  id="search2"
                  onChange={(e)=>setSearch2(e.target.value)}
                  value={search2}
                  placeholder='Location'
                  className='outline-none text-[10px] md:text-[13px] lg:text-base'
                />
              </div>
              <div className='flex justify-between items-center gap-x-8 md:gap-x-4 w-full p-1 sm:px-3 sm:p-2 sm:rounded-r-lg flex-0'>
                <div className='flex justify-center items-center gap-x-2'>
                  <BsBriefcase className='text-sm md:text-[30px] lg:text-[50px]'/>
                  <select 
                    name="experience" 
                    id="experience" 
                    className='outline-none opacity-60 text-[10px] md:text-[13px] lg:text-base'
                    value={search3}
                    onChange={(e)=>setSearch3(e.target.value)}
                    >
                    <option value='0' disabled hidden>Experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="1+ yoe">1+ Year</option>
                    <option value="2+ yoe">2+ Year</option>
                  </select>
                </div>
                <button className='bg-[#15AA6A] text-white px-2 py-[1.5px] sm:px-5 sm:py-1 text-xs lg:text-base rounded sm:rounded-lg flex justify-center items-center' onClick={handleSubmit}>
                  Search
                </button>
              </div>
            </div>
            <div {...getRootProps()} className='self-center sm:self-end'>
              <input {...getInputProps()} />
                <button className='flex flex-row justify-center items-center gap-x-1 sm:gap-x-3 font-semibold bg-[#46d597] opacity-90 sm:bg-opacity-60 w-fit md:px-3 md:py-1 lg:py-4 rounded-lg text-[8px] p-1 px-2'
                  onClick={open}
                >
                  <p className='text-xs sm:text-2xl'>Upload your resume now</p>
                  <AiOutlineUpload className='text-sm sm:text-5xl'/>
                </button>
                <aside className='text-[8px] sm:text-base font-semibold'>
                  <ul className='text-white sm:text-red-500'>{fileRejectionItems}</ul>
                </aside>
          </div>
            
          </div>
        </div>
      </div>
    <div>
      
      </div>
    </div>
    
  );
};

export default Banner;
