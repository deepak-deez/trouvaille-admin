import React, { useEffect, useState } from "react";
import delIcon from "../../assets/images/user/delete.svg";
import editIcon from "../../assets/images/user/edit-icon.svg";
import { useNavigate } from "react-router-dom";
import UpdateTripForm from "../UpdatetripForm/UpdateTripForm";
import { useDispatch } from "react-redux";
import { deleteTrip } from "../../redux/actions/tripAction";

const TripDropMenu = ({
  editData,
  setEditData,
  delPop,
  setDelPop,
  deleteTripState,
  setdeleteTripState,
}) => {
  // console.log(editData);
  const [showPop, setShowPop] = useState(false);
  const dispatch = useDispatch();
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
        className={` absolute top-5 z-[70] bg-white rounded-lg w-[40%] p-2 flex shadow-[5px_10px_25px_rgba(102,101,130,0.15)] flex-col justify-center items-start ${
          !showPop && " hidden "
        }`}
      >
        <button
          className="flex justify-between items-center w-full"
          onClick={() => {
            navigate(`/update-module/trip-package/${editData._id}`);
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
            setEditData(editData);
          }}
        >
          Delete <img src={delIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default TripDropMenu;
