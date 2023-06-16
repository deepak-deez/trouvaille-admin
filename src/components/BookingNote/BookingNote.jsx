import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getTrip } from "../../redux/actions/tripAction";
import { getBookingNote } from "../../redux/actions/bookingActions";
import LoadingScreen from "../Loading/LoadingScreen";
import Pagination from "../Pagination/Pagination";
import Nodata from "../Nodata/Nodata";
import AddBookingNotePop from "../AddBookingNotePop/AddBookingNotePop";
import UpdateBookingPop from "../UpdateBookingPop/UpdateBookingPop";
import DeleteBookingNotePop from "../DeleteBookingNotePop/DeleteBookingNotePop";
import BookingNoteMenu from "../BookingNoteMenu/BookingNoteMenu";

let PageSize = 8;

const BookingNote = () => {
  const [showNote, setShowNote] = useState(false);
  const [showBookingNoteUpdatePop, setShowBookingNoteUpdatePop] =
    useState(false);
  const [showBookingNoteDelPop, setShowBookingNoteDelPop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState("");
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.getBookingNote);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;

  useEffect(() => {
    dispatch(getBookingNote());
  }, []);


  return (
    <>
      {loading && <LoadingScreen />}
      <div className="w-full p-5">
        <div className="flex justify-end">
          <button
            className="text-[#E75C54] font-bold"
            onClick={() => {
              setShowNote(!showNote);
            }}
          >
            Add Booking Note
            <i className=" ml-2 red-dot fa-solid fa-circle-plus"></i>
          </button>
        </div>
        {data && data.data.length !== 0 ? (
          <div className="grid lg:grid-cols-4 sm:grid-cols-2">
            {data &&
              data?.data &&
              data.data
                .slice(firstPageIndex, lastPageIndex)
                .map((item, index) => {
                  return (
                    <div className="w-full p-5 gap-4" key={index}>
                      <div className="p-4 bg-white h-[100%] text-center rounded shadow-md">
                        <div className="flex justify-end">
                          <div>
                            <BookingNoteMenu
                              updateData={item}
                              showBookingNoteDelPop={showBookingNoteDelPop}
                              setShowBookingNoteDelPop={
                                setShowBookingNoteDelPop
                              }
                              showBookingNoteUpdatePop={
                                showBookingNoteUpdatePop
                              }
                              setShowBookingNoteUpdatePop={
                                setShowBookingNoteUpdatePop
                              }
                              setEditData={setEditData}
                            />
                          </div>
                        </div>
                        <p className="text-gray-600 w-full line-clamp-4 ">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>
        ) : (
          <Nodata name="Booking Note" />
        )}
      </div>
      {showNote && (
        <AddBookingNotePop
          showNote={showNote}
          setShowNote={setShowNote}
          heading="Booking Note"
        />
      )}
      {showBookingNoteUpdatePop && (
        <UpdateBookingPop
          showBookingNoteUpdatePop={showBookingNoteUpdatePop}
          setShowBookingNoteUpdatePop={setShowBookingNoteUpdatePop}
          updateData={editData}
          heading="Booking Note"
        />
      )}

      {showBookingNoteDelPop && (
        <DeleteBookingNotePop
          showBookingNoteDelPop={setShowBookingNoteDelPop}
          setShowBookingNoteDelPop={setShowBookingNoteDelPop}
          heading="Booking Note"
          updateData={editData}
        />
      )}
      <Pagination
        className="pagination-bar flex justify-end"
        currentPage={currentPage}
        totalCount={data && data?.data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default BookingNote;
