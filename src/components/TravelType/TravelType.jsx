import { React, useState, useEffect } from "react";
import travelData from "./travelDB";
import browserIcon from "../../assets/images/travel-type/independent-icon.svg";
import AddNewPop from "../AddNewPop/AddNewPop";
import UpdatePop from "../UpdatePop/UpdatePop";
import DeletePop from "../DeletePop/DeletePop";
import DotMenu from "../DotMenu/DotMenu";
import { useDispatch, useSelector } from "react-redux";
import { getTrip } from "../../redux/actions/tripAction";
import LoadingScreen from "../Loading/LoadingScreen";
import Pagination from "../Pagination/Pagination";
import Nodata from "../Nodata/Nodata";

let PageSize = 8;

const TravelType = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState("");
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.getTrip);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;

  useEffect(() => {
    dispatch(getTrip("travel"));
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="w-full p-5">
        <div className="flex justify-end">
          <button
            className="text-[#E75C54] font-bold"
            onClick={() => {
              setShowAdd(!showAdd);
            }}
          >
            Add Travel Type
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
                  const icon = item.icon;

                  return (
                    <div className="w-full p-5 gap-4" key={index}>
                      <div className="p-4 bg-white h-[100%] text-center rounded shadow-md">
                        <div className="flex justify-end">
                          <div>
                            <DotMenu
                              updateData={item}
                              showDelPop={showDelPop}
                              setShowDelPop={setShowDelPop}
                              showUpdatePop={showUpdatePop}
                              setShowUpdatePop={setShowUpdatePop}
                              setEditData={setEditData}
                            />
                          </div>
                        </div>
                        <div className="flex justify-center py-2">
                          <img src={icon} alt="" className="h-10" />
                        </div>
                        <h3 className="text-center font-semibold py-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 w-full line-clamp-4 ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>
        ) : (
          <Nodata name="Travel Type" />
        )}
      </div>
      {showAdd && (
        <AddNewPop
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          heading="Travel Type"
          icon={browserIcon}
          feature="travel"
          titleHeading="Travel Type"
        />
      )}
      {showUpdatePop && (
        <UpdatePop
          showUpdatePop={showUpdatePop}
          setShowUpdatePop={setShowUpdatePop}
          updateData={editData}
          heading="Travel Type"
          icon={browserIcon}
          titleHeading="Travel Type"
          feature="travel"
        />
      )}

      {showDelPop && (
        <DeletePop
          showDelPop={setShowDelPop}
          setShowDelPop={setShowDelPop}
          heading="Trip Categories"
          feature="travel"
          updateData={editData}
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

export default TravelType;
