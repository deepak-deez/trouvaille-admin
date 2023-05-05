import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { addNewUser, getUser } from "../../redux/actions/addUserAction";

const AddNewUser = ({ setAddPop, addPop }) => {
  const { data: addedUser } = useSelector((state) => state.addNewUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const addUserHandler = () => {
    if (name && email) {
      dispatch(addNewUser(name, email, "Backend-user"));
      setName("");
      setEmail("");
    }
  };
  useEffect(() => {
    if (addedUser) {
      setAddPop(!addPop);
      dispatch(getUser("Backend-user"));
    }
  }, [addedUser]);
  console.log(addedUser);

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
              setEmail(e.target.value);
            }}
          />
        </form>
        <div className="flex item-center justify-center">
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={addUserHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
