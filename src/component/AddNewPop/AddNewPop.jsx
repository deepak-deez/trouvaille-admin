import { React, useState } from "react";

const AddNewPop = (props) => {
  const { setShowAdd, showAdd, heading, icon, titleHeading } = props;
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  console.log(setFile);
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
                accept=".jpg,.png,.jpeg"
                className="absolute left-[-90%] top-[30%] opacity-0 cursor-pointer "
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <form className="flex text-[#737A83] flex-col ">
          <label className="text-sm font-semibold py-2" htmlFor="Name">
            {titleHeading} Title
          </label>
          <input className="border-2" type="text" />
          <label className="text-sm  py-2 font-semibold" htmlFor="email">
            Description
          </label>
          <textarea
            className="resize-none border-2"
            cols="30"
            rows="10"
          ></textarea>
        </form>
        <div className="flex item-center justify-center">
          <button className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNewPop;
