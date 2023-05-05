import React from 'react';
import { Link,useParams } from "react-router-dom";



const CurrentBookingDetails = () => {

    // const [cancelBooking , setCancelBooking] = useState(false);

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


let { id } = useParams();

    return (
        <div className="flex-col flex md:flex-row w-full py-5">
            <div className="flex sm:w-[50%] w-full p-2">
              <div className='w-[50%]'><img src="" alt="img1" /></div>
              <div className="flex flex-col w-[50%]">
                <div className='h-[50%]'><img src="" alt="img2" /></div>
                <div className='h-[50%]'><img src="" alt="img3" /></div>
              </div>
            </div>
            <div className="sm:w-[50%] w-full p-2">
              <div className="flex justify-between items-center">
                <p className="text-3xl font-semibold">{bookingData[id-1].title}</p>
                <Link
                  to={'/booking-list/booking-details/'+2+'/cancel-booking'}
                  className="flex justify-self-end border px-3 py-2 rounded-md border-black me-5"
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
                  <p> {bookingData[id-1].name}</p>
                  <p> {bookingData[id-1].passengers}3</p>
                  <li>list data</li>
                  <p className=' overflow-x-scroll'>{bookingData[id-1].email}</p>
                  <p>{bookingData[id-1].phone}</p>
                  <p> {bookingData[id-1].address}</p>
                </div>
              </div>
            </div>
          </div>
    );
}

export default CurrentBookingDetails;
