import { React, useState } from "react";
import imgToUrl from "../../functions/imgToUrl";

function MultipleTripForm({ inputFields, setInputFields }) {
  function imageChange(index, e) {
    let uplImg = e.target.files[0];
    imgToUrl(uplImg).then((res) => {
      console.log(res);
      const list = [...inputFields];
      list[index]["icon"] = res;
      setInputFields(list);
    });
  }
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        Title: "",
        Name: "",
        Description: "",
        icon: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
    console.log(rows);
  };
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    console.log(name);
    const list = [...inputFields];
    console.log(list);
    list[index][name] = value;
    setInputFields(list);
  };
  console.log(inputFields, "input");
  return (
    <div className="col-sm-8">
      <div className="flex justify-between">
        <h1 className=" font-bold">Trip Highlights</h1>
        <button
          className="border-2 border-red-500 px-2 rounded-md text-red-500 "
          onClick={addInputField}
        >
          Add New
        </button>
      </div>
      {inputFields.map((data, index) => {
        return (
          <div className="row my-3" key={index}>
            <div className="flex items-center">
              <div className="flex justify-between w-full">
                <div className=" flex flex-col w-full">
                  <label className=" text-gray-400">Title</label>
                  <input
                    type="text"
                    className="border-2 p-2 rounded-md w-[80%]"
                    onChange={(e) => handleChange(index, e)}
                    value={data.Title}
                    name="Title"
                  />
                </div>
                <div className=" flex flex-col w-[80%]">
                  <label className=" text-gray-400">Name</label>
                  <input
                    type="text"
                    className="border-2 p-2 rounded-md"
                    onChange={(e) => handleChange(index, e)}
                    value={data.Name}
                    name="Name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className=" text-gray-400">Description</label>
              <textarea
                rows="5"
                cols="33"
                type="text"
                value={data.Description}
                className="border-2 rounded-md resize-none"
                onChange={(e) => handleChange(index, e)}
                name="Description"
              />
            </div>
            <div className="py-4">
              <div className=" flex flex-col md:flex-row justify-start items-center space-x-2 relative">
                {data.icon ? (
                  <img
                    src={data.icon}
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
                    onChange={(e) => imageChange(index, e)}
                  />
                </div>
                <p className=" w-full my-2">
                  Allowed file types: <b> png, jpg, jpeg </b>
                </p>
              </div>
            </div>
            <div className="mt-2">
              {inputFields.length !== 1 ? (
                <button
                  className="border-2 border-red-500 px-2 rounded-md text-red-500 "
                  onClick={removeInputFields}
                >
                  Remove
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MultipleTripForm;
