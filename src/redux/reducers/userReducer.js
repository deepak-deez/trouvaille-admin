import { ADMIN_REQUEST, ADMIN_SUCCESS, ADMIN_FAILED } from "../constants/loginAdminConstants";

const initialState = {
  userDetails: [],
  loading: false,
  error: null,
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_REQUEST: 
      return {
        ...state,
        loading: true,
        userDetails: null,
        error: null,
      };
    case ADMIN_SUCCESS:
      return {
        ...state,
        loading: true,
        userDetails: action.payload,
        error: null,
      };
    case ADMIN_FAILED: 
      return {
        ...state,
        loading: true,
        userDetails: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
