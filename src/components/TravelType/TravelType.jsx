import { React, useState, useEffect } from "react";
import travelData from "./travelDB";
import browserIcon from "../../assets/images/travel-type/independent-icon.svg";
import AddNewPop from "../AddNewPop/AddNewPop";
import UpdatePop from "../UpdatePop/UpdatePop";
import DeletePop from "../DeletePop/DeletePop";
import DotMenu from "../DotMenu/DotMenu";
import { useDispatch, useSelector } from "react-redux";
import { getTrip } from "../../redux/actions/tripAction";

const TravelType = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [editData, setEditData] = useState("");
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.getTrip);

  useEffect(() => {
    dispatch(getTrip("travel"));
  }, []);

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
          {data &&
            data?.data &&
            data.data.map((item, index) => {
              console.log("item : ",item.icon.url);
              const icon=item.icon.url;

              return (
                <div className="w-full p-5 gap-4 h-[25vh]" key={index}>
                  <div className="p-4 bg-white text-center rounded shadow-md">
                    <div className="flex justify-end">
                      <div>
                        <DotMenu
                          updateData={item}
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
                        src={icon}
                        alt=""
                        className="h-10"
                      />
                    </div>
                    <h3 className="text-center font-semibold py-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 w-full md:h-[10vh] overflow-y-scroll ">
                      {item.description}
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
          feature="travel"
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
          feature="travel"
        />
      )}

      {showDelPop && (
        <DeletePop
          showDelPop={setShowDelPop}
          setShowDelPop={setShowDelPop}
          heading="Trip Categories"
          feature="travel"
          updateData={editData}
        />
      )}
    </>
  );
};

export default TravelType;
