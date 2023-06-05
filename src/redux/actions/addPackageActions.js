import axios from "axios";

import {
  ADD_PACKAGE_REQUEST,
  ADD_PACKAGE_SUCCESS,
  ADD_PACKAGE_FAILED,
  GET_PACKAGE_FAILED,
  GET_PACKAGE_SUCCESS,
  GET_PACKAGE_REQUEST,
  UPDATE_PACKAGE_REQUEST,
  UPDATE_PACKAGE_SUCCESS,
  UPDATE_PACKAGE_FAILED,
  DELETE_PACKAGE_REQUEST,
  DELETE_PACKAGE_SUCCESS,
  DELETE_PACKAGE_FAILED,
  GET_SINGLE_PACKAGE_FAILED,
  GET_SINGLE_PACKAGE_SUCCESS,
  GET_SINGLE_PACKAGE_REQUEST,
} from "../constants/addPackageConstants";

const API = process.env.REACT_APP_NODE_API;

export const getSinglePackage = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_PACKAGE_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.get(
      `${API}/get-trip-details/trip-package/${id}`,
      header
    );

    dispatch({
      type: GET_SINGLE_PACKAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PACKAGE_FAILED,
      payload: error.message,
    });
  }
};

export const getPackage = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PACKAGE_REQUEST,
    });

    const header = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`${API}/get-module/trip-package`, header);
    dispatch({
      type: GET_PACKAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PACKAGE_FAILED,
      payload: error.message,
    });
  }
};

export const addPackage =
  (
    title,
    image,
    duration,
    activities = [],
    tripCategory,
    placeNumber,
    maximumGuests,
    tripHighlights,
    price,
    discountedPrice,
    occasions,
    travelType,
    amenities,
    briefDescription,
    faq,
    status
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ADD_PACKAGE_REQUEST,
      });

      const body = {
        title,
        image,
        duration,
        activities,
        tripCategory,
        placeNumber,
        maximumGuests,
        tripHighlights,
        price,
        discountedPrice,
        occasions,
        travelType,
        amenities,
        briefDescription,
        faq,
        status,
      };

      const header = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post(
        `${API}/create-module/trip-package`,
        body,
        header
      );

      console.log(data);

      dispatch({
        type: ADD_PACKAGE_SUCCESS,
        payload: data,
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: ADD_PACKAGE_FAILED,
        payload: error.message,
      });
    }
  };

export const updatePackage =
  (
    id,
    title,
    image,
    duration,
    activities = [],
    tripCategory,
    placeNumber,
    maximumGuests,
    tripHighlights,
    price,
    discountedPrice,
    occasions,
    travelType,
    amenities,
    briefDescription,
    faq,
    status
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_PACKAGE_REQUEST,
      });

      const header = {
        "Content-Type": "application/json",
      };

      const body = {
        id,
        title,
        image,
        duration,
        activities,
        tripCategory,
        placeNumber,
        maximumGuests,
        tripHighlights,
        price,
        discountedPrice,
        occasions,
        travelType,
        amenities,
        briefDescription,
        faq,
        status,
      };

      const { data } = await axios.post(
        `${API}/update-module/trip-package/${id}`,
        body,
        header
      );

      dispatch({
        type: UPDATE_PACKAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PACKAGE_FAILED,
        payload: error.message,
      });
    }
  };

export const deletePackage = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_PACKAGE_REQUEST,
    });

    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.delete(
      `${API}/delete-module/trip-package/${id}`,
      header
    );
    dispatch({
      type: DELETE_PACKAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PACKAGE_FAILED,
      payload: error.message,
    });
  }
};
