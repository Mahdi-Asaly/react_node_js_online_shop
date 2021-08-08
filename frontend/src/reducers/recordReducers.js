import {
    PRODUCT_RECORD_REQUEST,
    PRODUCT_RECORD_SUCCESS,
    PRODUCT_RECORD_FAIL,
    RECORD_SAVE_REQUEST,
    RECORD_SAVE_SUCCESS,
    RECORD_SAVE_FAIL
  } from '../constants/recordConstants';
  
  function recordListReducer(state = { records: [] }, action) {
    switch (action.type) {
      case PRODUCT_RECORD_REQUEST:
        return { loading: true, records: [] };
      case PRODUCT_RECORD_SUCCESS:
        return { loading: false, records: action.payload };
      case PRODUCT_RECORD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function recordSaveReducer(state = { record: {} }, action) {
    switch (action.type) {
      case RECORD_SAVE_REQUEST:
        return { loading: true };
      case RECORD_SAVE_SUCCESS:
        return { loading: false, success: true, record: action.payload };
      case RECORD_SAVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  export {
    recordSaveReducer,
    recordListReducer
  };