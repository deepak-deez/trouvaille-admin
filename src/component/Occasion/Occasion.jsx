import { React, useState, useEffect } from "react";
import OccasionDb from "./occasionData";
import DotMenu from "../DotMenu/DotMenu";
import AddNewPop from "../AddNewPop/AddNewPop";
import UpdatePop from "../UpdatePop/UpdatePop";
import DeletePop from "../DeletePop/DeletePop";
import occasionBrowserIcon from "../../assets/image/occasion/occasion-browse-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getTrip } from "../../redux/actions/tripAction";

const Occasion = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [editData, setEditData] = useState("");
  const { data } = useSelector((state) => state.getTrip);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrip("occasion"));
  }, []);

  console.log(data);
  return (
    <>
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full overflow-x-scroll border-b-2">
          <table className="w-[100%]">
            <thead>
              <tr className="tr-class">
                <th className="p-3">Occasion Title</th>
                <th>Description</th>
                <th>
                  <button
                    className="text-[#E75C54]"
                    onClick={() => {
                      setShowAdd(!showAdd);
                    }}
                  >
                    Add New Occasion
                    <i className=" ms-5 red-dot fa-solid fa-circle-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data?.data && data.data.map((data, index) => {
                  const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(data.icon.data.data))
                  );
                  return (
                    <tr className=" tr-class text-center" key={index}>
                      <td className="td-class font-bold flex items-center p-3">
                        <img
                          src={`data:image; base64,${base64String}`}
                          alt=""
                        />
                        {data.title}
                      </td>
                      <td className="td-class">{data.description}</td>
                      <td className="">
                        <DotMenu
                          updateData={data}
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
    </>
  );
};

export default Occasion;
