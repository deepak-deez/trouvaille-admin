import {
  ADMIN_REQUEST,
  ADMIN_SUCCESS,
  ADMIN_FAILED,
} from "../constants/loginAdminConstants";
import axios from "axios";

const URL = process.env.api_server;

export const getUsers = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_REQUEST,
    });

    const config = { "Content-type": "application/json" };
    const body = {
      email,
      password,
      type: "ADMIN",
    };

    const { data } = await axios.post(`${URL}login/ADMIN`, body, config);
    if (data.status == 200) {
      dispatch({
        type: ADMIN_SUCCESS,
        payload: data,
      });
    } else if (data.status == 500) {
      dispatch({
        type: ADMIN_FAILED,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_FAILED,
      payload: error,
    });
  }
};
