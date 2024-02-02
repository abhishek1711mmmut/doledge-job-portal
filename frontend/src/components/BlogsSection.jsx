import React from "react";

const BlogsSection = () => {
  const blogs = [
    {
      img: "https://img.freepik.com/free-vector/business-infographic-with-image_23-2148340472.jpg?w=1060&t=st=1699265496~exp=1699266096~hmac=95eeb43bc1ed13c173e7226fbd872386411aeaaad9f68b766ad9ac1ed0f75f9b",
      title: "The Benefits of Using a Professional Resume Writing Service",
      category: "Jobseekers, General",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum iure sint alias debitis id, facilis inventore fugit voluptas quisquam vero ...",
    },
    {
      img: "https://img.freepik.com/free-vector/business-infographic-with-image_23-2148340472.jpg?w=1060&t=st=1699265496~exp=1699266096~hmac=95eeb43bc1ed13c173e7226fbd872386411aeaaad9f68b766ad9ac1ed0f75f9b",
      title: "The Benefits of Using a Professional Resume Writing Service",
      category: "Jobseekers, General",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum iure sint alias debitis id, facilis inventore fugit voluptas quisquam vero ...",
    },
    {
      img: "https://img.freepik.com/free-vector/business-infographic-with-image_23-2148340472.jpg?w=1060&t=st=1699265496~exp=1699266096~hmac=95eeb43bc1ed13c173e7226fbd872386411aeaaad9f68b766ad9ac1ed0f75f9b",
      title: "The Benefits of Using a Professional Resume Writing Service",
      category: "Jobseekers, General",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum iure sint alias debitis id, facilis inventore fugit voluptas quisquam vero ...",
    },
  ];

  return (
    <div className="my-10 md:my-14 lg:my-20 flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl sm:text-4xl font-bold leading-[30px] sm:leading-[66px] tracking-[2px]">
        Latest from Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-[80%] mx-auto max-w-[1300px]">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 sm:gap-5 p-3 border-2 shadow-lg rounded-lg "
          >
            <div className="">
              <img
                src={blog.img}
                alt=""
                className="w-full h-full object-contain object-center rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-5">
              <h1 className="text-xl sm:text-3xl font-semibold text-left">
                {blog.title}
              </h1>
              <h2 className="text-left font-semibold md:text-xl lg:text-base">
                Category :{" "}
                <span className="text-orange-500">{blog.category}</span>
              </h2>
              <p className="text-justify md:text-xl lg:text-base">
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="flex justify-center items-center bg-orange-400 text-white text-base sm:text-2xl font-medium px-7 py-3 rounded-lg mt-5">
        View All Blog Posts
      </button>
    </div>
  );
};

export default BlogsSection;
