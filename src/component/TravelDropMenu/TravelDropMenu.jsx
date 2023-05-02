import { React, useState } from "react";
import delIcon from "../../assets/image/user/delete.svg";
import editIcon from "../../assets/image/user/edit-icon.svg";

const TravelDropMenu = ({
  showTravelUpdatePop,
  setshowTravelUpdatePop,
  seteditTravel,
  travelData,
  showDelTravelPop,
  setShowDelTravelPop,
}) => {
  const [showTraveldrop, setShowTraveldrop] = useState(false);

  return (
    <div className="relative">
      <button
        className=""
        onClick={() => {
          setShowTraveldrop(!showTraveldrop);
        }}
      >
        ...
      </button>

      <div
        className={` absolute  top-6 right-0 bg-white rounded-lg  p-4 flex shadow-[5px_10px_25px_rgba(102,101,130,0.15)] flex-col justify-center items-start ${
          !showTraveldrop && "hidden"
        }`}
      >
        <button
          className="flex justify-between items-center"
          onClick={() => {
            setshowTravelUpdatePop(!showTravelUpdatePop);
            console.log(travelData);
            seteditTravel(travelData);
          }}
        >
          <span> Edit </span>
          <img className="ms-10" src={editIcon} alt="edit" />
        </button>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            setShowDelTravelPop(!showDelTravelPop);
          }}
        >
          Delete <img className="ms-6" src={delIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default TravelDropMenu;
