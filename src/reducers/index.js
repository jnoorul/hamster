import { combineReducers } from 'redux';
import customerInfo from './customerInfoReducer';
import portfolioInfo from './portfolioInfoReducer';
import alertSettings from './alertSettingsReducer';
import uiState from './uiStateReducer';

export default combineReducers({ customerInfo, portfolioInfo, alertSettings, uiState });
