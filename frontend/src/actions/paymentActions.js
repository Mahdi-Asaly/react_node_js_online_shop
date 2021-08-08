import {
    PRODUCT_PAYMENT_REQUEST,
    PRODUCT_PAYMENT_SUCCESS,
    PRODUCT_PAYMENT_FAIL,
    PAYMENT_SAVE_REQUEST,
    PAYMENT_SAVE_SUCCESS,
    PAYMENT_SAVE_FAIL
  } from '../constants/paymentConstants';
  import axios from 'axios';
  
  
  
  const listPayments = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_PAYMENT_REQUEST });
      const { data } = await axios.get(
        '/api/payments'
      );
      dispatch({ type: PRODUCT_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_PAYMENT_FAIL, payload: error.message });
    }
  };


  const savePayment = (payment) => async (dispatch, getState) => {
    try {
      dispatch({ type: PAYMENT_SAVE_REQUEST, payload: payment });
      if (!payment._id) {
        const { data } = await axios.post('/api/payments', payment);
        dispatch({ type: PAYMENT_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await axios.put(
          '/api/payments/' + payment._id,payment);
        dispatch({ type: PAYMENT_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: PAYMENT_SAVE_FAIL, payload: error.message });
    }
  };
  


  export {
    listPayments,
    savePayment,
  };