import * as React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footer = [
    {
      title: "Quick Links",
      links: [
        "Home",
        "Register Now",
        "About Us",
        "Contact Us",
        "Disclaimer",
        "Terms & Conditions",
        "Privacy Policy",
        "Refund and Cancellation Policy",
        "Fraud Alert",
        "Sitemap",
      ],
    },
    {
      title: "Jobseeker Services",
      links: [
        "Home",
        "Register Now",
        "Zap Your Resume",
        "Highlight Your Resume",
        "Job Search Assistant-3 Months",
        "Job Search Assistant-6 Months",
        "Social Profiler",
        "Profile Update",
        "Personal Portfolio",
        "Interview Prepration",
      ],
    },
    {
      title: "Jobs by Cities",
      links: [
        "New Delhi",
        "Hyderabad",
        "Gurgaon",
        "Ahmedabad",
        "Chennai",
        "Ranchi",
        "Bangalore",
        "Chandigarh",
        "Noida",
        "Mumbai",
      ],
    },
  ];

  return (
    <div className="bg-[#f2f6fd]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] max-w-[1300px] items-start mx-auto my-10">
        {footer.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center sm:items-start gap-4 mb-8"
          >
            <h1 className="text-lg font-bold">{item.title}</h1>
            <ul className="flex flex-col items-center sm:items-start justify-start gap-2 text-gray-600/80">
              {item.links.map((link, index) => (
                <Link key={index}>
                  <li>{link}</li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col justify-center items-center sm:items-start gap-4 mb-8">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <ul className="flex flex-col items-center sm:items-start justify-start gap-y-3 text-gray-600">
            <Link>
              <li className="flex justify-center items-center gap-x-3">
                <FaLocationDot />
                <p className="text-left">
                  Plot no.-115 Sector 15, Noida 201301
                </p>
              </li>
            </Link>
            <Link>
              <li className="flex justify-center items-center gap-x-3">
                <LuMail />
                <p>support@doledge.com</p>
              </li>
            </Link>
            <Link>
              <li className="flex justify-center items-center gap-x-3 font-semibold">
                <IoMdCall />
                <p>+91-931-167-9499</p>
              </li>
            </Link>

            <span className="flex justify-center items-center gap-x-5">
              <Link>
                <FaFacebookSquare color="#fb923c" size={28} />
              </Link>
              <Link>
                <FaTwitterSquare color="#fb923c" size={28} />
              </Link>
              <Link>
                <FaInstagram color="#fb923c" size={28} />
              </Link>
              <Link>
                <FaLinkedin color="#fb923c" size={28} />
              </Link>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
