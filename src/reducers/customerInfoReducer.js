import * as actions from '../actions/actionNames';

export default function customerInfoReducer(state = {}, action) {
  switch (action.type) {
    case actions.LOAD_CUSTOMER_INFO:
      return Object.assign({}, state, { name: action.info.name });
    case actions.SET_AGE:
      return Object.assign({}, state, { age: action.age });
    default:
      return state;
  }
}
