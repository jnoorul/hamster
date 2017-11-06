import * as actions from '../actions/actionNames';

export default function uiStateReducer(state = {
  qnNumber: 0,
  totalQns: 8,
}, action) {
  switch (action.type) {
    case actions.SET_QUESTION_NUMBER:
      return Object.assign({}, state, { qnNumber: action.qnNumber });
    case actions.CUSTOMER_INFO_SAVE_REQUEST:
      return Object.assign({}, state, { saveCustomerStatus: 'inprogress' });
    case actions.CUSTOMER_INFO_SAVE_SUCCESS:
      return Object.assign({}, state, { saveCustomerStatus: 'success' });
    case actions.CUSTOMER_INFO_SAVE_FAILURE:
      return Object.assign({}, state, { saveCustomerStatus: 'failure' });
    default:
      return state;
  }
}
