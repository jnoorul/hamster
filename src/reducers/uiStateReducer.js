import * as actions from '../actions/actionNames';

export default function uiStateReducer(state = {
  qnNumber: 0,
  totalQns: 9,
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
    case actions.GET_PORTFOLIO_INFO_REQUEST:
      return Object.assign({}, state, { getPortfolioStatus: 'inprogress' });
    case actions.GET_PORTFOLIO_INFO_SUCCESS:
      return Object.assign({}, state, { getPortfolioStatus: 'success' });
    case actions.GET_PORTFOLIO_INFO_FAILURE:
      return Object.assign({}, state, { getPortfolioStatus: 'failure', err: action.err });
    default:
      return state;
  }
}
