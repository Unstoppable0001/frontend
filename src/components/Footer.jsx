import logo from "../assets/logo.png";
import { IoMdArrowDropright } from "react-icons/io";
import AST from '../assets/AST.png'

import pST from '../assets/pST.png'


const Footer = () => {
  return (
    <div className="bg-[#091431] px-5 md:px-28 py-8">
      <div className="flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-3">
          <div className="gap-1 text-white flex items-center">
            <img className="h-14" src={logo} alt="" />
            <div>
              <p className="font-bold">SOMRIDDHI</p>
              <p className="font-semibold text-xs">DIGITAL Pvt. Ltd.</p>
            </div>
          </div>
          <p className="text-white md:w-60">
            Lorem Ipsum is simply dummy of the printing and type setting.
          </p>
          <div className="bg-white rounded-lg flex items-center md:justify-center justify-evenly md:gap-1 border md:w-36 h-16">
            <img className="h-10" src={AST} alt="" />
            <div>
              <p className="text-xs text-[#747577]">Download From</p>
              <p className="font-bold text-">APP Store</p>
            </div>
          </div>
          <div className="bg-white rounded-lg flex items-center md:justify-center justify-evenly md:gap-1 border md:w-36 h-16">
            <img className="h-10" src={pST} alt="" />
            <div>
              <p className="text-xs text-[#747577]">Download From</p>
              <p className="font-bold text-">PLAY Store</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-[#F01C21]">COMPANY</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              About Us
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Privacy Policy
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Terms
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Blogs
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Branding
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Career
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-[#F01C21]">GENERAL</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Partner With us
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Write to us
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Mobile App
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Site map
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-[#F01C21]">PAGES</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Amazon Offer
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Google Pay Offers
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              PayPal Offers
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              PhonePe Offers
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Festival Offers
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Bank Offers
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-[#F01C21]">MORE</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              City Offers
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Brand Offers
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Product Deals
            </li>
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#F01C21]">
              <IoMdArrowDropright />
              Gift Cards
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer