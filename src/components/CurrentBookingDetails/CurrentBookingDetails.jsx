import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import CancelDialog from "../CancelDialog/cancelDialog";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Hidden } from "@mui/material";
import Swal from "sweetalert2";

const CurrentBookingDetails = () => {
  const [cancelPopUp, setCancelPopUp] = useState(false);
  const [submitDelete, setSubmitDelete] = useState(false);

  const API = process.env.REACT_APP_NODE_API;

  let { id } = useParams();

  const [response, setResponse] = useState();
  const [deny, setDeny] = useState();
  const requestedForCancel = useRef();
  const navigate = useNavigate();
  const responseHandler = async () => {
    const data = await axios.get(`${API}/booking-details/${id}`);
    setResponse(data);
  };

  const denyReq = async () => {
    const body = {
      cancellationStatus: "false",
      deleteReason: "",
      bookingStatus: "Pending",
      link: "",
      read: "false",
    };
    const updateData = await axios.post(`${API}/update-booking/${id}`, body);
    console.log(updateData);
    setDeny(!deny);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Done!",
      text: `Cancel request ${
        localStorage.getItem("userType") === "Admin" ? "denied!" : "deleted!"
      }`,
      showConfirmButton: false,
      toast: true,
      timer: 1500,
      timerProgressBar: true,
    });
    // setResponse(data);
  };

  useEffect(() => {
    responseHandler();
  }, []);

  useEffect(() => {
    responseHandler();
  }, [deny, cancelPopUp]);

  useEffect(() => {
    if (submitDelete) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Done!",
        text: "Booking requested for cancellation",
        showConfirmButton: false,
        toast: true,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  }, [submitDelete]);

  console.log(response);
  if (response?.data.data.cancellationStatus === "true")
    requestedForCancel.current = "true";
  else requestedForCancel.current = "false";

  if (response?.data)
    return (
      <>
        {console.log(response.data.data)}
        <div className="flex-col flex md:flex-row w-full py-5">
          <div className="flex sm:w-[50%] w-full p-2">
            <div className="w-[100%]">
              <img src={response.data.data.image.url} alt="img1" />
            </div>
          </div>
          <div className="sm:w-[50%] w-full p-2">
            <div className="flex justify-between items-center gap-3">
              <p className="text-3xl font-semibold my-5 w-[50%]">
                {response.data.data.title}
              </p>
              <div className="flex w-[50%]">
                <Link
                  className={`flex border px-3 py-2 rounded-md border-black me-5 font-bold
                ${
                  localStorage.getItem("userType") === "Backend-user"
                    ? requestedForCancel.current !== "true"
                      ? "flex"
                      : "hidden"
                    : "flex"
                }
                `}
                  onClick={() => {
                    setCancelPopUp(!cancelPopUp);
                  }}
                >
                  {localStorage.getItem("userType") === "Admin"
                    ? "Cancel"
                    : "Request Cancellation"}
                </Link>
                <Link
                  className={` justify-self-end border px-3 py-2 rounded-md border-black me-5 bg-red-600 text-white font-bold
                ${requestedForCancel.current !== "true" ? "hidden" : "flex"}`}
                  onClick={() => {
                    denyReq();
                  }}
                >
                  {localStorage.getItem("userType") === "Admin"
                    ? "Deny Request"
                    : "Delete Cancellation Request"}
                </Link>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="flex flex-col w-[50%] sm:text-lg text-sm text-[#8E8D98] gap-5">
                <span className="">Passenger name:</span>
                <span className="">Other passengers:</span>
                <ol>
                  {response.data.data.otherPassenger.map((item, index) => {
                    return (
                      <li className="font-semibold text-black" key={index}>
                        {index + 1}. {item.firstName} {item.lastName}
                      </li>
                    );
                  })}
                </ol>
                <span className="">Email address:</span>
                <span className="">Phone:</span>
                <span className="">Address:</span>
              </div>

              <div className="flex w-[50%] flex-col sm:text-lg text-sm gap-5 font-semibold">
                <p> {response.data.data.name}</p>
                <p> {response.data.data.passengers}3</p>
                <ul>
                  {response.data.data.otherPassenger.map((item, index) => {
                    return (
                      <li className="flex gap-4" key={index}>
                        <span className="font-light">Age:</span>
                        <span> {item.age} </span>
                        <span className="font-light">Sex:</span>
                        <span> {item.gender}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className=" overflow-x-scroll">{response.data.data.email}</p>
                <p>{response.data.data.phone}</p>
                <p> {response.data.data.address}</p>
              </div>
            </div>

            <div
              className={`flex gap-2 border border-red-600 rounded-md py-5 px-3 mt-5
               ${requestedForCancel.current === "false" ? "hidden" : "flex"}`}
            >
              <span className=" font-semibold">Cancellation Reason: </span>{" "}
              <span>{response.data.data.deleteReason}</span>
            </div>
          </div>
        </div>
        {cancelPopUp ? (
          <CancelDialog
            setCancelPopUp={setCancelPopUp}
            setSubmitDelete={setSubmitDelete}
            id={id}
          />
        ) : (
          ""
        )}
      </>
    );
};

export default CurrentBookingDetails;
