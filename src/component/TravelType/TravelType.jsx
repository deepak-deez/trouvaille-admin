import { React, useState } from "react";
import travelData from "./travelDB";
import AddNewTravel from "../AddNewTravelType/AddNewTravel";
import TravelDropMenu from "../TravelDropMenu/TravelDropMenu";
import UpdateTravelType from "../UpdateTraveType/UpdateTravelType";
import DeleteTravelType from "../DeleteTravelType/DeleteTravelType";

const TravelType = () => {
  const [showAddTravel, setShowAddTravel] = useState(false);
  const [showTravelUpdatePop, setshowTravelUpdatePop] = useState(false);
  const [showDelTravelPop, setShowDelTravelPop] = useState(false);
  const [editTravel, seteditTravel] = useState("");
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
                <div className="p-4 bg-white rounded shadow-md">
                  <div className="flex justify-end">
                    <div>
                      <TravelDropMenu
                        travelData={data}
                        showDelTravelPop={showDelTravelPop}
                        setShowDelTravelPop={setShowDelTravelPop}
                        showTravelUpdatePop={showTravelUpdatePop}
                        setshowTravelUpdatePop={setshowTravelUpdatePop}
                        seteditTravel={seteditTravel}
                      />
                    </div>
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
      {showTravelUpdatePop && (
        <UpdateTravelType
          showTravelUpdatePop={showTravelUpdatePop}
          setshowTravelUpdatePop={setshowTravelUpdatePop}
          travelData={editTravel}
        />
      )}

      {showDelTravelPop && (
        <DeleteTravelType
          showDelTravelPop={showDelTravelPop}
          setShowDelTravelPop={setShowDelTravelPop}
        />
      )}
    </>
  );
};

export default TravelType;
