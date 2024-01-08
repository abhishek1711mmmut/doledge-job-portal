import * as React from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="div">
          <div className="div-2">
            <div className="div-3 text-left">
              <h4 className="h4">Quick Links</h4>

              <ul className="ul">
                <li className="li">
                  <Link className="li">
                  Home
                  </Link>
                  </li>

                <li className="li">
                <Link className="li">
                  Register Now
                  </Link>
                  
                  </li>

                <li className="li">About Us</li>

                <li className="li">
                <Link className="li">
                  Contact Us
                  </Link>
                  </li>
                <li className="li">
                <Link className="li">
                  Disclaimer
                  </Link>
                  </li>
                <li className="li">
                <Link className="li">
                  Terms & Conditions
                  </Link>
                  </li>
                <li className="li">
                <Link className="li">
                  
                  Privacy Policy
                  </Link>
                  </li>
                <li className="li">
                <Link className="li">
                  Refund and Cancellation Policy
                  </Link>
                  
                  </li>
                <li className="li">
                <Link className="li">
                  Fraud Alert
                  </Link>
                  </li>
                <li className="li">
                <Link className="li">
                  Sitemap
                  </Link>
                  </li>
              </ul>
            </div>

            <div className="div-4 text-left">
              <h4 className="h4">Jobseeker Services</h4>

              <ul className="ul">
                <li className="li">
                <Link className="li">
                  Home
                  </Link>
                  </li>

                <li className="li">
                <Link className="li">
                  Register
                  </Link>
                  </li>

                <li className="li">
                <Link className="li">
                  Zap Your Resume
                  </Link>
                  </li>
                <li className="li">
                   <Link className="li">

                  Highlight Your Resume
                   </Link>
                  </li>
                <li className="li">
                   <Link className="li">

                  Job Search Assistant-3 Months
                   </Link>
                  </li>
                <li className="li">
                   <Link className="li">

                  Job Search Assistant-6 Months
                   </Link>
                  </li>
                <li className="li">
                   <Link className="li">

                  Social Profiler
                   </Link>
                  </li>
                <li className="li">
                   <Link className="li">

                  Profile Update
                   </Link>
                  </li>
                <li className="li">
                   <Link className="li">

                  Personal Portfolio
                   </Link>
                  </li>
                <li className="li">
                   <Link className="li">

                  Interview Prepration
                   </Link>
                  </li>
              </ul>
            </div>

            <div className="div-5 text-left">
              <h4 className="h4">Jobs By Cities</h4>

              <ul className="ul">
                <li className="li">
                <Link className="li">
                  Instagram
                  </Link>
                  </li>

                <li className="li">
                <Link className="li">
                  New Delhi
                  </Link>
                  </li>

                <li className="li">
                  
                <Link className="li">
                  Hyderabad
                  </Link>
                  </li>
                <li className="li">
                <Link className="li">
                  Gurgaon
                  </Link>
                  </li>
                  
                <li className="li">
                <Link className="li">
                  Ahmedabad
                  </Link>
                  </li>
                <li className="li">
                <Link className="li">
                  Chennai
                  </Link>
                  </li>
                <li className="li">
                  
                  Ranchi
                  
                  </li>
                <li className="li">
                <Link className="li">
                  
                  Bangalore
                  </Link>
                  </li>


                <li className="li">
                <Link className="li">
                  Chandigarh
                  </Link>
                  
                  </li>
                <li className="li">
                <Link className="li">
                  Noida
                  </Link>
                  
                  </li>
                <li className="li">
                <Link className="li">
                  
                  Mumbai
                  </Link>
                  
                  </li>
              </ul>
            </div>

            <div className="div-6 text-left">
              <h4 className="h4">Contact Us</h4>

              <ul className="ul">
                <li className="li">Plot No. 115 , Noida , India</li>

                <li className="li">support@doledge.com</li>

                <li className="li-4">+91-931-167-9499</li>
              </ul>
            </div>
          </div>

          <hr className="hr" />

          <p className="p">© 2023 Doledgeindia. All rights reserved.</p>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background-color: rgb(248, 248, 248);
          padding: 40px 0px;
        }
        .div {
          margin: 0 auto;
          max-width: 1080px;
          padding: 0 40px;
        }
        .div-2 {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .div-3,
        .div-4,
        .div-5,
        .div-6 {
          flex-basis: 24%; /* You can adjust this value based on your layout requirements */
        }
        .h4 {
          font-weight: bold;
          margin-bottom: 20px;
        }
        .ul {
          list-style: none;
        }
        .li {
          color: rgb(106, 106, 106);
          font-size: 14px;
          margin-bottom: 8px;
        }
        .li-2,
        .li-3,
        .li-4 {
          color: rgb(106, 106, 106);
          font-size: 14px;
        }
        .hr {
          background-color: rgb(234, 234, 234);
          height: 1px;
          margin: 40px 0;
        }
        .p {
          color: rgb(106, 106, 106);
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Footer;
