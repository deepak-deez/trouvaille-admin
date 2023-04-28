import { React, useState } from "react";
import TripDetails from "./tripData";
import AddNewTrip from "../AddNewTrip/AddNewTrip";
import TripAction from "../TripAction/TripAction";
import EditTrip from "../EditTrip/EditTrip";
import DeleteTrip from "../DeleteTrip/DeleteTrip";

const Trip = () => {
  const [tripPop, setTripPop] = useState(false);
  const [editPop, setEditPop] = useState(false);
  const [delTripPop, setDelTripPop] = useState(false);
  const [editTrip, setEditTrip] = useState("");
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
                    <div>
                      <TripAction
                        editPop={editPop}
                        setEditPop={setEditPop}
                        setEditTrip={setEditTrip}
                        TripData={data}
                        delTripPop={delTripPop}
                        setDelTripPop={setDelTripPop}
                      />
                    </div>
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
      {editPop && (
        <EditTrip
          editPop={editPop}
          setEditPop={setEditPop}
          TripData={editTrip}
        />
      )}
      {delTripPop && (
        <DeleteTrip delTripPop={delTripPop} setDelTripPop={setDelTripPop} />
      )}
    </>
  );
};

export default Trip;
