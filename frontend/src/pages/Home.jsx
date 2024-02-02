// import * as React from "react"
import Banner from "../components/Home/Banner";
import IndustriesHiring from "../components/Home/IndustriesHiring";
import ExploreServices from "../components/Home/ExploreServices";
import BlogsSection from "../components/BlogsSection";

function Home() {
  return (
    <div className="bg-white flex flex-col">
      <div className="self-stretch flex w-full flex-col max-md:max-w-full">
        <Banner />
        <IndustriesHiring />
        <ExploreServices />
        <BlogsSection />
      </div>
    </div>
  );
}

export { Home };
