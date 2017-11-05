import * as actions from '../actions/actionNames';

export default function customerInfoReducer(state = {}, action) {
  switch (action.type) {
    case actions.LOAD_CUSTOMER_INFO:
      return Object.assign({}, state, { ...action.customerInfo });
    case actions.SET_AGE:
      return Object.assign({}, state, { age: action.age });
    case actions.SET_EXPERIENCE:
      return Object.assign({}, state, { experience: action.experience });
    case actions.SET_KNOWLEDGE:
      return Object.assign({}, state, { knowledge: action.knowledge });
    default:
      return state;
  }
}
