import React from 'react';
import { Link } from 'react-router-dom';

const bookingData = [
  {
    id:1,
    title: "Warsáw, Poland",
    name: "Connie Parks",
    email: "conniepark@info.com",
    phone: "+41-22-767-6111",
    status: "Pending"
  },
  {
    title: "Giza, Egypt",
    name: "Carmen Collins",
    email: "carmencollins@info.com",
    phone: "+41-22-767-6111",
    status: "Confirm"
  },
  {
    title: "Venice, Italy",
    name: "Arturo Reese",
    email: "arturoreese@info.com",
    phone: "+41-22-767-6111",
    status: "Pending"
  }
]

const BookingItems = () => {
    return (
       bookingData.map((data,index)=>{
        return(
          <tr>
            <td className='p-3 '>{data.title}</td>
          <td className='p-3'>{data.name}</td>
          <td className='p-3'>{data.email}</td>
          <td className='p-3'>{data.phone}</td>
          {
            data.status ==="Pending"?
            <td className='p-3 text-orange-400 flex font-semibold items-center gap-1'>
              <span className='w-[1rem] h-[1rem]  rounded-full bg-orange-400'> </span> <span>Pending</span> </td>
            :
            <td className='p-3 text-green-600 flex font-semibold items-center gap-1'>
              <span className='w-[1rem] h-[1rem]  rounded-full bg-green-400'> </span> <span>Confirm</span></td>
          }
          <td className='p-3'>
         <Link className='border border-black px-3 py-1 rounded-md font-semibold' to={"/booking-details/"+data.id}>
         View
         </Link></td>
          {/* <td className='p-3'><button className=' border border-black px-3 py-1 rounded-md font-semibold'>View</button></td> */}
          </tr>
        )
       })
    );
}

export default BookingItems;
