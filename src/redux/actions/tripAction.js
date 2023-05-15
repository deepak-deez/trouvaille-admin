import axios from "axios";

import {
  ADD_TRIP_FAILED,
  ADD_TRIP_REQUEST,
  ADD_TRIP_SUCCESS,
  UPDATE_TRIP_FAILED,
  UPDATE_TRIP_REQUEST,
  UPDATE_TRIP_SUCCESS,
  DELETE_TRIP_FAILED,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_REQUEST,
  GET_TRIP_REQUEST,
  GET_TRIP_FAILED,
  GET_TRIP_SUCCESS,
} from "../constants/addTripConstant";

const API = process.env.REACT_APP_NODE_API;

export const addNewTip =
  (image, title, description, feature) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_TRIP_REQUEST,
      });
      const header = {
        "Content-Type": "application/json",
      };
      const body = {
        image,
        title,
        description,
      };
      const { data } = await axios.post(
        `${API}/create-feature/${feature}`,
        body,
        header
      );
      dispatch({
        type: ADD_TRIP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_TRIP_FAILED,
        payload: error.message,
      });
    }
  };

export const getTrip = (feature) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TRIP_REQUEST,
    });

    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.get(`${API}/get-feature/${feature}`, header);
    dispatch({
      type: GET_TRIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRIP_FAILED,
      payload: error.message,
    });
  }
};

export const deleteTrip = (id, feature) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TRIP_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.delete(
      `${API}/delete-feature/${feature}/${id}`,
      header
    );
    dispatch({
      type: DELETE_TRIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TRIP_FAILED,
      payload: error.message,
    });
  }
};

export const updateTrip =
  (id, title, description, feature) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_TRIP_REQUEST,
      });
      const header = {
        "Content-Type": "application/json",
      };
      const body = {
        id,
        title,
        description,
      };
      const { data } = await axios.post(
        `${API}/update-feature/${feature}/${id}`,
        body,
        header
      );
      dispatch({
        type: UPDATE_TRIP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_TRIP_FAILED,
        payload: error.message,
      });
    }
  };
