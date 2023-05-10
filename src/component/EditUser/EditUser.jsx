import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getUser } from "../../redux/actions/addUserAction";
import Swal from "sweetalert2";

const EditUser = ({ editPop, setEditPop, data }) => {
  const { data: updatedUser } = useSelector((state) => state.updateUser);
  const [name, setName] = useState(data.userName);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [error, setError] = useState(null);

  const id = data._id;
  const dispatch = useDispatch();

  const updateHandler = () => {
    console.log(id);
    if (email || phone || name) {
      dispatch(updateUser(id, name, email, phone, "Backend-user"));
    }
  };

  useEffect(() => {
    if (updatedUser?.success) {
      console.log(updatedUser);
      dispatch(getUser("Backend-user"));
      setEditPop(!editPop);

      // set addedUser to null
      dispatch({ type: "UPDATE_USER_SUCCESS", payload: null });
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "success",
        title: "Success",
        text: updatedUser.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else if (updatedUser?.success === false) {
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "error",
        title: "failed",
        text: updatedUser.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
      dispatch({ type: "UPDATE_USER_SUCCESS", payload: null });
    }
  }, [updatedUser]);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !editPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold">Update User Details</h2>
          <button
            className=""
            onClick={() => {
              setEditPop(!editPop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="flex flex-col ">
          <label className="text-sm font-light py-2">Name</label>
          <input
            className="border-2 p-2"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
          <label className="text-sm py-2 font-light">Email Address</label>
          <input
            className="border-2 p-2"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
          <label className="text-sm py-2 font-light">Phone Number</label>
          <input
            className="border-2 p-2"
            type="text"
            value={phone}
            onChange={(e) => {
              let phoneVal = e.target.value;
              setPhone(phoneVal);
              if (phoneVal.length > 10) {
                console.log(phoneVal.length);
                setError("Enter Valid Number");
              } else if (phoneVal.length === 10) {
                setError("Valid Number");
              }
            }}
          />
          {error && <h2 style={{ color: "red" }}>{error}</h2>}
        </form>
        <div className="flex item-center justify-center gap-6 ">
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={() => {
              setEditPop(!editPop);
            }}
          >
            Cancel
          </button>
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={updateHandler}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
