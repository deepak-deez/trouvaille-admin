import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTip, getTrip } from "../../redux/actions/tripAction.js";
import Swal from "sweetalert2";
import imgToUrl from "../../functions/imgToUrl.js";

const AddNewPop = (props) => {
  const { setShowAdd, showAdd, heading, icon, titleHeading, feature } = props;
  const { data } = useSelector((state) => state.getTrip);
  const { data: addedTrip } = useSelector((state) => state.addNewTip);
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const addNewHandler = () => {
    if (imgUrl && name && description) {
      dispatch(addNewTip(imgUrl, name, description, feature));
      setName("");
      setDescription("");
    }
  };

  useEffect(() => {
    if (addedTrip?.success) {
      dispatch(getTrip(feature));
      setShowAdd(!showAdd);

      dispatch({
        type: "ADD_TRIP_SUCCESS",
        payload: null,
      });
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "success",
        title: "Success",
        text: addedTrip.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else if (addedTrip?.success === false) {
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "error",
        title: "failed",
        text: addedTrip.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
      dispatch({ type: "ADD_TRIP_SUCCESS", payload: null });
    }
  });


  function handleChange(e) {
    if (e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
      let uplImg = e.target.files[0];
      console.log(uplImg);
      imgToUrl(uplImg).then((res) => {
        console.log(res);
        setImgUrl(res);
      });
      console.log(imgUrl);
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser   h-[100vh] ${
        !showAdd && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto xl:w-[30%] md:w-[40%] w-[80%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold py-4">{"Add " + heading}</h2>
          <button
            className=""
            onClick={() => {
              setShowAdd(!showAdd);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div>
          <div className="border-2 rounded-lg border-dashed flex flex-col md:flex-row justify-around items-center p-5 relative">
            {file ? (
              <img src={file} alt="browserIcon" className="w-[7rem]" />
            ) : (
              <img src={icon} alt="browserIcon" className="w-[7rem]" />
            )}
            <p className="md:w-1/3 my-2">
              Allowed file types: <b> png, jpg, jpeg </b>
            </p>
            <div className="relative">
              <button className="border-2 border-red-500 px-2 rounded-md text-red-500">
                Browse
              </button>
              <input
                type="file"
                accept=".jpg,.png,.jpeg,.svg"
                className="absolute left-[-90%] top-[30%] opacity-0 cursor-pointer "
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <form className="flex text-[#737A83] flex-col ">
          <label className="text-sm font-semibold py-2">
            {titleHeading} Title
          </label>
          <input
            className="border-2"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="text-sm  py-2 font-semibold">Description</label>
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
            onClick={addNewHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNewPop;
