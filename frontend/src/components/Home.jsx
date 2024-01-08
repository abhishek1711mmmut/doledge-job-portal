import * as React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import IndustriesHiring from "./IndustriesHiring";
import ExploreServices from "./ExploreServices";
import BlogsSection from "./BlogsSection";
import Footer from './Footer'

function Home(props) {
  return (
    <div className="bg-white flex flex-col">
      <div className="self-stretch flex w-full flex-col mt-5 max-md:max-w-full">
        <Navbar/>
        <Banner/>
        <IndustriesHiring/>
        <ExploreServices/>
        <BlogsSection/>
        <Footer/>


       
      </div>

        {/* Blogs Section */}
    
      


      {/* Footer */}
      {/* <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1fc373f5-8d91-446e-b09a-ed89cfcac5da?apiKey=98c2e51ab1a04825837c41320a839326&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc373f5-8d91-446e-b09a-ed89cfcac5da?apiKey=98c2e51ab1a04825837c41320a839326&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc373f5-8d91-446e-b09a-ed89cfcac5da?apiKey=98c2e51ab1a04825837c41320a839326&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc373f5-8d91-446e-b09a-ed89cfcac5da?apiKey=98c2e51ab1a04825837c41320a839326&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc373f5-8d91-446e-b09a-ed89cfcac5da?apiKey=98c2e51ab1a04825837c41320a839326&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc373f5-8d91-446e-b09a-ed89cfcac5da?apiKey=98c2e51ab1a04825837c41320a839326&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc373f5-8d91-446e-b09a-ed89cfcac5da?apiKey=98c2e51ab1a04825837c41320a839326&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc373f5-8d91-446e-b09a-ed89cfcac5da?apiKey=98c2e51ab1a04825837c41320a839326&"
        className="aspect-[3.59] object-contain object-center w-full overflow-hidden self-stretch mt-8 max-md:max-w-full"
      /> */}
    </div>
  );
}

export { Home };