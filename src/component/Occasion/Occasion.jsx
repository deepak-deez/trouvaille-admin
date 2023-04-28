import { React, useState } from "react";
import OccasionDb from "./occasionData";
import AddOccasion from "../AddNewOccasion/AddNewOccasion";
import DeleteOccasion from "../DeleteOccasion/DeleteOccasion";
import UpdateOccasion from "../UpdateOccasion/UpdateOccasion";
import OccasionMenu from "../OccasionMenu/OccasionMenu";

const Occasion = () => {
  const [showOccasionsPop, setShowOccasionsPop] = useState(false);
  const [showUpdateOccasionPop, setshowUpdateOccasionPop] = useState(false);
  const [updateOccasion, setUpdateOccasion] = useState(false);
  const [deleteOccasionPop, setDeleteOccasionPop] = useState(false);
  return (
    <>
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <table className="w-[100%]">
            <thead>
              <tr className="tr-class">
                <th className="p-3">Occasion Title</th>
                <th>Description</th>
                <th>
                  <button
                    className="text-[#E75C54]"
                    onClick={() => {
                      setShowOccasionsPop(!showOccasionsPop);
                    }}
                  >
                    Add New Occasion
                    <i className=" ms-5 red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {OccasionDb &&
                OccasionDb.map((data, index) => {
                  return (
                    <tr className=" tr-class text-center" key={index}>
                      <td className="td-class font-bold flex items-center p-3">
                        <img className="mr-2" src={data.icon} alt="" />
                        {data.heading}
                      </td>
                      <td className="td-class">{data.desc}</td>
                      <td className="">
                        <OccasionMenu
                          OccasionDB={data}
                          setUpdateOccasion={setUpdateOccasion}
                          showUpdateOccasionPop={showUpdateOccasionPop}
                          setshowUpdateOccasionPop={setshowUpdateOccasionPop}
                          deleteOccasionPop={deleteOccasionPop}
                          setDeleteOccasionPop={setDeleteOccasionPop}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {showOccasionsPop && (
        <AddOccasion
          showOccasionsPop={showOccasionsPop}
          setShowOccasionsPop={setShowOccasionsPop}
        />
      )}
      {showUpdateOccasionPop && (
        <UpdateOccasion
          showUpdateOccasionPop={showUpdateOccasionPop}
          setshowUpdateOccasionPop={setshowUpdateOccasionPop}
          OccasionDB={updateOccasion}
        />
      )}
      {deleteOccasionPop && (
        <DeleteOccasion
          deleteOccasionPop={deleteOccasionPop}
          setDeleteOccasionPop={setDeleteOccasionPop}
        />
      )}
    </>
  );
};

export default Occasion;
