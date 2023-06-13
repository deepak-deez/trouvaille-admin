import { React, useEffect, useState, useMemo } from "react";
import TripListDB from "./TripListDB";
import TripDropMenu from "../TripDropMenu/TripDropMenu";
import { useNavigate } from "react-router-dom";
import DeleteTripPop from "../DeleteTripPop/DeleteTripPop";
import Pagination from "../Pagination/Pagination";
import list from "./TripListDB.jsx";
import axios from "axios";
import {
  getPackage,
  deletePackage,
} from "../../redux/actions/addPackageActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../Loading/LoadingScreen";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DiscountIcon from "@mui/icons-material/Discount";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

let PageSize = 6;

const TripList = () => {
  const [editData, setEditData] = useState("");
  const [delPop, setDelPop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.getPackage);
  const { data: deletedPackage } = useSelector((state) => state.deletePackage);
  const dispatch = useDispatch();
  // const list=useState([]);
  // console.log(data);
  // console.log(list.slice(0,3));

  // console.log(currentTableData);

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deletePackage(id));
  };

  useEffect(() => {
    dispatch(getPackage());
  }, []);

  // const currentTableData = ()=> {
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  // if (data && data?.data)
  // currentTableData = data.data.slice(firstPageIndex, lastPageIndex);
  // };

  useEffect(() => {
    if (deletedPackage?.success) {
      dispatch(getPackage());
    }
  }, [deletedPackage]);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="md:p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <div className="w-full">
            <div className="tr-class md:grid md:grid-cols-5 text-[#8383A9] text-start">
              <p className="pr-3 my-auto  hidden md:block">Trip Title</p>
              <p className="p-3 hidden md:block">Duration</p>
              <p className="p-3 hidden md:block"> Price</p>
              <p className="p-3 hidden md:block">Discounted Price</p>
              <div className="flex items-center justify-center">
                <button
                  className="text-[#E75C54]"
                  onClick={() => {
                    navigate("/trip-list/add-trip");
                  }}
                >
                  <span>Add New Trip</span>
                  <i className=" red-dot fa-solid fa-circle-plus"></i>
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col">
              {data &&
                data?.data
                  .slice(firstPageIndex, lastPageIndex)
                  .map((val, index) => {
                    return (
                      <div
                        className={
                          "relative tr-class my-5 md:my-0 flex flex-col md:grid items-center md:grid-cols-5 w-full gap-3 md:gap-1 border-[2px] py-5 md:border-0 text-start" +
                          (index % 2 == 0 ? " bg-[#F5F9FF]" : "")
                        }
                        key={index}
                      >
                        <div className="td-class font-bold p-1 md:m-auto  flex flex-col md:flex-row  gap-3 ">
                          <img
                            className="min-[400px]:w-[20rem] max-w-[350px] max-h-[250px] md:h-[62px] md:w-[62px] rounded-md"
                            src={val.image}
                            alt="logo"
                          />
                          <p className="my-auto text-center md:text-start">
                            {val.title}
                          </p>
                        </div>
                        <p className="td-class w-80 flex justify-center md:w-full md:justify-center md:order-1 order-2">
                          <p className="md:hidden">
                            <ScheduleIcon />
                          </p>
                          <p>{val.duration}</p>
                        </p>
                        <p className="td-class flex justify-center w-80 md:w-full  md:order-2 order-3">
                          <p className="md:hidden">
                            <CurrencyRupeeIcon />
                          </p>
                          <p> ₹ {val.price}</p>
                        </p>
                        <p className="td-class flex justify-center w-80 md:w-full md:order-3 order-4">
                          <p className="md:hidden">
                            <DiscountIcon />
                          </p>
                          ₹ {val.discountedPrice}
                        </p>
                        <div className="td-class mx-auto md:order-4 order-1 w-80 md:w-full absolute md:static md:flex justify-center top-5 right-[320px] ml-auto">
                          <TripDropMenu
                            editData={val}
                            setEditData={setEditData}
                            delPop={delPop}
                            setDelPop={setDelPop}
                          />
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        {delPop && (
          <DeleteTripPop
            delPop={delPop}
            setDelPop={setDelPop}
            handleDelete={handleDelete}
            editData={editData}
          />
        )}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data && data?.data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
  // }

  // },[])
};

export default TripList;
