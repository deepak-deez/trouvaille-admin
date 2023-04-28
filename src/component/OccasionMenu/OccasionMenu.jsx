import { React, useState } from "react";
import delIcon from "../../assets/image/user/delete.svg";
import editIcon from "../../assets/image/user/edit-icon.svg";

const OccasionMenu = ({
  showUpdateOccasionPop,
  setshowUpdateOccasionPop,
  setUpdateOccasion,
  OccasionDB,
  setDeleteOccasionPop,
  deleteOccasionPop,
}) => {
  const [showOccasionMenu, setshowOccasionMenu] = useState(false);
  return (
    <div className="relative">
      <button
        className=""
        onClick={() => {
          setshowOccasionMenu(!showOccasionMenu);
        }}
      >
        ...
      </button>

      <div
        className={` absolute top-0 bg-white rounded-lg w-[45%] p-3 flex shadow-[5px_10px_25px_rgba(102,101,130,0.15)] flex-col justify-center items-start ${
          !showOccasionMenu && "hidden"
        }`}
      >
        <button
          className="flex justify-between items-center"
          onClick={() => {
            console.log(showUpdateOccasionPop);
            setshowUpdateOccasionPop(!showUpdateOccasionPop);
            setUpdateOccasion(OccasionDB);
          }}
        >
          Edit
          <img className="ms-10" src={editIcon} alt="edit" />
        </button>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            setDeleteOccasionPop(!deleteOccasionPop);
          }}
        >
          Delete <img className="ms-6" src={delIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default OccasionMenu;
