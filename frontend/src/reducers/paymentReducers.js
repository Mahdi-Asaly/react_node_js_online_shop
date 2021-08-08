import {
    PRODUCT_PAYMENT_REQUEST,
    PRODUCT_PAYMENT_SUCCESS,
    PRODUCT_PAYMENT_FAIL,
    PAYMENT_SAVE_REQUEST,
    PAYMENT_SAVE_SUCCESS,
    PAYMENT_SAVE_FAIL,

  } from '../constants/paymentConstants';
  
  function paymentListReducer(state = { payments: [] }, action) {
    switch (action.type) {
      case PRODUCT_PAYMENT_REQUEST:
        return { loading: true, payments: [] };
      case PRODUCT_PAYMENT_SUCCESS:
        return { loading: false, payments: action.payload };
      case PRODUCT_PAYMENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function paymentSaveReducer(state = { payment: {} }, action) {
    switch (action.type) {
      case PAYMENT_SAVE_REQUEST:
        return { loading: true };
      case PAYMENT_SAVE_SUCCESS:
        return { loading: false, success: true, payment: action.payload };
      case PAYMENT_SAVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  export {
    paymentListReducer,
    paymentSaveReducer,
  };