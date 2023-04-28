import { React, useState } from "react";
import delIcon from "../../assets/image/user/delete.svg";
import editIcon from "../../assets/image/user/edit-icon.svg";

const TripAction = ({
  setEditPop,
  editPop,
  setEditTrip,
  TripData,
  delTripPop,
  setDelTripPop,
}) => {
  const [tripAction, setTripAction] = useState(false);

  return (
    <div className="relative">
      <button
        className=""
        onClick={() => {
          setTripAction(!tripAction);
        }}
      >
        ...
      </button>

      <div
        className={` absolute  top-6 right-0 bg-white rounded-lg  p-4 flex shadow-[5px_10px_25px_rgba(102,101,130,0.15)] flex-col justify-center items-start ${
          !tripAction && "hidden"
        }`}
      >
        <button
          className="flex justify-between items-center"
          onClick={() => {
            setEditPop(!editPop);
            console.log(TripData);
            setEditTrip(TripData);
          }}
        >
          <span> Edit </span>{" "}
          <img className="ms-10" src={editIcon} alt="edit" />
        </button>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            setDelTripPop(!delTripPop);
          }}
        >
          Delete <img className="ms-6" src={delIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default TripAction;
