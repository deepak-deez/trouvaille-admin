import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBooking,
  getBookingByStatus,
} from "../../redux/actions/bookingActions";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import Pagination from "../Pagination/Pagination";
import Nodata from "../Nodata/Nodata";
import { statusColor } from "../../functions/statusColor";

let PageSize = 6;

const BookingItems = (props) => {
  const { data } = useSelector((state) => state.getBooking);
  const { data: booking } = useSelector((state) => state.getBookingByStatus);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataMap, setDataMap] = useState();

  useEffect(() => {
    console.log(props.activeStatusTab);
    if (props.activeStatusTab === "All") {
      dispatch(getBooking());
      dispatch({
        type: "GET_BOOKING_BY_STATUS_SUCCESS",
        payload: null,
      });
    } else {
      dispatch(getBookingByStatus(props.activeStatusTab));
      dispatch({
        type: "GET_BOOKING_SUCCESS",
        payload: null,
      });
    }
  }, [props.activeStatusTab]);

  useEffect(() => {
    setDataMap(data);
  }, [data]);

  useEffect(() => {
    setDataMap(booking);
  }, [booking]);

  console.log(data);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  return (
    <>
      {dataMap && (dataMap.data.length !== 0 || dataMap.data === null) ? (
        <div>
          {dataMap &&
            dataMap?.data
              .slice(firstPageIndex, lastPageIndex)
              .map((items, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="mb-4 md:my-0 flex flex-col md:grid  md:grid-cols-6 w-full md:gap-3 text-center"
                    >
                      <p className="p-1 md:py-5 flex flex-col md:flex-row  md:gap-3 items-center">
                        <img
                          className="md:w-[62px] min-w-[62px] max-h-[250px] max-w-[350px] md:h-[62px] object-fill w-[90%] h-80 rounded-md my-4 md:my-0"
                          src={items.tripDetails?.image}
                          alt="Package-Icon"
                        />

                        <span className="font-semibold text-start text-ellipsis overflow-hidden">
                          {items.title}
                        </span>
                      </p>
                      <div className="flex items-center justify-between md:justify-center p-3">
                        <span className="md:hidden">
                          <PersonIcon />
                        </span>
                        <p className="md:py-5">{items.name}</p>
                      </div>

                      <div className="flex items-center justify-between md:justify-center p-3">
                        <span className="md:hidden">
                          <EmailIcon />
                        </span>
                        <p className="md:py-5">{items.email}</p>
                      </div>
                      <div className="flex items-center justify-between md:justify-center p-3">
                        <span className="md:hidden">
                          <PhoneIcon />
                        </span>
                        <p className="md:py-5">{items.phone}</p>
                      </div>

                      <div className="flex items-center justify-between md:justify-center p-3">
                        <span className="md:hidden">
                          <InfoIcon />
                        </span>
                        
                        <p
                          className={`md:py-5  flex font-semibold items-center gap-1  ` + `text-${statusColor(items?.bookingStatus)}-400`}
                        >
                          <span className={`w-[1rem] h-[1rem]  rounded-full `+ `bg-${statusColor(items?.bookingStatus)}-400`}></span>
                          <span>{items.bookingStatus}</span>
                        </p>
                      </div>

                      <div className="md:py-5 flex justify-center md:items-center">
                        <Link
                          className="border border-black px-3 py-1 rounded-md font-semibold "
                          to={"/booking-list/booking-details/" + items._id}
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
        </div>
      ) : (
        <Nodata name="Bookings" />
      )}

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data && data?.data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default BookingItems;
