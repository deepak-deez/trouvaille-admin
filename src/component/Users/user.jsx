import React from "react";
import userData from "./UserData";
import "./style.scss";

const User = () => {
  return (
    <div className="p-3">
      <div className="p-4 bg-white">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-3">User Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>
                <a className="text-[#E75C54]" href="adduser">
                  Add A New User{" "}
                  <i className=" red-dot fa-solid fa-circle-plus"></i>
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((val, key) => {
              return (
                <tr className=" text-center" key={key}>
                  <td className="font-bold p-3">{val.userName}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
