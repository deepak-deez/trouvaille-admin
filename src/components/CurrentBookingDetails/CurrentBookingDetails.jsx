import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import CancelDialog from '../CancelDialog/cancelDialog';
import axios from 'axios';



const CurrentBookingDetails = () => {

    // const [cancelBooking , setCancelBooking] = useState(false);
    const [cancelPopUp , setCancelPopUp] = useState(false);

    const bookingData = [
        {
            id: 1,
            title: "Warsáw, Poland",
            name: "Connie Parks",
            email: "conniepark@info.com",
            phone: "+41-22-767-6111",
            address: "156 South Lexington Rd.Paterson, NJ 07501",
        },
        {
            id: 2,
            title: "Giza, Egypt",
            name: "Carmen Collins",
            email: "carmencollins@info.com",
            phone: "+41-22-767-6111",
            status: "Confirm"
        },
        {
            id: 3,
            title: "Venice, Italy",
            name: "Arturo Reese",
            email: "arturoreese@info.com",
            phone: "+41-22-767-6111",
            status: "Pending"
        },
    ];



    const API = process.env.REACT_APP_NODE_API

    let { id } = useParams();
// const [currentId] = useState(id);

  const [response,setResponse] = useState();
  const responseHandler = async() =>{
    const data = await axios.get(`${API}/booking-details/${id}`)
   setResponse(data);
}

  useEffect(()=>{
    responseHandler();
   
  },[])

  console.log(response);
  if(response?.data)
    return (
       
        <>
         {console.log(response.data.data)}
        <div className="flex-col flex md:flex-row w-full py-5">
            <div className="flex sm:w-[50%] w-full p-2">
                <div className='w-[100%]'><img src={response.data.data.image.url} alt="img1" /></div>
              
            </div>
            <div className="sm:w-[50%] w-full p-2">
                <div className="flex justify-between items-center">
                    <p className="text-3xl font-semibold">{response.data.data.title}</p>
                    <Link
                        className="flex justify-self-end border px-3 py-2 rounded-md border-black me-5"
                        onClick={()=>{setCancelPopUp(!cancelPopUp)}}
                    >
                        Cancel
                    </Link>

                </div>
                <div className="flex gap-2 ">
                    <div className="flex flex-col w-[50%] sm:text-lg text-sm text-[#8E8D98] gap-5">
                        <span className="">Passenger name:</span>
                        <span className="">Other passengers:</span>
                        <li>list data</li>
                        <span className="">Email address:</span>
                        <span className="">Phone:</span>
                        <span className="">Address:</span>
                    </div>

                    <div className="flex w-[50%] flex-col sm:text-lg text-sm gap-5 font-semibold">
                        <p> {response.data.data.name}</p>
                        <p> {response.data.data.passengers}3</p>
                        <li>list data</li>
                        <p className=' overflow-x-scroll'>{response.data.data.email}</p>
                        <p>{response.data.data.phone}</p>
                        <p> {response.data.data.address}</p>
                    </div>
                </div>
            </div>
        </div>
       {
        cancelPopUp? (<CancelDialog setCancelPopUp={setCancelPopUp} id={id} />):("")
       }
        </>
    );
}

export default CurrentBookingDetails;
