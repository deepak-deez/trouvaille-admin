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
} from "../constants/bookingConstants";

const getSingleBookingStateInitial = {
  loading: false,
  data: null,
  error: null,
};
export const getSingleBookingReducer = (
  state = getSingleBookingStateInitial,
  action
) => {
  switch (action.type) {
    case GET_SINGLE_BOOKING_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case GET_SINGLE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case GET_SINGLE_BOOKING_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

const updateBookingStateInitial = {
  loading: false,
  data: null,
  error: null,
};

export const updateBookingReducer = (
  state = updateBookingStateInitial,
  action
) => {
  switch (action.type) {
    case UPDATE_BOOKING_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case UPDATE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case UPDATE_BOOKING_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

const getBookingStateInitial = {
  loading: false,
  data: null,
  error: null,
};

export const getBookingReducer = (state = getBookingStateInitial, action) => {
  switch (action.type) {
    case GET_BOOKING_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case GET_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case GET_BOOKING_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

const deleteBookingStateInitial = {
  loading: false,
  data: null,
  error: null,
};

export const deleteBookingReducer = (
  state = deleteBookingStateInitial,
  action
) => {
  switch (action.type) {
    case DELETE_BOOKING_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case DELETE_BOOKING_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
