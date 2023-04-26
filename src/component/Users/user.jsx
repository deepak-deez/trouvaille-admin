import React, { useState } from "react";
import userData from "./UserData";
import Menu from "../UserMenu/Menu";
import "./style.scss";
import AddNewUser from "../AddNewUser/AddNewUser";
import EditUser from "../EditUser/EditUser";

const User = () => {
  const [addPop, setAddPop] = useState(false);
  const [editPop, setEditPop] = useState(false);
  const [editable, setEditable] = useState("");
  console.log(editable, "editable");
  return (
    <>
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll">
          <table className=" w-[75rem]">
            <thead>
              <tr className="tr-class">
                <th className="p-3">User Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>
                  <button
                    className="text-[#E75C54]"
                    // href="adduser"
                    onClick={() => {
                      setAddPop(!addPop);
                    }}
                  >
                    Add A New User
                    <i className=" red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((val, index) => {
                return (
                  <tr className=" tr-class text-center" key={index}>
                    <td className="td-class font-bold p-3">{val.userName}</td>
                    <td className="td-class">{val.email}</td>
                    <td className="td-class">{val.phone}</td>
                    <td className="">
                      <Menu
                        editPop={editPop}
                        setEditPop={setEditPop}
                        setEditable={setEditable}
                        data={val}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {addPop && <AddNewUser setAddPop={setAddPop} addPop={addPop} />}
      {editPop && (
        <EditUser editPop={editPop} setEditPop={setEditPop} data={editable} />
      )}
    </>
  );
};

export default User;
