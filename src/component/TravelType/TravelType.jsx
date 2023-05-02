import { React, useState } from "react";
import travelData from "./travelDB";
import AddNewTravel from "../AddNewTravelType/AddNewTravel";

const TravelType = () => {
  const [showAddTravel, setShowAddTravel] = useState(false);
  return (
    <>
      <div className="w-full p-5">
        <div className="flex justify-end">
          <button
            className="text-[#E75C54] font-bold"
            onClick={() => {
              setShowAddTravel(!showAddTravel);
              console.log("hii");
            }}
          >
            Add Travel Type
            <i className=" ml-2 red-dot fa-solid fa-circle-plus"></i>
          </button>
        </div>
        <div className="grid lg:grid-cols-4">
          {travelData.map((data, index) => {
            return (
              <div className="w-full p-5 gap-4 " key={index}>
                <div className="p-8 bg-white md:h-[30vh] rounded shadow-md">
                  <div className="flex justify-end">
                    <div>{/* travel menu */}</div>
                  </div>
                  <div className="flex justify-center py-2">
                    <img
                      className="lg:w-[30%] h-[3rem]"
                      src={data.icon}
                      alt=""
                    />
                  </div>
                  <h3 className="text-center font-semibold py-2">
                    {data.title}
                  </h3>
                  <p className="text-gray-600 w-full md:h-[10vh] overflow-scroll">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showAddTravel && (
        <AddNewTravel
          showAddTravel={showAddTravel}
          setShowAddTravel={setShowAddTravel}
        />
      )}
    </>
  );
};

export default TravelType;
