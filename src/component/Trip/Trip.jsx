import { React, useState } from "react";
import TripDetails from "./tripData";
import AddNewTrip from "../AddNewTrip/AddNewTrip";
import TripAction from "../TripAction/TripAction";

const Trip = () => {
  const [tripPop, setTripPop] = useState(false);
  const [editPop, setEditPop] = useState(false);
  const [delPop, setDelPop] = useState(false);
  const [editable, setEditable] = useState("");
  return (
    <>
      <div className="w-full p-5">
        <div className="flex justify-end">
          <button
            className="text-[#E75C54] font-bold"
            onClick={() => {
              setTripPop(!tripPop);
              console.log("hii");
            }}
          >
            Add Category
            <i className=" ml-2 red-dot fa-solid fa-circle-plus"></i>
          </button>
        </div>
        <div className="grid lg:grid-cols-4">
          {TripDetails.map((data, index) => {
            return (
              <div className="w-full p-5 gap-4" key={index}>
                <div className="p-8 bg-white rounded shadow-md">
                  <div className="flex justify-end">
                    <button>
                      <TripAction />
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <img src={data.icon} alt="" />
                  </div>
                  <h3 className="text-center">{data.heading}</h3>
                  <p className="text-gray-600 w-full md:h-[10vh] overflow-scroll">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {tripPop && <AddNewTrip tripPop={tripPop} setTripPop={setTripPop} />}
    </>
  );
};

export default Trip;
