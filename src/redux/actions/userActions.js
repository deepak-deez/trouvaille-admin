import {
  ADMIN_REQUEST,
  ADMIN_SUCCESS,
  ADMIN_FAILED,
} from "../constants/loginAdminConstants";
import axios from "axios";

const URL = process.env.REACT_APP_NODE_API;

export const getUsers = (email, password) => async (dispatch) => {
  console.log(URL);
  console.log(password);
  try {
    dispatch({
      type: ADMIN_REQUEST,
    });

    const config = { "Content-type": "application/json" };
    const body = {
      email,
      password,
      type: "Admin",
    };

    const { data } = await axios.post(`${URL}/login/Admin`, body, config);
    localStorage.setItem("userDetails", JSON.stringify(data));
    dispatch({
      type: ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_FAILED,
      payload: error,
    });
  }
};
