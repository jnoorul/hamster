import * as actions from '../actions/actionNames';

export default function uiStateReducer(state = {
  qnNumber: 0,
  totalQns: 6,
}, action) {
  switch (action.type) {
    case actions.SET_QUESTION_NUMBER:
      return Object.assign({}, state, { qnNumber: action.qnNumber });
    default:
      return state;
  }
}
