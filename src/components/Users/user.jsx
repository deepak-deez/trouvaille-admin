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
import Pagination from "../Pagination/Pagination";
import store from "../../redux/store";

let PageSize = 10;

const User = () => {
  const [addPop, setAddPop] = useState(false);
  const [editPop, setEditPop] = useState(false);
  const [delPop, setDelPop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editable, setEditable] = useState("");
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.getUser);
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const storeData = store.getState();
  console.log(storeData);
  const userType = storeData.userLogin.userDetails.data.userDetails.userType;
  

  useEffect(() => {
    dispatch(getUser("Backend-user"));
    console.log(userType);
  }, []);

  return (
    <>
      {/* <LoadingScreen /> */}
      {loading && <LoadingScreen />}
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <div className="w-full">
            <div>
              <div className={`tr-class sm:grid items-center text-[#8383A9] text-center ${(userType=="Admin")? "sm:grid-cols-4" : "sm:grid-cols-3"}  gap-2`}>
                <p className="p-3 hidden sm:block ">User Name</p>
                <p className="p-3 hidden sm:block">Email Address</p>
                <p className="p-3 hidden sm:block">Phone Number</p>
                <div className={`p-3 flex items-center justify-center ${(userType=="Admin")? "flex" : "hidden"}`}>
                  <button
                    className="flex items-center text-[#E75C54] "
                    onClick={() => {
                      setAddPop(!addPop);
                    }}
                  >
                    <span>Add A New User</span>
                    <i className="ms-2 red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div>
              {data &&
                data.data
                  .slice(firstPageIndex, lastPageIndex)
                  .map((val, index) => {
                    return (
                      <div
                        className={`sm:grid ${(userType=="Admin")? "sm:grid-cols-4" : "sm:grid-cols-3"} flex flex-col gap-2 sm:py-4 tr-class `}
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
                          < Menu
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
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data && data?.data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default User;