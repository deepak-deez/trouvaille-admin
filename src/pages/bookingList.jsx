import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BookingItems from "../components/BookingItem/BookingItems";

const BookingList = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Booking List" userName={email} />
        <div className="md:h-[90vh] p-5">
          <div className="bg-white overflow-x-scroll ">
            <table className="w-full ">
              <thead className="w-full text-[#8383A9] ">
                <tr>
                  <th className="py-5">Trip Title</th>
                  <th className="py-5 ">Passenger Name</th>
                  <th className="py-5">Email</th>
                  <th className="py-5">Phone number</th>
                  <th className="py-5">
                    <span className="rounded-full"></span> Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <BookingItems />
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BookingList;
