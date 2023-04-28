import { React, useState } from "react";
import amenitiesData from "./amenitiesData";

const AmenitiesTable = () => {
  const [showAddPop, setShowAddPop] = useState(false);
  return (
    <>
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <table className="w-[100%]">
            <thead>
              <tr className="tr-class">
                <th className="p-3">Amenity Title</th>
                <th>Description</th>
                <th>
                  <button
                    className="text-[#E75C54]"
                    onClick={() => {
                      setShowAddPop(!showAddPop);
                    }}
                  >
                    Add New Occasion
                    <i className=" ms-5 red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {amenitiesData.map((data, index) => {
                return (
                  <tr className=" tr-class text-center" key={index}>
                    <td className="td-class font-bold flex items-center p-3">
                      <img className="mr-2" src={data.icon} alt="" />
                      {data.heading}
                    </td>
                    <td className="td-class">{data.desc}</td>
                    <td className=""></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AmenitiesTable;
