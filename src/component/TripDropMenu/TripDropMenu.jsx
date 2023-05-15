import React, { useState } from "react";
import delIcon from "../../assets/image/user/delete.svg";
import editIcon from "../../assets/image/user/edit-icon.svg";
import { useNavigate } from "react-router-dom";
import UpdateTripForm from "../UpdatetripForm/UpdateTripForm";

const TripDropMenu = ({ editData, setEditData, delPop, setDelPop }) => {
  const [showPop, setShowPop] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="relative">
      <button
        className=""
        onClick={() => {
          setShowPop(!showPop);
        }}
      >
        ...
      </button>

      <div
        className={` absolute top-0 bg-white rounded-lg w-[45%] p-2 flex shadow-[5px_10px_25px_rgba(102,101,130,0.15)] flex-col justify-center items-start ${
          !showPop && "hidden"
        }`}
      >
        <button
          className="flex justify-between items-center w-full"
          onClick={() => {
            navigate(`/trip-list/edit-trip/${editData.id}`);
            console.log(editData);
          }}
        >
          Edit
          <img src={editIcon} alt="edit" />
        </button>
        <button
          className="flex justify-between items-center w-full"
          onClick={() => {
            setDelPop(!delPop);
          }}
        >
          Delete <img src={delIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default TripDropMenu;
