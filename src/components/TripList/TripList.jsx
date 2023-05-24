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

let PageSize = 3;

const TripList = () => {
  const [editData, setEditData] = useState("");
  const [delPop, setDelPop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { data, error } = useSelector((state) => state.getPackage);
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
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <table className="w-[65rem]">
            <thead>
              <tr className="tr-class">
                <th className="p-3">Trip Title</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Discounted Price</th>
                <th>
                  <button
                    className="text-[#E75C54]"
                    onClick={() => {
                      navigate("/trip-list/add-trip");
                    }}
                  >
                    Add New Trip
                    <i className=" red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.data
                  .slice(firstPageIndex, lastPageIndex)
                  .map((val, index) => {
                    return (
                      <tr className=" tr-class text-center" key={index}>
                        <td className="td-class font-bold  p-3">
                          <div className="flex  items-center">
                            <img
                              className="mx-6 h-[62px] w-[62px]"
                              src={val.image.url}
                              alt="logo"
                            />
                            {val.title}
                            {console.log(val.title)}
                          </div>
                        </td>
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
                    );
                  })}
            </tbody>
          </table>
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
