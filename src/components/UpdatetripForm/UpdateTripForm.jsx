import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPackage,
  updatePackage,
} from "../../redux/actions/addPackageActions";
import tempIcon from "../../assets/images/trip-list/AddNewTrip-icon.svg";
import MultipleTripForm from "../MultipleTripForm/MultipleTripForm";
import TagsInput from "../TagsInput/TagsInput";
import SelectMenu from "../SelectMenu/SelectMenu";
import Faq from "../Faq/Faq";
import StatusMenu from "../StatusMenu/StatusMenu";
import imgToUrl from "../../functions/imgToUrl";
import Swal from "sweetalert2";
import DateRangeComp from "../DateRange/DateRangeComp";
import { GetOptions, Status } from "../NewTripForm/tripFormSelect";
import MultipleDateInputs from "../MultipleDateInputs/MultipleDateInputs";
import LoadingScreen from "../Loading/LoadingScreen";
import { getSinglePackage } from "../../redux/actions/addPackageActions";
import addDays from "date-fns/addDays";
import convertDate from "../../functions/monthFormat";

const NewTripForm = () => {
  const { id } = useParams();
  console.log(id);

  const { occassionOptions, tripCategoryOptions, travelTypeOptions } =
    GetOptions();
  const { data } = useSelector((state) => state.getSinglePackage);
  const { data: updatedPackage, loading } = useSelector(
    (state) => state.updatePackage
  );
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const [briefd, setBriefd] = useState("");
  const [status, setStatus] = useState("");
  const [placeNumber, setPlaceNumber] = useState("");
  const [maximumGuests, setMaximumGuests] = useState("");
  const [tripCategory, setTripCategory] = useState([]);
  const [occasions, setOccasions] = useState([]);
  const [travelType, setTravelType] = useState("");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [duration, setDuration] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [arrayDate, setArrayDate] = useState();
  const [faqFields, setFaqFields] = useState([
    {
      question: "",
      answer: "",
    },
  ]);

  const [inputFields, setInputFields] = useState([
    {
      title: "",
      name: "",
      description: "",
      icon: "",
    },
  ]);

  console.log(data);
  const addFaqField = () => {
    setFaqFields([
      ...faqFields,
      {
        question: "",
        answer: "",
      },
    ]);
  };

  useEffect(() => {
    dispatch(getSinglePackage(id));
  }, []);
  console.log(data);
  const dispatch = useDispatch();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    let uplImg = e.target.files[0];
    imgToUrl(uplImg).then((res) => {
      console.log(res);
      let data_Url = res;
      setImage(data_Url);
    });
  }
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        title: "",
        name: "",
        description: "",
        icon: "",
      },
    ]);
  };

  useEffect(() => {
    if (data && data?.data) {
      setStatus({
        label: data && data.data[0].status,
        value: data && data.data[0].status,
      });
      setBriefd(data && data.data[0].briefDescription);
      setTravelType({
        label: data && data.data[0].travelType,
        value: data && data.data[0].travelType,
      });
      setDiscountedPrice(data.data[0].discountedPrice);
      setPrice(data?.data[0].price);
      setMaximumGuests(data?.data[0].maximumGuests);
      setPlaceNumber(data?.data[0].placeNumber);
      setTitle(data && data?.data[0].title);
      setInputFields(data?.data[0].tripHighlights);
      setFaqFields(data?.data[0].faq);
      setAmenities(data?.data[0].amenities);
      setFile(data?.data[0].image.url);
      // errors
      data?.data[0]?.tripCategory?.map((item) => {
        setTripCategory([...tripCategory, { label: item, value: item }]);
      });
      // data?.data[0]?.occasions?.forEach((item) => {
      //   return setOccasions([...occasions, { label: item, value: item }]);
      // });
      setDuration(data?.data[0].duration);
      setRange([
        {
          startDate: new Date(
            convertDate(data?.data[0].duration.split("-")[0])
          ),
          endDate: new Date(convertDate(data?.data[0].duration.split("-")[1])),
          key: "selection",
        },
      ]);
    }
  }, [data]);
  console.log(data?.data[0]?.tripCategory);
  console.log(tripCategory, "after map");

  const submitHandler = () => {
    console.log(id, "id");
    console.log(title);
    console.log(image);
    if (
      title &&
      image &&
      duration &&
      tripCategory.map((trip) => trip.value) &&
      placeNumber &&
      maximumGuests &&
      inputFields &&
      price &&
      discountedPrice &&
      occasions.map((occasion) => occasion.value) &&
      travelType.value &&
      amenities &&
      briefd &&
      faqFields &&
      status.value
    ) {
      console.log("nkjjhftgxdfgchvjk");
      dispatch(
        updatePackage(
          id,
          title,
          image,
          duration,
          arrayDate,
          tripCategory.map((trip) => trip.value),
          placeNumber,
          maximumGuests,
          inputFields,
          price,
          discountedPrice,
          occasions.map((occasion) => occasion.value),
          travelType.value,
          amenities,
          briefd,
          faqFields,
          status.value
        )
      );
    } else {
      Swal.fire({
        className: "pop-top",
        position: "top",
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
        showConfirmButton: false,
        width: "40vh",
        // toast: true,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

  useEffect(() => {
    if (updatedPackage?.success) {
      console.log(updatedPackage);
      // set addedPackage to null
      dispatch({ type: "ADD_PACKAGE_SUCCESS", payload: null });
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "success",
        title: "Success",
        text: updatedPackage.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else if (updatedPackage?.success === false) {
      Swal.fire({
        position: "center",
        width: "40vh",
        icon: "error",
        title: "failed",
        text: updatedPackage.message,
        showConfirmButton: false,
        toast: false,
        timer: 2000,
        timerProgressBar: true,
      });
      dispatch({ type: "ADD_PACKAGE_SUCCESS", payload: null });
    }
  }, [updatedPackage]);
  console.log(updatedPackage);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="flex-col flex md:flex-row">
        <div className="md:w-1/3 bg-[#f5f7f7] rounded-lg m-4 p-4 h-[50%]">
          <div className="flex justify-center">
            {file ? (
              <img src={file} alt="browserIcon" />
            ) : (
              <img src={tempIcon} alt="browserIcon" />
            )}
          </div>
          <div className=" flex justify-center">
            <div className="relative">
              <button className="border-2 border-red-500 px-2 rounded-md text-red-500">
                Browse
              </button>
              <input
                type="file"
                accept=".jpg,.png,.jpeg,.svg"
                className=" absolute left-[10%] opacity-0 cursor-pointer w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <div className="p-2 flex flex-col space-y-2">
            <h2 className="text-start text-2xl font-semibold">Update Trip</h2>
            <label className=" text-gray-400">Trip Package Title</label>
            <input
              className="border-2 py-2 rounded-md"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="p-2 flex flex-col space-y-2">
            <h2 className="text-start font-bold">
              Trip Duration & Day Activities
            </h2>
            <label className=" text-gray-400">Duration</label>
            <DateRangeComp
              duration={duration}
              setDuration={setDuration}
              range={range}
              setRange={setRange}
            />
            <div className="mr-2">
              {duration && (
                <MultipleDateInputs
                  duration={duration}
                  arrayDate={arrayDate}
                  setArrayDate={setArrayDate}
                />
              )}
            </div>
          </div>
          <div className="p-2 flex flex-col space-y-2">
            <div className="flex-col flex md:flex-row justify-between ">
              <div className="flex flex-col w-full">
                <label className=" text-gray-400 ">Trip category</label>
                <SelectMenu
                  options={tripCategoryOptions}
                  value={tripCategory}
                  width="100%"
                  setvalue={setTripCategory}
                />
              </div>
              <div className="flex flex-col md:px-3">
                <label className=" text-gray-400">No. of places</label>
                <input
                  className="border-2 py-2 rounded-md"
                  type="number"
                  value={placeNumber}
                  onChange={(e) => {
                    setPlaceNumber(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col md:px-3">
                <label className=" text-gray-400">Maximum guests</label>
                <input
                  className="border-2 py-2 rounded-md"
                  type="number"
                  value={maximumGuests}
                  onChange={(e) => {
                    setMaximumGuests(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="p-2 flex flex-col space-y-2">
            <div className="flex justify-between">
              <h1 className=" font-bold">Trip Highlights</h1>
              <button
                className="border-2 border-red-500 px-2 rounded-md text-red-500 "
                onClick={addInputField}
              >
                Add New
              </button>
            </div>
            <MultipleTripForm
              inputFields={inputFields}
              setInputFields={setInputFields}
              res={data?.data[0].tripHighlights}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          </div>
          <div className="p-2 grid grid-col-4 flex-col space-y-2">
            <div className="flex justify-between w-full">
              <div className="flex flex-col  w-full">
                <label className=" text-gray-400">Price</label>
                <input
                  className="border-2 py-2 rounded-md w-[90%]"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className=" text-gray-400"> Discounted Price</label>
                <input
                  className="border-2 py-2 rounded-md w-[90%]"
                  type="number"
                  value={discountedPrice}
                  onChange={(e) => {
                    setDiscountedPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col w-full">
                <label className=" text-gray-400">Occassion's</label>
                <SelectMenu
                  options={occassionOptions}
                  width="91%"
                  value={occasions}
                  setvalue={setOccasions}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className=" text-gray-400">Travel type</label>
                <StatusMenu
                  width="91%"
                  options={travelTypeOptions}
                  value={travelType}
                  setvalue={setTravelType}
                />
              </div>
            </div>
          </div>
          <div className="p-2 flex flex-col space-y-2 ">
            <TagsInput
              heading="Amenities"
              tags={amenities}
              setTags={setAmenities}
            />
          </div>
          <div className="p-2 flex flex-col space-y-2 ">
            <label className=" text-gray-400">Brief description</label>
            <textarea
              rows="5"
              cols="33"
              type="text"
              className="border-2 rounded-md resize-none"
              name="d"
              value={briefd}
              onChange={(e) => {
                setBriefd(e.target.value);
              }}
            />
          </div>
          <div className="p-2 flex flex-col space-y-2 ">
            <div className="flex justify-between">
              <h1 className=" font-bold">FAQ </h1>
              <button
                className="border-2 border-red-500 px-2 rounded-md text-red-500 "
                onClick={addFaqField}
              >
                Add More
              </button>
            </div>
            <Faq
              faqFields={faqFields}
              setFaqFields={setFaqFields}
              addFaqField={addFaqField}
            />
          </div>
          <div className="p-2 flex flex-col space-y-2 ">
            <div className=" flex justify-between items-center w-full space-x-3">
              <StatusMenu
                width="100%"
                options={Status}
                value={status}
                setvalue={setStatus}
              />
              <button
                className="bg-[#CD4B43] rounded-md w-1/2 p-3"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTripForm;
