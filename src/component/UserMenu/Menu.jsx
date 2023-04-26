import React, { useState } from "react";
import delIcon from "../../assets/image/user/delete.svg";
import editIcon from "../../assets/image/user/edit-icon.svg";

const Menu = ({ editPop, setEditPop, setEditable, data }) => {
  const [menu, setMenu] = useState(false);

  // const [editPop, setEditPop] = useState(false);
  return (
    <div className="relative">
      <button
        className=""
        onClick={() => {
          setMenu(!menu);
        }}
      >
        ...
      </button>

      <div
        className={` absolute top-0 bg-white rounded-lg w-[45%] p-3 flex shadow-[5px_10px_25px_rgba(102,101,130,0.15)] flex-col justify-center items-start ${
          !menu && "hidden"
        }`}
      >
        <button
          className="flex justify-center items-center"
          onClick={() => {
            setEditPop(!editPop);
            setEditable(data);
          }}
        >
          Edit <img className="ms-6" src={editIcon} alt="edit" />
        </button>
        <button className="flex justify-center items-center  ">
          Delete <img className="ms-6" src={delIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
