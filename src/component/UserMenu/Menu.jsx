import React, { useState } from "react";
import delIcon from "../../assets/image/user/delete.svg";
import editIcon from "../../assets/image/user/edit-icon.svg";

const Menu = ({
  editPop,
  setEditPop,
  setEditable,
  data,
  delPop,
  setDelPop,
}) => {
  const [menu, setMenu] = useState(false);

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
          className="flex justify-between items-center"
          onClick={() => {
            setEditPop(!editPop);
            setEditable(data);
          }}
        >
          <span> Edit </span>{" "}
          <img className="ms-10" src={editIcon} alt="edit" />
        </button>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            setDelPop(!delPop);
          }}
        >
          Delete <img className="ms-6" src={delIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
