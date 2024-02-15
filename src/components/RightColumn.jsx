import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  HeartPulse,
  Repeat2,
  Zap,
  CreditCard,
  ShoppingCart,
  MessageCircleMore,
  BadgeCent,
  X,
} from "lucide-react";
import { LiaStoreAltSolid } from "react-icons/lia";
import { MdOutlineBiotech } from "react-icons/md";
import { GiHammerNails } from "react-icons/gi";
import { PiBuildingsLight } from "react-icons/pi";
import { useState } from "react";

const RightColumn = () => {
  const [marketCap, setMarketCap] = useState(true);
  const [riskLevel, setRiskLevel] = useState(true);

  const handleMarketCapChange = (value) => {
    setMarketCap(value);
  };

  const handleRiskLevelChange = (value) => {
    setRiskLevel(value);
  };
  return (
    <>
      <div className="max-h-screen w-full  sm:w-[25rem]  bg-[#121212] p-4 rounded-md  ">
        <div className="text-white  text-2xl  font-bold">Filters</div>
        <div className="flex text-center justify-between">
          <div className="text-white px-3 left-0">Filters Applied</div>
          <div className="text-white text-sm cursor-pointer">Clear All</div>
        </div>
        <div className="flex items-center justify-between text-center">
          <div className="bg-[#1d1d1d] rounded-md  w-full sm:w-[350px] h-[50px] mt-1  ">
            <div className="px-3 py-2 flex items-center flex-row">
              <h2 className="flex left-0 bg-[#53ACFF] w-[100px] h-[20px] text-center items-center  text-black font-bold text-[12px] rounded-md p-2">
                Real State
                <X
                  size={12}
                  className="text-black ml-4 font-bold cursor-pointer"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-[#1d1d1d]  rounded-md w-full mt-5  ">
          <div className="text-white text-md flex left-0 py-3 px-4 font-bold">
            Stock
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center bg-[#4a4a4a] rounded-md w-[300px] h-[30px]">
              <input
                className="bg-transparent p-2 w-full focus:outline-none "
                type="text"
                placeholder=" $ TICKER"
              />
              <AiOutlineSearch
                size={15}
                className="text-gray-500 mr-2 font-bold cursor-pointer"
              />
            </div>
          </div>

          <div className="text-white text-md flex left-0 py-3 px-10 font-bold text-center ">
            <IoMdArrowDropdown
              size={15}
              className="text-white mr-1 font-bold "
            />
            industry
          </div>

          <div className="flex flex-row text-center ml-10 ">
            <div className="text-white text-sm px-3 ">
              <div className="border-l-2 pl-4 border-white sm:text-sm text-[10px]">
                <h2 className="flex flex-row">
                  <HeartPulse size={13} className="text-white mr-1 font-bold" />
                  Health Care
                </h2>
                <h2 className="flex flex-row text-center  ">
                  <Repeat2 size={13} className="text-white mr-1 font-bold" />
                  Materials
                </h2>
                <h2 className="flex flex-row text-center  ">
                  <Zap size={13} className="text-white mr-1 font-bold" />
                  Energy
                </h2>
                <h2 className="flex flex-row text-center ">
                  <CreditCard
                    size={13}
                    className="text-white mr-1 font-bold "
                  />
                  Consumer discretion
                </h2>
                <h2 className="flex flex-row text-center  ">
                  <ShoppingCart
                    size={13}
                    className="text-white mr-1 font-bold"
                  />
                  Consumer staples
                </h2>
                <h2 className="flex flex-row text-center ">
                  <LiaStoreAltSolid
                    size={13}
                    className="text-white mr-1 font-bold"
                  />
                  Real EState
                </h2>
              </div>
            </div>
            <div className="text-white text-sm  ">
              <div className="border-l-2 pl-4 border-white sm:text-sm text-[10px]">
                <h3 className="flex flex-row">
                  <MdOutlineBiotech
                    size={13}
                    className="text-white mr-1 font-bold"
                  />
                  IT
                </h3>
                <h2 className="flex flex-row text-center  ">
                  <MessageCircleMore
                    size={13}
                    className="text-white mr-1 font-bold"
                  />
                  Communication
                </h2>
                <h2 className="flex flex-row text-center  ">
                  <PiBuildingsLight
                    size={13}
                    className="text-white mr-1 font-bold"
                  />
                  Industrials
                </h2>
                <h2 className="flex flex-row text-center  ">
                  <GiHammerNails
                    size={13}
                    className="text-white mr-1 font-bold"
                  />
                  Utilites
                </h2>
                <h3 className="flex flex-row text-center ">
                  <BadgeCent size={13} className="text-white mr-1 font-bold" />
                  Financials
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col items-center justify-center">
              <div className="text-white text-md flex left-0 py-3 px-10 font-bold text-center ">
                <IoMdArrowDropdown
                  size={15}
                  className="text-white mr-1 font-bold "
                />
                Market Cap
              </div>
              <div className=" flex flex-col text-white">
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    className="form-radio w-4 w-4transition duration-150 ease-in-out"
                    checked={marketCap === "micro"}
                    onChange={() => handleMarketCapChange("micro")}
                  />
                  <div className="ml-2 block text-sm leading-2">Micro</div>
                </div>
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    className="form-radio  w-4  transition duration-150 ease-in-out"
                    checked={marketCap === "small"}
                    onChange={() => handleMarketCapChange("small")}
                  />
                  <div className="ml-2 block text-sm leading-2">Small</div>
                </div>
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    className="form-radio  w-4 transition duration-150 ease-in-out"
                    checked={marketCap === "large"}
                    onChange={() => handleMarketCapChange("large")}
                  />
                  <div className="ml-2 block text-sm leading-2">Large</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-white text-md flex left-0 py-3 font-bold text-center ">
                <IoMdArrowDropdown
                  size={15}
                  className="text-white mr-1 font-bold "
                />
                Risk Level
              </div>
              <div className=" flex flex-col text-white">
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    className="form-radio w-4 w-4transition duration-150 ease-in-out"
                    checked={riskLevel === "low"}
                    onChange={() => handleRiskLevelChange("low")}
                  />
                  <div className="ml-2 block text-sm leading-2">Low Risk</div>
                </div>
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    className="form-radio  w-4  transition duration-150 ease-in-out"
                    checked={riskLevel === "mid"}
                    onChange={() => handleRiskLevelChange("mid")}
                  />
                  <div className="ml-2 block text-sm leading-2">Mid Risk</div>
                </div>
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    className="form-radio  w-4 transition duration-150 ease-in-out"
                    checked={riskLevel === "high"}
                    onChange={() => handleRiskLevelChange("high")}
                  />
                  <div className="ml-2 block text-sm leading-2"> Low Risk</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row  justify-around  items-center text-center">
            <div className="flex flex-col ">
              <div className="text-white text-md flex left-0 ml-10  py-3 font-bold text-center ">
                Strategy
              </div>

              <div className="text-white mb-10">
                <div className="">
                  <div className="bg-[#53ACFF] cursor-pointer h-[25px] w-[130px] rounded-md text-sm ">
                    Murger Arbitrage
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-white text-md flex left-0 ml-10 py-3  font-bold text-center ">
                Risk Level
              </div>
              <div className="text-white mb-10">
                <div className="">
                  <div className="bg-[#53ACFF] cursor-pointer h-[25px] w-[130px] rounded-md text-sm ">
                    Option
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#53ACFF] cursor-pointer h-[50px] w-[200px] mt-6 rounded-md text-white text-2xl font-bold">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default RightColumn;
