import React from "react";

const AddNewUser = () => {
  return (
    <div>
      <div className="addUser">
        <form action>
          <label htmlFor="Name">Name</label>
          <input type="text" />
          <label htmlFor="email">Email Address</label>
          <input type="email" />
        </form>
        <button className="bg-[#E85C53]">Submit</button>
      </div>
    </div>
  );
};

export default AddNewUser;
