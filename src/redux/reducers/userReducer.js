import { ADMIN_REQUEST, ADMIN_SUCCESS, ADMIN_FAILED } from "../constants/types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADMIN_REQUEST: 
      return {
        ...state,
        loading: true,
        users: null,
        error: null,
      };
    case ADMIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: true,
        error: null,
      };
    case ADMIN_FAILED: 
      return {
        ...state,
        loading: true,
        users: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
