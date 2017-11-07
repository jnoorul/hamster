import * as actions from '../actions/actionNames';

export default function uiStateReducer(state = {
  qnNumber: 0,
  totalQns: 11,
}, action) {
  switch (action.type) {
    case actions.SET_QUESTION_NUMBER:
      return Object.assign({}, state, { qnNumber: action.qnNumber });
    case actions.CUSTOMER_INFO_SAVE_REQUEST:
      return Object.assign({}, state, { saveCustomerStatus: 'inprogress' });
    case actions.CUSTOMER_INFO_SAVE_SUCCESS:
      return Object.assign({}, state, { saveCustomerStatus: 'success' });
    case actions.CUSTOMER_INFO_SAVE_FAILURE:
      return Object.assign({}, state, { saveCustomerStatus: 'failure', err: action.err });

    case actions.GET_RISK_SCORE_REQUEST:
      return Object.assign({}, state, { getRiskScoreStatus: 'inprogress' });
    case actions.GET_RISK_SCORE_SUCCESS:
      return Object.assign({}, state, { getRiskScoreStatus: 'success' });
    case actions.GET_RISK_SCORE_FAILURE:
      return Object.assign({}, state, { getRiskScoreStatus: 'failure', err: action.err });

    case actions.GET_PORTFOLIO_INFO_REQUEST:
      return Object.assign({}, state, { getPortfolioStatus: 'inprogress' });
    case actions.GET_PORTFOLIO_INFO_SUCCESS:
      return Object.assign({}, state, { getPortfolioStatus: 'success' });
    case actions.GET_PORTFOLIO_INFO_FAILURE:
      return Object.assign({}, state, { getPortfolioStatus: 'failure', err: action.err });
    case actions.SAVE_ALERT_SETTINGS_REQUEST:
      return Object.assign({}, state, { saveAlertStatus: 'inprogress' });
    case actions.SAVE_ALERT_SETTINGS_SUCCESS:
      return Object.assign({}, state, { saveAlertStatus: 'success' });
    case actions.SAVE_ALERT_SETTINGS_FAILURE:
      return Object.assign({}, state, { saveAlertStatus: 'failure', err: action.err });
    default:
      return state;
  }
}
