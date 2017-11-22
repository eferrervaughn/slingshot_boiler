import * as types from '../constants/actionTypes';
import Airtable from 'airtable';

import {getFormattedDateTime} from '../utils/dates';

const API_KEY = 'keysmOnboBG8IYPwR';

var base = new Airtable({apiKey: API_KEY}).base('appwS8caNUMzpsFwb');


export function getData() {
  return {
    type: types.FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: types.FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: types.FETCHING_DATA_FAILURE
  }
}

export function fetchData(id) {
  return (dispatch) => {
    dispatch(getData())
    base('Influences').find(id)
      .then((data) => {
        dispatch(getDataSuccess({id, data: data.fields}))
      })
      .catch((err) => console.log('err:', err))
  }
}

export function getInfluence(id) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.CONSTANT,
      dateModified: getFormattedDateTime(),
    });
  };
}