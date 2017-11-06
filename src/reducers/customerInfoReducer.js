import * as actions from '../actions/actionNames';

export default function customerInfoReducer(state = { userId: 'nameen_123', portfolioId: '1' }, action) {
  switch (action.type) {
    case actions.LOAD_CUSTOMER_INFO:
      return Object.assign({}, state, { ...action.customerInfo });
    case actions.CUSTOMER_INFO_SAVE_SUCCESS:
      return Object.assign({}, state, { ...action.customerInfo });
    case actions.SET_AGE:
      return Object.assign({}, state, { age: action.age });
    case actions.SET_EXPERIENCE:
      return Object.assign({}, state, { investmentExperience: action.experience });
    case actions.SET_KNOWLEDGE:
      return Object.assign({}, state, { investmentKnowledge: action.knowledge });
    case actions.SET_INVESTMENT_HORIZON:
      return Object.assign({}, state, { investmentHorizon: action.investmentHorizon });
    case actions.SET_REACTION_TO_FLUCTUATION:
      return Object.assign({}, state, { reactionToFluctuation: action.reactionToFluctuation });
    case actions.SET_USER_ID:
      return Object.assign({}, state, { userId: action.userId });
    case actions.SET_TOTAL_RISK_SCORE:
      return Object.assign({}, state, { totalRiskScore: action.totalRiskScore });
    default:
      return state;
  }
}
