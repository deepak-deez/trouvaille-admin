import React, { useState } from "react";
import delIcon from "../../assets/images/user/delete.svg";
import editIcon from "../../assets/images/user/edit-icon.svg";

const Menu = ({ setEditPop, setEditable, data, delPop, setDelPop }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="relative">
      <button
        className="font-bold"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        ...
      </button>

      <div
        className={` w-[7rem] absolute top-0 left-5 bg-white rounded-lg p-3 px-5 flex shadow-[5px_10px_25px_rgba(102,101,130,0.15)] flex-col justify-center items-start z-50 ${
          !menu && "hidden"
        }`}
      >
        <button
          className="flex justify-between items-center w-full"
          onClick={() => {
            setEditPop((editPop) => !editPop);
            setEditable(data);
          }}
        >
          Edit
          <img className="" src={editIcon} alt="edit" />
        </button>
        <button
          className="flex justify-between items-center w-full"
          onClick={() => {
            setDelPop(!delPop);
            setEditable(data);
          }}
        >
          Delete <img className="" src={delIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
