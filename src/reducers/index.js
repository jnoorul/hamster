import { combineReducers } from 'redux';
import customerInfo from './customerInfoReducer';
import portfolioInfo from './portfolioInfoReducer';
import uiState from './uiStateReducer';

export default combineReducers({ customerInfo, portfolioInfo, uiState });
