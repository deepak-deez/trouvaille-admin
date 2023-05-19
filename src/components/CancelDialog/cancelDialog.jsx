import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { useNavigate } from "react-router-dom";


const CancelDialog = (props) => {
    const {setCancelPopUp ,id} = props;
    const [submitDelete, setSubmitDelete] = useState();
    const [response, setResponse] = useState();
    const userType = "Admin";
    const API = process.env.REACT_APP_NODE_API;
    const navigate = useNavigate();
    const handleResponse = async() =>{
        const data = await axios.delete(`${API}/delete-booking/${userType}/${id}`)
        // const data = await axios.get(`${API}/booking-details/${id}`)
        console.log(data);
        // return data;
        setResponse(data)
    }

    const submitCancelRequest = () =>{
        console.log(id);
        
        // console.log(store.getState().userLogin.userDetails.data.userDetails.userType);
      
        handleResponse();
    //    console.log(response);
    //   if(response?.data.success ){
    //     console.log("done");
 
        // navigate("/booking-list")
    //   }
    }
    
    const handleClick = () =>{
        submitCancelRequest();
        setCancelPopUp(false);
    }
    console.log(response);


    return (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center addUser   h-[100vh]">
            <div className="flex place-items-center flex-col justify-center m-auto md:w-[28%] bg-white p-4 width:90% sm:w-[30%]">
                <div className="flex w-full justify-between py-2">
                    <h2 className=" font-bold">Are you sure?</h2>
                    <button
                        className=""
                        onClick={() => {
                            setCancelPopUp(false)
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <p className="my-5">You are about to cancel the booking</p>
                <form className="flex flex-col w-full px-8">
                    <textarea
                        type="text"
                        rows="5"
                        // cols="25"
                        placeholder="Reason"
                        className="  border-2 p-2 "
                       required={localStorage.getItem("userType")=="Backend-user"? "required" : ""}
                    />
                </form>
                {/* <div className="flex item-center justify-center"> */}
                <Link className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
                onClick={handleClick}
                // to={"/booking-list/cancel-requests"}
                >
                    Submit
                </Link>

            </div>
        </div>
    );
};

export default CancelDialog;
