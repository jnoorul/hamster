import { combineReducers } from 'redux';
import customerInfo from './customerInfoReducer';
import portfolioInfo from './portfolioInfoReducer';

export default combineReducers({ customerInfo, portfolioInfo });
