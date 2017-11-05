export default function uiStateReducer(state = {
  qnNumber: 0,
  totalQns: 5,
  currentPage: 'welcome',
}, action) {
  switch (action.type) {
    case 'SET_QUESTION_NUMBER':
      return Object.assign({}, state, { qnNumber: action.qnNumber });
    case 'SET_CURRENT_PAGE':
      return Object.assign({}, state, { currentPage: action.currentPage });
    default:
      return state;
  }
}
