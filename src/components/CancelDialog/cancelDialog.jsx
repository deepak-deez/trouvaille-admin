import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBooking,
  updateBooking,
} from "../../redux/actions/bookingActions";
import LoadingScreen from "../Loading/LoadingScreen";
import store from "../../redux/store";

const CancelDialog = (props) => {
  const {
    data,
    data: deletedBooking,
    loading,
  } = useSelector((state) => state.deleteBooking);

  const storeData = store.getState();
  console.log(storeData.userLogin.userDetails.data.userDetails.userType);
  const { data: updatedBooking } = useSelector((state) => state.updateBooking);
  const { setCancelPopUp, id } = props;
  const reasonRef = useRef();
  const userType = storeData.userLogin.userDetails.data.userDetails.userType;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResponse = async () => {
    dispatch(deleteBooking(id, userType));
  };

  const submitCancelRequest = async (reason) => {
    if (reason.trim() !== "") {
      dispatch(updateBooking(id, "true", reason, "confim", "", "false"));
      console.log(updatedBooking, "hiii");
      setCancelPopUp(false);
      props.setSubmitDelete(true);
    } else
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Sorry!",
        text: "Reason field cannot be empty",
        showConfirmButton: false,
        toast: true,
        timer: 1500,
        timerProgressBar: true,
      });
  };

  const handleClick = () => {
    if (userType === "Backend-user") {
      submitCancelRequest(reasonRef.current.value);
    } else if (userType === "Admin") {
      handleResponse();
      props.setSubmitDelete(true);
      setCancelPopUp(false);
      setTimeout(() => {
        dispatch({ type: "DELETE_BOOKING_SUCCESS", payload: null });
        navigate("/booking-list");
      }, 1500);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
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
                userType === "Backend-user"
                  ? true
                  : false
              }
            />
          </form>
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CancelDialog;