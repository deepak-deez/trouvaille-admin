import { React, useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import CancelDialog from "../CancelDialog/cancelDialog";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleBooking,
  updateBooking,
  getBooking,
} from "../../redux/actions/bookingActions";
import Swal from "sweetalert2";
import LoadingScreen from "../Loading/LoadingScreen";
import store from "../../redux/store";

const CurrentBookingDetails = () => {
  const { data, loading } = useSelector((state) => state.getSingleBooking);
  const { data: updatedBooking } = useSelector((state) => state.updateBooking);
  const { data: deleted } = useSelector((state) => state.deleteBooking);
  const dispatch = useDispatch();
  const [cancelPopUp, setCancelPopUp] = useState(false);
  const [submitDelete, setSubmitDelete] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getSingleBooking(id));
  }, []);

  const [deny, setDeny] = useState(updatedBooking);
  const requestedForCancel = useRef();
  const navigate = useNavigate();
  const storeData = store.getState();
  const userType = storeData.userLogin.userDetails.userDetails.userType;

  const denyReq = async () => {
    dispatch(updateBooking(id, "false", "", "Pending", "", "false"));

    setDeny(!deny);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Done!",
      text: `Cancel request ${
        userType === "Admin" ? "denied!" : "deleted!"
      }`,
      showConfirmButton: false,
      toast: true,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  useEffect(() => {
    dispatch(getSingleBooking(id));
  }, [deny, cancelPopUp]);

  useEffect(() => {
    if (submitDelete) {
      dispatch(getBooking());

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Done!",
        text: `Booking  ${
          userType === "Admin"
            ? "cancelled!"
            : "requested for cancellation!"
        }`,
        showConfirmButton: false,
        toast: true,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  }, [submitDelete]);

  if (data?.data.cancellationStatus === "true")
    requestedForCancel.current = "true";
  else requestedForCancel.current = "false";
  if (loading) {
    return <LoadingScreen />;
  } else if (data && data?.data)
    return (
      <>
        <div className="flex-col flex md:flex-row w-full item-center py-5">
          <div className="flex md:w-[50%] w-full p-2">
            <div className="w-[100%] md:mx-4 md:mt-4 mx-2 my-2 flex items-center justify-center md:justify-start">
              <img className="object-cover w-[350px] h-[350px] sm:w-full md:w-full md:h-[400px] rounded-md" src={data?.data.image.url} alt="img1" />
            </div>
          </div>
          <div className="mx-2 md:w-[50%] self-center sm:w-full sm:self-start p-2 ">
            <div className="flex justify-between items-center gap-3">
              <p className="text-3xl font-semibold my-5 w-[50%]">
                {data.data.title}
              </p>
              <div className="flex w-[50%]">
                <Link
                  className={`flex border px-3 py-2 rounded-md border-black me-5 font-bold
                ${
                  userType === "Backend-user"
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
                  {userType === "Admin"
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
                  {userType === "Admin"
                    ? "Deny Request"
                    : "Delete Cancellation Request"}
                </Link>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="flex flex-col w-[50%] sm:text-md md:text-lg text-sm text-[#8E8D98] gap-5">
                <span className="">Passenger name:</span>
                <span className="">Other passengers:</span>
                <ol>
                  {data.data.otherPassenger.map((item, index) => {
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

              <div className="flex w-[50%] flex-col sm:text-md md:text-lg text-sm gap-5 font-semibold">
                <p> {data.data.name}</p>
                <p> {data.data.passengers}3</p>
                <ul>
                  {data.data.otherPassenger.map((item, index) => {
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
                <p className=" overflow-x-scroll">{data.data.email}</p>
                <p>{data.data.phone}</p>
                <p> {data.data.address}</p>
              </div>
            </div>

            <div
              className={`flex gap-2 border border-red-600 rounded-md py-5 px-3 mt-5
               ${requestedForCancel.current === "false" ? "hidden" : "flex"}`}
            >
              <span className=" font-semibold">Cancellation Reason: </span>{" "}
              <span>{data.data.deleteReason}</span>
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
