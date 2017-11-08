import * as actions from '../actions/actionNames';

export default function customerInfoReducer(state = { portfolioId: '1' }, action) {
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
    case actions.SET_EXPECTED_RETURN:
      return Object.assign({}, state, { expectedReturn: action.expectedReturn });
    case actions.SET_USER_ID:
      return Object.assign({}, state, { userId: action.userId });
    case actions.SET_MOBILE_NUMBER:
      return Object.assign({}, state, { mobileNumber: action.mobileNumber });
    case actions.SET_TOTAL_RISK_SCORE:
      return Object.assign({}, state, { totalRiskScore: action.totalRiskScore });
    case actions.SET_NAME:
      return Object.assign({}, state, { name: action.name });
    case actions.SET_INITIAL_INVESTMENT_AMOUNT:
      return Object.assign({}, state, { initialInvestmentAmount: action.initialInvestmentAmount });
    case actions.SET_POSITION:
      return Object.assign({}, state, { position: action.position });
    case actions.SET_TRANSACTION:
      return Object.assign({}, state, { transactions: action.transactions });
    default:
      return state;
  }
}
