import * as actions from '../actions/actionNames';

export default function alertSettingsReducer(state = {}, action) {
  switch (action.type) {
    case actions.SET_ALERT_VIA:
      return Object.assign({}, state, { alertVia: action.alertVia });
    case actions.SET_ALERT_PORTFOLIO_ABOVE:
      return Object.assign({}, state, { portfolioAbove: action.portfolioAbove });
    case actions.SET_ALERT_PORTFOLIO_BELOW:
      return Object.assign({}, state, { portfolioBelow: action.portfolioBelow });
    case actions.SET_ALERT_INSTRUMENT_ABOVE:
      return Object.assign({}, state, { instrumentAbove: action.instrumentAbove });
    case actions.SET_ALERT_INSTRUMENT_BELOW:
      return Object.assign({}, state, { instrumentBelow: action.instrumentBelow });
    default:
      return state;
  }
}
