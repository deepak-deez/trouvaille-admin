import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { addNewUser, getUser } from "../../redux/actions/addUserAction";
import Swal from "sweetalert2";
import validator from "validator";
import LoadingScreen from "../Loading/LoadingScreen";

const AddNewUser = ({ setAddPop, addPop }) => {
  const { data } = useSelector((state) => state.getUser);
  const { data: addedUser, loading } = useSelector((state) => state.addNewUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  console.log(data);
  console.log(addedUser);
  const validateEmail = (e) => {
    setEmail(e.target.value);

    if (validator.isEmail(email)) {
      setError(null);
    } else {
      setError("Enter valid Email!");
    }
  };

  const addUserHandler = () => {
    if (name && email) {
      dispatch(addNewUser(name, email, "Backend-user"));
      setName("");
      setEmail("");
    } else {
      Swal.fire({
        className: "pop-top",
        position: "top",
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
        showConfirmButton: false,
        width: "40vh",
        // toast: true,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

  useEffect(() => {
    if (addedUser?.success) {
      console.log(addedUser);
      dispatch(getUser("Backend-user"));
      setAddPop(!addPop);

      // set addedUser to null
      dispatch({ type: "ADD_USER_SUCCESS", payload: null });
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "success",
        title: "Success",
        text: addedUser.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else if (addedUser?.success === false) {
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "error",
        title: "failed",
        text: addedUser.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
      dispatch({ type: "ADD_USER_SUCCESS", payload: null });
    }
  }, [addedUser]);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser   h-[100vh] ${
        !addPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold">Add New User</h2>
          <button
            className=""
            onClick={() => {
              setAddPop(!addPop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="flex flex-col ">
          <label className="text-sm font-light py-2" htmlFor="Name">
            Name
          </label>
          <input
            className="border-2"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="text-sm py-2 font-light" htmlFor="email">
            Email Address
          </label>
          <input
            className="border-2"
            value={email}
            type="email"
            onChange={(e) => {
              validateEmail(e);
            }}
          />
        </form>

        {error && <h2 style={{ color: "red" }}>{error}</h2>}

        <div className="flex item-center justify-center">
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={addUserHandler}
          >
            {loading ? <LoadingScreen /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;