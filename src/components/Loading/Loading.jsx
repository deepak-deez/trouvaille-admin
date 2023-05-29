import React from "react";
import "./style.scss";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center loading h-[100vh]">
      <div class="circle">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
