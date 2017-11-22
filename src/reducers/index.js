import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { routerReducer } from 'react-router-redux';
import appData from './dataReducer';

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  appData
});

export default rootReducer;
