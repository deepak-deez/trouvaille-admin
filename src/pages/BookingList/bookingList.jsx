import { react } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import BookingItems from "../../components/BookingItem/BookingItems";
import LoadingScreen from "../../components/Loading/LoadingScreen";

const BookingList = () => {
  const { loading } = useSelector((state) => state.getBooking);
  return (
    <>
      {loading && <LoadingScreen />}
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full bg-[#f5f7f7] ">
          <Navbar heading="Booking List" />
          <div className="bg-white h-full overflow-auto p-5 w-full md:pb-16">
            <div className="hidden md:grid grid-cols-6 gap-3 text-[#8383A9] text-start">
              <span className="py-5">Trip Title</span>
              <span className="py-5 ">Passenger Name</span>
              <span className="py-5">Email</span>
              <span className="py-5">Phone number</span>
              <span className="py-5">Status</span>
              <span className="py-5 text-[#E85C53]">Action</span>
            </div>
            <div>
              <BookingItems />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BookingList;
