import { React, useEffect, useState } from "react";
import Menu from "../UserMenu/Menu";
import "./style.scss";
import AddNewUser from "../AddNewUser/AddNewUser";
import EditUser from "../EditUser/EditUser";
import DeleteUser from "../DeleteUser/DeleteUser";
import { getUser } from "../../redux/actions/addUserAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../Loading/LoadingScreen";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const User = () => {
  const [addPop, setAddPop] = useState(false);
  const [editPop, setEditPop] = useState(false);
  const [delPop, setDelPop] = useState(false);
  const [editable, setEditable] = useState("");
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getUser("Backend-user"));
  }, []);

  return (
    <>
      {/* <LoadingScreen /> */}
      {loading && <LoadingScreen />}
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <div className="w-full">
            <div>
              <div className="tr-class sm:grid items-center sm:grid-cols-4 gap-2">
                <th className="p-3 hidden sm:block">User Name</th>
                <th className="p-3 hidden sm:block">Email Address</th>
                <th className="p-3 hidden sm:block">Phone Number</th>
                <th className="p-3 flex items-center justify-center">
                  <button
                    className="flex items-center text-[#E75C54] "
                    onClick={() => {
                      setAddPop(!addPop);
                    }}
                  >
                    <span>Add A New User</span>
                    <i className="ms-2 red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </th>
              </div>
            </div>
            <div>
              {data &&
                data.data.map((val, index) => {
                  return (
                    <div
                      className="sm:grid sm:grid-cols-4 flex flex-col gap-2  tr-class "
                      key={index}
                    >
                      <div className="td-class font-bold flex justify-between sm:justify-center order-2 sm:order-1">
                        <div className="sm:hidden">
                          <PersonIcon />
                        </div>
                        <span>{val.userName}</span>
                      </div>
                      <div className="td-class flex justify-between order-3 sm:justify-center sm:order-2">
                        <div className="sm:hidden">
                          <EmailIcon />
                        </div>
                        <span>{val.email}</span>
                      </div>
                      <div className="td-class flex justify-between order-4 sm:justify-center sm:order-3">
                        <div className="sm:hidden">
                          <PhoneIcon />
                        </div>
                        <span>{val.phone}</span>
                      </div>
                      <div className="flex justify-start ms-2 sm:justify-center order-1 sm:order-4 ">
                        <Menu
                          editPop={editPop}
                          setEditPop={setEditPop}
                          setEditable={setEditable}
                          data={val}
                          delPop={delPop}
                          setDelPop={setDelPop}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
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
