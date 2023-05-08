import { React, useState } from "react";
function Faq() {
  const [inputFields, setInputFields] = useState([
    {
      Question: "",
      Name: "",
      Answer: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        Question: "",
        Name: "",
        Answer: "",
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
        <h1 className=" font-bold">FAQ </h1>
        <button
          className="border-2 border-red-500 px-2 rounded-md text-red-500 "
          onClick={addInputField}
        >
          Add More
        </button>
      </div>
      {inputFields.map((data, index) => {
        return (
          <div className="row my-3" key={index}>
            <div className="flex items-center">
              <div className="flex justify-between w-full">
                <div className=" flex flex-col w-full">
                  <label className=" text-gray-400">Question</label>
                  <input
                    type="text"
                    className="border-2 p-2 rounded-md w-full"
                    onChange={(e) => handleChange(index, e)}
                    value={data.Question}
                    name="Question"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="  text-gray-400">Answer</label>
              <textarea
                rows="5"
                cols="33"
                type="text"
                value={data.Answer}
                className="border-2 rounded-md resize-none"
                onChange={(e) => handleChange(index, e)}
                name="Answer"
              />
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

export default Faq;
