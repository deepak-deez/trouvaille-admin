import { React, useState, useEffect } from "react";
import browseTripIcon from "../../assets/images/trip/browse-trip-icon.svg";
import DotMenu from "../DotMenu/DotMenu";
import AddNewPop from "../AddNewPop/AddNewPop";
import UpdatePop from "../UpdatePop/UpdatePop";
import DeletePop from "../DeletePop/DeletePop";
import { useDispatch, useSelector } from "react-redux";
import { getTrip } from "../../redux/actions/tripAction";
import LoadingScreen from "../Loading/LoadingScreen";
import Pagination from "../Pagination/Pagination";

let PageSize = 8;

const Trip = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState("");
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.getTrip);
  console.log(data);
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;

  useEffect(() => {
    dispatch(getTrip("category"));
  }, []);
  console.log(data);
  return (
    <>
      {loading && <LoadingScreen />}
      <div className="w-full p-5">
        <div className="flex justify-end">
          <button
            className="text-[#E75C54] font-bold"
            onClick={() => {
              setShowAdd(!showAdd);
              console.log("hii");
            }}
          >
            Add Category
            <i className=" ml-2 red-dot fa-solid fa-circle-plus"></i>
          </button>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2">
          {data &&
            data?.data &&
            data.data
            .slice(firstPageIndex, lastPageIndex)
            .map((val, index) => {
              return (
                <div className="w-full p-5 gap-4" key={index}>
                  <div className="p-8 bg-white h-[100%] text-center rounded shadow-md">
                    <div className="flex justify-end">
                      <div>
                        <DotMenu
                          updateData={val}
                          showDelPop={showDelPop}
                          setShowDelPop={setShowDelPop}
                          showUpdatePop={showUpdatePop}
                          setShowUpdatePop={setShowUpdatePop}
                          setEditData={setEditData}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img src={val.icon} alt="" className="h-10" />
                    </div>
                    <h3 className="text-center font-semibold">{val.title}</h3>
                    <p className="text-gray-600 w-full  line-clamp-4">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {showAdd && (
        <AddNewPop
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          heading=" New Trip Categories"
          feature="category"
          icon={browseTripIcon}
          titleHeading="Trip "
        />
      )}
      {showUpdatePop && (
        <UpdatePop
          showUpdatePop={showUpdatePop}
          setShowUpdatePop={setShowUpdatePop}
          updateData={editData}
          feature="category"
          heading="Trip Categories"
          titleHeading="Trip"
        />
      )}

      {showDelPop && (
        <DeletePop
          showDelPop={setShowDelPop}
          setShowDelPop={setShowDelPop}
          heading="Trip Categories"
          updateData={editData}
          feature="category"
        />
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

export default Trip;
