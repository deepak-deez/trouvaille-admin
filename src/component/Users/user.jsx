import { React, useEffect, useState } from "react";
import Menu from "../UserMenu/Menu";
import "./style.scss";
import AddNewUser from "../AddNewUser/AddNewUser";
import EditUser from "../EditUser/EditUser";
import DeleteUser from "../DeleteUser/DeleteUser";
import { getUser } from "../../redux/actions/addUserAction";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const [addPop, setAddPop] = useState(false);
  const [editPop, setEditPop] = useState(false);
  const [delPop, setDelPop] = useState(false);
  const [editable, setEditable] = useState("");
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getUser("Backend-user"));
  }, []);

  return (
    <>
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <table className="w-[65rem]">
            <thead>
              <tr className="tr-class">
                <th className="p-3">User Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>
                  <button
                    className="text-[#E75C54]"
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
              {data &&
                data.data.map((val, index) => {
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
                          delPop={delPop}
                          setDelPop={setDelPop}
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
      {delPop && (
        <DeleteUser delPop={delPop} setDelPop={setDelPop} data={editable} />
      )}
    </>
  );
};

export default User;
