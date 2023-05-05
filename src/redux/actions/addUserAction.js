import axios from "axios";
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "../actions/addUserAction.js";

const BASE_URL = process.env.REACT_APP_NODE_API;

export const addNewUser = (name, email, type) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_USER_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const body = {
      name,
      email,
    };
    const { data } = await axios.post(`${BASE_URL}/add/${type}`, body, header);
    dispatch({
      tyep: ADD_USER_SUCCESS,
      payload: data,
    });
  } catch {
    dispatch({
      type: ADD_USER_FAILED,
      payload: error.message,
    });
  }
};

export const getUser = (type) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.get(
      `${BASE_URL}/database/${type}`,
      body,
      header
    );
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch {
    dispatch({
      type: GET_USER_FAILED,
      payload: error.message,
    });
  }
};

export const updateUser = (name, email, type, phone) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const body = {
      name,
      email,
      phone,
    };
    const { data } = await axios.post(
      `${BASE_URL}/update/${type}`,
      body,
      header
    );
    dispatch({
      tyep: UPDATE_USER_SUCCESS,
      payload: data,
    });
  } catch {
    dispatch({
      type: UPDATE_USER_FAILED,
      payload: error.message,
    });
  }
};

export const delUser = (id, type) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });
    const header = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.delete(
      `${BASE_URL}/delete/${type}/${id}`,
      header
    );
    dispatch({
      tyep: DELETE_USER_SUCCESS,
      payload: data,
    });
  } catch {
    dispatch({
      type: DELETE_USER_FAILED,
      payload: error.message,
    });
  }
};
