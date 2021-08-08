import {
    PRODUCT_RECORD_REQUEST,
    PRODUCT_RECORD_SUCCESS,
    PRODUCT_RECORD_FAIL,
    RECORD_SAVE_REQUEST,
    RECORD_SAVE_SUCCESS,
    RECORD_SAVE_FAIL,
  } from '../constants/recordConstants';
  import axios from 'axios';
  
  
  
  const listRecords = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_RECORD_REQUEST });
      const { data } = await axios.get(
        '/api/records'
      );
      dispatch({ type: PRODUCT_RECORD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_RECORD_FAIL, payload: error.message });
    }
  };
  const saveRecord = (records) => async (dispatch, getState) => {
    try {
      dispatch({ type: RECORD_SAVE_REQUEST, payload: records });
      if (!records._id) {
        const { data } = await axios.post('/api/records', records);
        dispatch({ type: RECORD_SAVE_SUCCESS, payload: data });
      } else {
        console.log('updating record cuz its found');
        const { data } = await axios.put(
          '/api/records/' + records.item,records);
        dispatch({ type: RECORD_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: RECORD_SAVE_FAIL, payload: error.message });
    }
  };
  


  export {
    saveRecord,
    listRecords,
  };