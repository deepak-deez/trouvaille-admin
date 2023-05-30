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

const Occasion = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdatePop, setShowUpdatePop] = useState(false);
  const [showDelPop, setShowDelPop] = useState(false);
  const [editData, setEditData] = useState("");
  const { data, loading } = useSelector((state) => state.getTrip);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrip("occasion"));
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="p-3">
        <div className="p-4 bg-white item-center w-full border-b-2">
          <div className="w-[100%]">
              <div className="tr-class md:grid md:grid-cols-3 text-center">
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
            <div>
              {/* {console.log("Data : ",data)} */}
              {data &&
                data?.data &&
                data.data.map((item, index) => {
                  return (
                    <div className=" tr-class text-start md:grid md:grid-cols-3" key={index}>
                        <div className="flex  items-center font-bold p-3 w-100 flex-col md:flex-row md:columns-2 md:gap-3 order-2 md:order-1">
                          <img
                            src={item.icon.url}
                            alt=""
                            className="h-[62px] w-[62px] mr-3"
                          />
                          <span className="px-2">{item.title}</span>
                        </div>
                      <p className="td-class order-3 md:order-2 text-center justify-center md:flex md:items-center">{item.description}</p>
                      <div className="text-end order-1 md:order-3 flex items-center justify-end">
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
    </>
  );
};

export default Occasion;
