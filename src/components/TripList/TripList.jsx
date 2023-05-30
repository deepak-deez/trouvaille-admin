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

let PageSize = 3;

const TripList = () => {
  const [editData, setEditData] = useState("");
  const [delPop, setDelPop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.getPackage);
  const { data: deletedPackage } = useSelector((state) => state.deletePackage);
  const API = process.env.REACT_APP_NODE_API;
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
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <div className="w-full">

              <div className="tr-class md:grid md:grid-cols-5">
                <p className="p-3 hidden md:block">Trip Title</p>
                <p className="p-3 hidden md:block">Duration</p>
                <p className="p-3 hidden md:block">Price</p>
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
            <tbody>
              {data &&
                data?.data
                  .slice(firstPageIndex, lastPageIndex)
                  .map((val, index) => {
                    return (
                     <div>
                       <tr className=" tr-class mb-4 md:my-0 flex flex-col md:grid  md:grid-cols-6 w-full md:gap-3 text-center" key={index}>
                        <div className="td-class font-bold p-1 md:py-5 flex flex-col md:flex-row  md:gap-3 items-center">

                            <img
                              className="mx-6 md:h-[62px] md:w-[62px]"
                              src={val.image.url}
                              alt="logo"
                            />
                           <span> {val.title}</span>


                        </div>
                        <td className="td-class">{val.duration}</td>
                        <td className="td-class">{val.price}</td>
                        <td className="td-class">{val.discountedPrice}</td>
                        <td className="">
                          <TripDropMenu
                            editData={val}
                            setEditData={setEditData}
                            delPop={delPop}
                            setDelPop={setDelPop}
                          />
                        </td>
                      </tr>
                     </div>
                    );
                  })}
            </tbody>
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
