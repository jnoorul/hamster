import * as actions from '../actions/actionNames';

export default function portfolioInfoReducer(state = {}, action) {
  switch (action.type) {
    case actions.SET_ASSET_TYPE:
      return Object.assign({}, state, { assetType: action.assetType });
    case actions.SET_PORTFOLIO_INFO:
      return Object.assign({}, state, {
        ...action.portfolioInfo,
        assetType: Object.keys(action.portfolioInfo.distribution)[0],
      });
    case actions.SET_DETAILED_PORTFOLIO_INFO:
      return Object.assign({}, state, { detailedPortfolioInfo: [...action.detailedPortfolioInfo] });
    default:
      return state;
  }
}
