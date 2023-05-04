import { React, useState } from "react";
import Browse from "../Browse/Browse";
function MultipleTripForm() {
  const [inputFields, setInputFields] = useState([
    {
      Title: "",
      Name: "",
      Description: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        Title: "",
        Name: "",
        Description: "",
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
                    className="border-2 rounded-md w-[80%]"
                    onChange={(e) => handleChange(index, e)}
                    value={data.Title}
                    name="Title"
                  />
                </div>
                <div className=" flex flex-col w-[80%]">
                  <label className=" text-gray-400">Name</label>
                  <input
                    type="text"
                    className="border-2 rounded-md"
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
              <Browse />
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
