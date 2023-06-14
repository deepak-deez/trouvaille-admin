import { React, useEffect, useState } from "react";
import amenitiesBrowserIcon from "../../assets/images/amenities/browse-anenities-icon.svg";
import DotMenu from "../DotMenu/DotMenu";
import UpdatePop from "../UpdatePop/UpdatePop";
import AddNewPop from "../AddNewPop/AddNewPop";
import DeletePop from "../DeletePop/DeletePop";
import { useDispatch, useSelector } from "react-redux";
import { getTrip } from "../../redux/actions/tripAction";
import LoadingScreen from "../Loading/LoadingScreen";
import Pagination from "../Pagination/Pagination";
import "./style.scss";
import Nodata from "../Nodata/Nodata";

let PageSize = 8;

const AmenitiesTable = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState("");
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.getTrip);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  useEffect(() => {
    dispatch(getTrip("amenity"));
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <div className="w-[100%]">
            <div>
              <div className="tr-class md:grid md:grid-cols-3 flex text-[#8383A9] items-center text-center justify-center">
                <div className="p-3 hidden md:block mr-auto">Amenity Title</div>
                <div className="p-3 hidden md:block mr-auto">Description</div>
                <div>
                  <button
                    className="text-[#E75C54]"
                    onClick={() => {
                      setShowAdd(!showAdd);
                    }}
                  >
                    Add New Amenities
                    <i className=" ms-5 red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            {data && data.data.length !== 0 ? (
              <div>
                {data &&
                  data?.data &&
                  data?.data
                    .slice(firstPageIndex, lastPageIndex)
                    .map((item, index) => {
                      return (
                        <div
                          className={
                            " tr-class flex flex-col md:grid md:grid-cols-3 text-start border-[2px] p-5 md:border-none mb-5 " +
                            (index % 2 == 0 ? " bg-[#F5F9FF]" : "")
                          }
                          key={index}
                        >
                          <div className="td-class font-bold w-100 flex flex-col md:flex-row md:columns-2 md:gap-3 items-center m-3 order-2 md:order-1">
                            <img
                              src={item.icon}
                              alt=""
                              className="h-[62px] img-filter w-[62px] mr-3"
                            />
                            <span className="">{item.title}</span>
                          </div>
                          <p className="td-class order-3 md:order-2 text-center md:text-start justify-center my-auto md:items-center w-100">
                            {item.description}
                          </p>
                          <div className="text-center order-1 md:order-3 flex items-center justify-end md:justify-center">
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
                      );
                    })}
              </div>
            ) : (
              <Nodata name="amenities" />
            )}
          </div>
        </div>
      </div>
      {showAdd && (
        <AddNewPop
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          heading=" New Amenities"
          icon={amenitiesBrowserIcon}
          titleHeading="Amenity "
          feature="amenity"
        />
      )}
      {showUpdatePop && (
        <UpdatePop
          showUpdatePop={showUpdatePop}
          setShowUpdatePop={setShowUpdatePop}
          updateData={editData}
          heading="Amenities"
          titleHeading="Amenity"
          feature="amenity"
        />
      )}

      {showDelPop && (
        <DeletePop
          showDelPop={setShowDelPop}
          setShowDelPop={setShowDelPop}
          heading="amenity"
          updateData={editData}
          feature="amenity"
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

export default AmenitiesTable;
