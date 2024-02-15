import { TbReportMoney } from "react-icons/tb";
import { FaFileLines } from "react-icons/fa6";
import { TbArrowRampRight } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import React from "react";

const Data = [
  {
    id: "1",
    Alert_name: "AMZN",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "2",
    Alert_name: "TSLAA",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "3",
    Alert_name: "ABQQ",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "4",
    Alert_name: "MSFT",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "5",
    Alert_name: "PYPL",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "6",
    Alert_name: "NFLX",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "7",
    Alert_name: "NFLX",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "8",
    Alert_name: "NFLX",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "9",
    Alert_name: "NFLX",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "10",
    Alert_name: "NFLX",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "11",
    Alert_name: "NFLX",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
  {
    id: "12",
    Alert_name: "NFLX",
    Alert_p: "-0.25%",
    Alert_n: "200",
    Alert_Risk: "Low Risk",
  },
];

export default function Alerts() {
  const toggleExpand = (id) => {
    alert(id);
  };

  const getAlertColorClass = (name) => {
    if (name === "TSLA" || name === "ABQQ" || name === "PYPL") {
      return "text-[#118F4B]";
    } else {
      return "text-red-500";
    }
  };
  return (
    <div className="rounded-sm flex-1">
      <div className=" rounded-sm mt-3 ">
        <table className="w-full text-white table-auto  ">
          <tbody>
            {Data.map((alert) => (
              <React.Fragment key={alert.id}>
                <tr
                  key={alert.id}
                  className="flex flex-row justify-around text-center hover:bg-black items-center mb-2 h-[50px] bg-[#333333] rounded-md w-full cursor-pointer"
                  onClick={() => toggleExpand(alert.id)}
                >
                  <td className="flex flex-row  items-center ">
                    <TbReportMoney size={30} className="mr-2" />
                    {alert.Alert_name}
                  </td>
                  <td className="flex flex-row items-center">
                    <FaFileLines size={30} className="mr-2" />
                    {alert.Alert_n}
                  </td>
                  <td
                    className={
                      "flex items-center flex-row " +
                      getAlertColorClass(alert.Alert_name, alert.Alert_p)
                    }
                  >
                    <TbArrowRampRight size={30} className="mr-2" />
                    {alert.Alert_p}
                  </td>
                  <td className="flex items-center">
                    <FaRegMoneyBillAlt size={30} className="mr-2" />
                    {alert.Alert_Risk}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
