import { React, useState } from "react";

const Browse = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className=" flex flex-col md:flex-row justify-start items-center space-x-2 relative">
      {file ? (
        <img
          src={file}
          alt="browserIcon"
          className="w-[30%] md:w-[20%]  md:h-[10vh]"
        />
      ) : (
        <h1 className="text-gray-400">Icon</h1>
      )}
      <div className="relative md:mt-0 mt-5">
        <button className="border-2 border-red-500 px-2 rounded-md text-red-500">
          Browse
        </button>
        <input
          type="file"
          accept=".jpg,.png,.jpeg"
          className="absolute right-[10%] opacity-0 cursor-pointer "
          onChange={handleChange}
        />
      </div>
      <p className=" w-full my-2">
        Allowed file types: <b> png, jpg, jpeg </b>
      </p>
    </div>
  );
};

export default Browse;
