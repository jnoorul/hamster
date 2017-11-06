import * as actions from './actionNames';

const hamsterServerUrl = 'https://hamster-server.herokuapp.com';
// const hamsterServerUrl = 'https://localhost:3005';

export function loadCustomerInfo() {
  return {
    type: actions.LOAD_CUSTOMER_INFO,
    customerInfo: {},
  };
}

export function loadPortfolioInfo() {
  return {
    type: actions.LOAD_PORTFOLIO_INFO,
    info: {},
  };
}

export function setQuestionNumber(qnNumber) {
  return {
    type: actions.SET_QUESTION_NUMBER,
    qnNumber,
  };
}

export function setAge(age) {
  return {
    type: actions.SET_AGE,
    age,
  };
}

export function setExperience(experience) {
  return {
    type: actions.SET_EXPERIENCE,
    experience,
  };
}

export function setKnowledge(knowledge) {
  return {
    type: actions.SET_KNOWLEDGE,
    knowledge,
  };
}

export function setInvestmentHorizon(investmentHorizon) {
  return {
    type: actions.SET_INVESTMENT_HORIZON,
    investmentHorizon,
  };
}

export function setReactionToFluctuation(reactionToFluctuation) {
  return {
    type: actions.SET_REACTION_TO_FLUCTUATION,
    reactionToFluctuation,
  };
}

export function setAssetType(assetType) {
  return {
    type: actions.SET_ASSET_TYPE,
    assetType,
  };
}

export function saveCustomerSuccess(customerInfo) {
  return {
    type: actions.CUSTOMER_INFO_SAVE_SUCCESS,
    customerInfo,
  };
}

export function saveCustomerInfoWithDispatch(dispatch, customerInfo) {
  fetch(`${hamsterServerUrl}/customer/insert`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: customerInfo,
  }).then((res) => {
    return res.json();
  }).then((jsonRes)=> {
    dispatch(saveCustomerSuccess(jsonRes));
  });
}

