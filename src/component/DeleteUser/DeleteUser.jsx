import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delUser, getUser } from "../../redux/actions/addUserAction";
import Swal from "sweetalert2";

const DeleteUser = ({ delPop, setDelPop, data }) => {
  const dispatch = useDispatch();
  const { data: deletedUser } = useSelector((state) => state.delUser);

  const DelHandler = () => {
    if (id) {
      dispatch(delUser(id, "Backend-user"));
    }
  };

  useEffect(() => {
    if (deletedUser?.success) {
      console.log(deletedUser);
      dispatch(getUser("Backend-user"));
      setDelPop(!delPop);

      // set deletedUser to null
      dispatch({ type: "DELETE_USER_SUCCESS", payload: null });
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Success",
        text: deletedUser.message,
        showConfirmButton: false,
        // toast: true,
        timer: 1500,
        timerProgressBar: true,
      });
    } else if (deletedUser?.success === false) {
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "error",
        title: "failed",
        text: deletedUser.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
      dispatch({ type: "DELETE_USER_SUCCESS", payload: null });
    }
  }, [deletedUser]);

  const id = data._id;
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !delPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center text-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-center py-2">
          <h2 className=" font-bold">Are you sure?</h2>
        </div>
        <h3>You are about to delete a user</h3>
        <div className="flex item-center justify-center p-2 gap-6">
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={() => {
              setDelPop(!delPop);
            }}
          >
            Cancel
          </button>
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={DelHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
