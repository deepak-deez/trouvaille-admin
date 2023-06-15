import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookingNote,
  getBookingNote,
} from "../../redux/actions/bookingActions";
import Swal from "sweetalert2";

const AddBookingNotePop = ({ setShowNote, showNote, heading }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const { data: adddednote } = useSelector((state) => state.addBookingNote);

  const addNewHandler = () => {
    if (description) {
      dispatch(addBookingNote(description));
    }
  };

  useEffect(() => {
    if (adddednote?.success) {
      dispatch(getBookingNote());
      setShowNote(!showNote);
      dispatch({ type: "ADD_BOOKING_NOTE_SUCCESS", payload: null });
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "success",
        title: "Success",
        text: adddednote.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  }, [adddednote]);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser   h-[100vh] ${
        !showNote && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto xl:w-[30%] md:w-[40%] w-[80%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold py-4">{"Add " + heading}</h2>
          <button
            className=""
            onClick={() => {
              setShowNote(!showNote);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <form className="flex text-[#737A83] flex-col ">
          <label className="text-sm  py-2 font-semibold">
            Write Your Note Here
          </label>
          <textarea
            className="resize-none border-2"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </form>
        <div className="flex item-center justify-center">
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={() => {
              addNewHandler();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookingNotePop;
