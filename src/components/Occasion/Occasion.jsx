import { React, useState, useEffect } from "react";
import OccasionDb from "./occasionData";
import DotMenu from "../DotMenu/DotMenu";
import AddNewPop from "../AddNewPop/AddNewPop";
import UpdatePop from "../UpdatePop/UpdatePop";
import DeletePop from "../DeletePop/DeletePop";
import occasionBrowserIcon from "../../assets/images/occasion/occasion-browse-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getTrip } from "../../redux/actions/tripAction";
import LoadingScreen from "../Loading/LoadingScreen";
import Pagination from "../Pagination/Pagination";
import "./style.scss";
import Nodata from "../Nodata/Nodata";

let PageSize = 6;

const Occasion = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState("");
  const { data, loading } = useSelector((state) => state.getTrip);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrip("occasion"));
  }, []);

  useEffect(() => {
    if (
      data &&
      data.data &&
      data.data.slice(firstPageIndex, lastPageIndex).length === 0
    ) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [data]);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full border-b-2">
          <div className="w-[100%]">
            <div className="tr-class md:grid md:grid-cols-3 text-[#8383A9] text-start">
              <p className="p-3 hidden md:block">Occasion Title</p>
              <p className="p-3 hidden md:block">Description</p>
              <div className="w-100  flex items-center justify-center ">
                <button
                  className="text-[#E75C54]"
                  onClick={() => {
                    setShowAdd(!showAdd);
                  }}
                >
                  <span>Add New Occasion</span>
                  <i className=" ms-5 red-dot fa-solid fa-circle-plus"></i>
                </button>
              </div>
            </div>
            {data && data.data.length !== 0 ? (
              <div>
                {data &&
                  data?.data &&
                  data.data
                    .slice(firstPageIndex, lastPageIndex)
                    .map((item, index) => {
                      return (
                        <div
                          className={
                            " tr-class text-start md:grid md:grid-cols-3 mb-5 border-[2px] p-5 md:border-none" +
                            (index % 2 == 0 ? " bg-[#F5F9FF]" : "")
                          }
                          key={index}
                        >
                          <div className="flex items-center font-bold p-3 w-100 flex-col md:flex-row md:columns-2 md:gap-3 order-2 md:order-1">
                            <img
                              src={item.icon}
                              alt=""
                              className="h-[62px] img-filter w-[62px] mr-3"
                            />
                            <span className="px-2">{item.title}</span>
                          </div>
                          <p className="td-class order-3 md:order-2 text-center md:text-start justify-center my-auto ">
                            {item.description}
                          </p>
                          <div className="text-end order-1 md:order-3 flex items-center md:justify-center justify-end">
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
              <Nodata name="Occasion" />
            )}
          </div>
        </div>
      </div>
      {showAdd && (
        <AddNewPop
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          heading=" Occasions"
          icon={occasionBrowserIcon}
          titleHeading="Occasion"
          feature="occasion"
        />
      )}
      {showUpdatePop && (
        <UpdatePop
          showUpdatePop={showUpdatePop}
          setShowUpdatePop={setShowUpdatePop}
          updateData={editData}
          feature="occasion"
          heading="Occasion"
          titleHeading="Occasion"
        />
      )}

      {showDelPop && (
        <DeletePop
          showDelPop={setShowDelPop}
          setShowDelPop={setShowDelPop}
          heading="Occasion"
          feature="occasion"
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

export default Occasion;
