import { AiOutlineSearch } from "react-icons/ai";

import { HiMiniBellAlert } from "react-icons/hi2";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4">
      <div className="flex items-center justify-between ">
        <Sidebar />
        <h1 className="text-2xl sm:text-3xl lg:text-5xl px-2 text-white font-bold sm:ml-12 ml-0 mr-10">
          ALERTS
        </h1>
        <div className="bg-[#5d5d5d] rounded-sm flex items-center w-[80px] sm:w-[600px] h-[35px]">
          <input
            className="bg-transparent p-2 w-full focus:outline-none placeholder:text-[15px]"
            type="text"
            id="search"
            placeholder="Search By..."
          />
          <AiOutlineSearch
            size={23}
            className="text-gray-400 mr-2 hover:text-blue-500 cursor-pointer  transition duration-300  "
          />
        </div>
        <button className=" text-white  md:flex items-center py-2 rounded-full cursor-pointer transition duration-300">
          <HiMiniBellAlert
            size={30}
            className="mr-2 text-[#53ACFF] ml-2 cursor-pointer hover:text-blue-500 transition duration-300  "
          />
        </button>
      </div>
    </div>
  );
}
