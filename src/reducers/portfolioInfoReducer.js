import * as actions from '../actions/actionNames';

export default function portfolioInfoReducer(state = {}, action) {
  switch (action.type) {
    case actions.SET_ASSET_TYPE:
      return Object.assign({}, state, { assetType: action.assetType });
    default:
      return state;
  }
}
