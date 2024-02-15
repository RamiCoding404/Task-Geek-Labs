import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiMiniBellAlert } from "react-icons/hi2";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import logo from "/src/assets/logo.png";
import user from "/src/assets/1.png";

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex  p-5">
      <div className="flex">
        <div onClick={() => setNav(!nav)} className="cursor-pointer text-white">
          <AiOutlineMenu size={30} />
        </div>
      </div>

      {nav ? (
        <div className=" fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[200px] h-screen bg-[#121212] z-10 duration-300 flex flex-col items-center"
            : "fixed top-0 left-[-100%] w-[200px] h-screen bg-[#121212] z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={20}
          className="absolute right-4 top-4 cursor-pointer text-white"
          onClick={() => setNav(!nav)}
        />
        <img
          src={logo}
          alt="logo"
          className="flex items-center justify-center mt-5"
        />
        <nav>
          <ul className="flex flex-col p-4 text-white ">
            <li className="text-xl py-4 flex cursor-pointer ">
              <HiMiniBellAlert size={25} className="mr-4 " />
              Alerts
            </li>
            <li className="text-xl py-4 flex  cursor-pointer">
              <GiGraduateCap size={25} className="mr-4" />
              Training
            </li>
            <li className="text-xl py-4 flex  cursor-pointer">
              <IoMdSettings size={25} className="mr-4 " />
              Automation
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaFolderOpen size={25} className="mr-4 " />
              Portfolio
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaArrowTrendUp size={25} className="mr-4 " />
              Trading
            </li>
          </ul>
        </nav>
        <div className="flex flex-row mt-56   ">
          <img src={user} alt="User" className="rounded-full h-10 w-10 mr-2" />
          <div className="flex flex-col">
            <span className="text-white text-md">Rami ibrahim</span>
            <span className="text-gray-500 text-sm">Junior</span>
          </div>
        </div>
        <span className="text-gray-600 text-[12px] mt-5">
          Street Suite. 2.0
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
