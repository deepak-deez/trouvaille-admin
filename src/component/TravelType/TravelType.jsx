import { React, useState } from "react";
import travelData from "./travelDB";
import browserIcon from "../../assets/image/travel-type/independent-icon.svg";
import AddNewPop from "../AddNewPop/AddNewPop";
import UpdatePop from "../UpdatePop/UpdatePop";
import DeletePop from "../DeletePop/DeletePop";
import DotMenu from "../DotMenu/DotMenu";

const TravelType = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
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
      {showAdd && (
        <AddNewPop
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          heading="Travel Type"
          icon={browserIcon}
          titleHeading="Travel Type"
        />
      )}
      {showUpdatePop && (
        <UpdatePop
          showUpdatePop={showUpdatePop}
          setShowUpdatePop={setShowUpdatePop}
          updateData={editData}
          heading="Travel Type"
          icon={browserIcon}
          titleHeading="Travel Type"
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

export default TravelType;
