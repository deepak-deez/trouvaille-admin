import { React, useState } from "react";
import TripDetails from "./tripData";
import browseTripIcon from "../../assets/image/trip/browse-trip-icon.svg";
import DotMenu from "../DotMenu/DotMenu";
import AddNewPop from "../AddNewPop/AddNewPop";
import UpdatePop from "../UpdatePop/UpdatePop";
import DeletePop from "../DeletePop/DeletePop";

const Trip = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [editData, setEditData] = useState("");
  return (
    <>
      <div className="w-full p-5">
        <div className="flex justify-end">
          <button
            className="text-[#E75C54] font-bold"
            onClick={() => {
              setShowAdd(!showAdd);
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
                      <DotMenu
                        updateData={data}
                        showDelPop={showDelPop}
                        setShowDelPop={setShowDelPop}
                        showUpdatePop={showUpdatePop}
                        setShowUpdatePop={setShowUpdatePop}
                        setEditData={setEditData}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={data.icon} alt="" />
                  </div>
                  <h3 className="text-center">{data.title}</h3>
                  <p className="text-gray-600 w-full md:h-[10vh] overflow-scroll">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showAdd && (
        <AddNewPop
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          heading=" New Trip Categories"
          icon={browseTripIcon}
          titleHeading="Trip "
        />
      )}
      {showUpdatePop && (
        <UpdatePop
          showUpdatePop={showUpdatePop}
          setShowUpdatePop={setShowUpdatePop}
          updateData={editData}
          heading="Trip Categories"
          titleHeading="Trip"
        />
      )}

      {showDelPop && (
        <DeletePop
          showDelPop={setShowDelPop}
          setShowDelPop={setShowDelPop}
          heading="Trip Categories"
        />
      )}
    </>
  );
};

export default Trip;
