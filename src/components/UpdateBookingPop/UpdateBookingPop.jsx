import { React, useState, useEffect } from "react";
import {
  getBookingNote,
  updateBookingNote,
} from "../../redux/actions/bookingActions";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

const UpdateBookingPop = ({
  showBookingNoteUpdatePop,
  setShowBookingNoteUpdatePop,
  updateData,
  feature,
  heading,
}) => {
  const [desc, setDesc] = useState(updateData.note);
  const { data: updatedNote } = useSelector((state) => state.updateBookingNote);
  const dispatch = useDispatch();
  const id = updateData._id;

  const updateHandler = () => {
    if (desc) {
      dispatch(updateBookingNote(id, desc));
    } else {
      Swal.fire({
        className: "pop-top",
        position: "top",
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
        showConfirmButton: false,
        width: "40vh",
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

  useEffect(() => {
    if (updatedNote?.success === true) {
      dispatch(getBookingNote());
      setShowBookingNoteUpdatePop(!showBookingNoteUpdatePop);
      dispatch({ type: "UPDATE_BOOKING_NOTE_SUCCESS", payload: null });
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "success",
        title: "Success",
        text: updatedNote.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  }, [updatedNote]);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !showBookingNoteUpdatePop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold">Update {heading}</h2>
          <button
            className=""
            onClick={() => {
              setShowBookingNoteUpdatePop(!showBookingNoteUpdatePop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="flex flex-col ">
          <label className="text-sm  py-2 font-semibold">
            Update Your Note Here
          </label>
          <textarea
            className="resize-none border-2"
            cols="30"
            rows="10"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
        </form>
        <div className="flex item-center justify-center">
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

export default UpdateBookingPop;
