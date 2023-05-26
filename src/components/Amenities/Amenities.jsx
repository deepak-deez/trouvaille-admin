import { React, useEffect, useState } from "react";
import amenitiesBrowserIcon from "../../assets/images/amenities/browse-anenities-icon.svg";
import DotMenu from "../DotMenu/DotMenu";
import UpdatePop from "../UpdatePop/UpdatePop";
import AddNewPop from "../AddNewPop/AddNewPop";
import DeletePop from "../DeletePop/DeletePop";
import { useDispatch, useSelector } from "react-redux";
import { getTrip } from "../../redux/actions/tripAction";
const AmenitiesTable = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [editData, setEditData] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getTrip);

  useEffect(() => {
    dispatch(getTrip("amenity"));
  }, []);

  return (
    <>
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <table className="w-[100%]">
            <thead>
              <tr className="tr-class">
                <th className="p-3">Amenity Title</th>
                <th>Description</th>
                <th>
                  <button
                    className="text-[#E75C54]"
                    onClick={() => {
                      setShowAdd(!showAdd);
                    }}
                  >
                    Add New Amenities
                    <i className=" ms-5 red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.data &&
                data?.data?.map((item, index) => {
                  return (
                    <tr className=" tr-class text-start" key={index}>
                      <td className="td-class font-bold flex items-center m-3">
                        <img src={item.icon.url} alt="" className="h-[62px] w-[62px] mr-3"/>

                        {item.title}
                      </td>
                      <td className="td-class">{item.description}</td>
                      <td className="text-end">
                        <DotMenu
                          updateData={item}
                          showDelPop={showDelPop}
                          setShowDelPop={setShowDelPop}
                          showUpdatePop={showUpdatePop}
                          setShowUpdatePop={setShowUpdatePop}
                          setEditData={setEditData}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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
    </>
  );
};

export default AmenitiesTable;
