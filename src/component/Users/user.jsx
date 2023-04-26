import React from "react";
import userData from "./UserData";
import Menu from "../UserMenu/Menu";
import "./style.scss";

const User = () => {
  return (
    <div className="p-3">
      <div className="p-4 bg-white item-center w-full overflow-x-scroll">
        <table className="w-[75rem]">
          <thead>
            <tr className="tr-class">
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
            {userData.map((val, index) => {
              return (
                <tr className=" tr-class text-center" key={index}>
                  <td className="td-class font-bold p-3">{val.userName}</td>
                  <td className="td-class">{val.email}</td>
                  <td className="td-class">{val.phone}</td>
                  <td className="">{<Menu/>}</td>
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
