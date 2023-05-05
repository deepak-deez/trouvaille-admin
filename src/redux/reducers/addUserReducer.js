import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../constants/addUserConstant.js";

const addNewUserStateInitial = {
  loading: false,
  userDetails: null,
  error: null,
};

export const addNewUserReducer = (state = addNewUserStateInitial, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        userDetails: null,
        loading: true,
        error: null,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        userDetails: action.payload,
      };
    case ADD_USER_FAILED:
      return {
        ...state,
        userDetails: null,
        loading: true,
        error: action.payload,
      };
    default: {
      return false;
    }
  }
};

const getUserStateInitial = {
  loading: false,
  userDetails: null,
  error: null,
};

export const getUserReducer = (state = getUserStateInitial, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        userDetails: null,
        loading: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        userDetails: action.payload,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        userDetails: null,
        loading: true,
        error: action.payload,
      };
    default: {
      return false;
    }
  }
};

const updateUserStateInitial = {
  loading: false,
  userDetails: null,
  error: null,
};

export const updateUserReducer = (state = updateUserStateInitial, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        userDetails: null,
        loading: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        userDetails: action.payload,
      };
    case UPDATE_USER_FAILED:
      return {
        ...state,
        userDetails: null,
        loading: true,
        error: action.payload,
      };
    default: {
      return false;
    }
  }
};

const delUserStateInitial = {
  loading: false,
  userDetails: null,
  error: null,
};

export const delUserReducer = (state = delUserStateInitial, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        ...state,
        userDetails: null,
        loading: true,
        error: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        userDetails: action.payload,
      };
    case DELETE_USER_FAILED:
      return {
        ...state,
        userDetails: null,
        loading: true,
        error: action.payload,
      };
    default: {
      return false;
    }
  }
};
