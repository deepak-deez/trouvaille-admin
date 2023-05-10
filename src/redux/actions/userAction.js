import { ADMIN_REQUEST, ADMIN_SUCCESS, ADMIN_FAILED } from "../constants/types";
import axios from "axios";

const URL = process.env.api_server;

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(``);
    dispatch({
      type: ADMIN_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_FAILED,
      payload: console.log(e),
    });
  }
};
