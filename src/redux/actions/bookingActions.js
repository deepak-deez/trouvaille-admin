import axios from "axios";
import {
  GET_BOOKING_FAILED,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_REQUEST,
  UPDATE_BOOKING_REQUEST,
  UPDATE_BOOKING_SUCCESS,
  UPDATE_BOOKING_FAILED,
  DELETE_BOOKING_REQUEST,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILED,
  GET_SINGLE_BOOKING_FAILED,
  GET_SINGLE_BOOKING_SUCCESS,
  GET_SINGLE_BOOKING_REQUEST,
  GET_NOTIFICATION_FAILED,
  GET_NOTIFICATION_REQUEST,
  GET_NOTIFICATION_SUCCESS,
} from "../constants/bookingConstants";

const API = process.env.REACT_APP_NODE_API;

export const getNotification = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_NOTIFICATION_REQUEST,
    });

    const header = {
      "Content-type": "application/json",
    };

    const { data } = await axios.get(
      `${API}/get-cancel-booking-request`,
      header
    );

    dispatch({
      type: GET_NOTIFICATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_NOTIFICATION_FAILED,
      error: error.message,
    });
  }
};

export const getSingleBooking = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_BOOKING_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.get(`${API}/booking-details/${id}`, header);

    dispatch({
      type: GET_SINGLE_BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_BOOKING_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const deleteBooking = (id, userType) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_BOOKING_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.delete(
      `${API}/delete-booking/${userType}/${id}`,
      header
    );

    dispatch({
      type: DELETE_BOOKING_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: DELETE_BOOKING_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const getBooking = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_BOOKING_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.get(`${API}/all-booking`, header);

    dispatch({
      type: GET_BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOKING_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const updateBooking =
  (id, status, reason, bookingStatus, read, notificationLink) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_BOOKING_REQUEST,
      });
      const body = {
        cancellationStatus: status,
        deleteReason: reason,
        bookingStatus: bookingStatus,
        link: notificationLink,
        read: read,
      };
      const header = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        `${API}/update-booking/${id}`,
        body,
        header
      );
      console.log(data);

      dispatch({
        type: UPDATE_BOOKING_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_BOOKING_FAILED,
        payload: error.response.data.message,
      });
    }
  };
