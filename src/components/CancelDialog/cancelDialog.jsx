import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CancelDialog = (props) => {
  const { setCancelPopUp, id } = props;
  const reasonRef = useRef();
  const [response, setResponse] = useState();
  const userType = localStorage.getItem("userType");
  console.log(userType);
  const API = process.env.REACT_APP_NODE_API;
  const handleResponse = async () => {
    const data = await axios.delete(`${API}/delete-booking/${userType}/${id}`);
    setResponse(data);
  };

  const submitCancelRequest = async (reason) => {
  
      const data = await axios.delete(
        `${API}/delete-booking/${userType}/${id}`
      );
      setResponse(data)
      const body = {
        cancellationStatus: "true",
        deleteReason: reason,
        link: data.data.data.link,
      };
      const updateData = await axios.post(`${API}/update-booking/${id}`, body);
      setResponse(updateData);
      console.log(updateData);

   
  };
 
  const handleClick = () => {
    if (userType === "Backend-user") {
    submitCancelRequest(reasonRef.current.value);
  } else if (userType === "Admin") 
  handleResponse();
    setCancelPopUp(false);
    props.setSubmitDelete(true);
  };
  console.log(response);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center addUser   h-[100vh]">
      <div className="flex place-items-center flex-col justify-center m-auto md:w-[28%] bg-white p-4 width:90% sm:w-[30%]">
        <div className="flex w-full justify-between py-2">
          <h2 className=" font-bold">Are you sure?</h2>
          <button
            className=""
            onClick={() => {
              setCancelPopUp(false);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <p className="my-5">You are about to cancel the booking</p>
        <form className="flex flex-col w-full px-8">
          <textarea
            type="text"
            rows="5"
            // cols="25"
            placeholder="Reason"
            className="  border-2 p-2 "
            ref={reasonRef}
            required={
              localStorage.getItem("userType") == "Backend-user"
                ? "required"
                : ""
            }
          />
        </form>
        <Link
          className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
          onClick={handleClick}
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default CancelDialog;
