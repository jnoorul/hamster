export default function customerInfoReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_CUSTOMER_INFO':
      return Object.assign({}, state, {name: action.info.name});
    default:
      return state;
  }
}
