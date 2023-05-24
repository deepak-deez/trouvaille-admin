import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CancelDialog from "../CancelDialog/cancelDialog";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CurrentBookingDetails = () => {
  const [cancelPopUp, setCancelPopUp] = useState(false);
  const [submitDelete, setSubmitDelete] = useState(false);

  const API = process.env.REACT_APP_NODE_API;

  let { id } = useParams();

  const [response, setResponse] = useState();
  const navigate = useNavigate();
  const responseHandler = async () => {
    const data = await axios.get(`${API}/booking-details/${id}`);
    setResponse(data);
  };

  useEffect(() => {
    responseHandler();
  }, []);

  useEffect(() => {
    if (submitDelete) {
      navigate("/booking-list");
    }
  }, [submitDelete]);

  console.log(response);
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
            <div className="flex justify-between items-center">
              <p className="text-3xl font-semibold">
                {response.data.data.title}
              </p>
              <Link
                className="flex justify-self-end border px-3 py-2 rounded-md border-black me-5"
                onClick={() => {
                  setCancelPopUp(!cancelPopUp);
                }}
              >
                {localStorage.getItem("userType")==='Admin'?"Cancel":"Request Cancellation"}
              </Link>
            </div>
            <div className="flex gap-2 ">
              <div className="flex flex-col w-[50%] sm:text-lg text-sm text-[#8E8D98] gap-5">
                <span className="">Passenger name:</span>
                <span className="">Other passengers:</span>
                <ol>
                  {response.data.data.otherPassenger.map((item,index)=>{
                    return(
                      <li>{item.firstName} {item.lastName}</li>
                    )
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
                  {response.data.data.otherPassenger.map((item,index)=>{
                    return(
                      <li className="flex gap-4">
                        <span>Age: {item.age} </span>
                        <span>Sex: {item.gender}</span>
                      </li>
                    )
                  })}
                </ul>
                <p className=" overflow-x-scroll">{response.data.data.email}</p>
                <p>{response.data.data.phone}</p>
                <p> {response.data.data.address}</p>
              </div>
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
