import React from "react";

const EditTrip = ({ editTripPop, setEditTripPop, data }) => {
  const [tripTitle, setTripTitle] = useState(data.heading);
  const [tripDesc, settripDesc] = useState(data.description);
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !editTripPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold">Update Trip Categories</h2>
          <button
            className=""
            onClick={() => {
              setEditTripPop(!editTripPop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="flex flex-col ">
          <label className="text-sm font-light py-2" htmlFor="Name">
            Name
          </label>
          <input
            className="border-2 p-2"
            type="text"
            value={tripTitle}
            onChange={(e) => {
              setTripTitle(e.target.value);
            }}
          />
          <label className="text-sm  py-2 font-semibold">Description</label>
          <textarea
            className="resize-none border-2"
            cols="30"
            rows="10"
            value={tripDesc}
            onChange={(e) => {
              settripDesc(e.target.value);
            }}
          ></textarea>
        </form>
        <div className="flex item-center justify-center">
          <button className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTrip;
