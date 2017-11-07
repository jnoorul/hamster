import * as actions from './actionNames';

const hamsterServerUrl = 'https://hamster-server.herokuapp.com';
// const hamsterServerUrl = 'https://localhost:3005';

export function loadCustomerInfo(customerInfo) {
  return {
    type: actions.LOAD_CUSTOMER_INFO,
    customerInfo,
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

export function setInitialInvestmentAmount(initialInvestmentAmount) {
  return {
    type: actions.SET_INITIAL_INVESTMENT_AMOUNT,
    initialInvestmentAmount,
  };
}

export function setName(name) {
  return {
    type: actions.SET_NAME,
    name,
  };
}

export function setReactionToFluctuation(reactionToFluctuation) {
  return {
    type: actions.SET_REACTION_TO_FLUCTUATION,
    reactionToFluctuation,
  };
}

export function setUserId(userId) {
  return {
    type: actions.SET_USER_ID,
    userId,
  };
}

export function setTotalRiskScore(totalRiskScore) {
  return {
    type: actions.SET_TOTAL_RISK_SCORE,
    totalRiskScore,
  };
}

export function setExpectedReturn(expectedReturn) {
  return {
    type: actions.SET_EXPECTED_RETURN,
    expectedReturn,
  };
}

export function setAssetType(assetType) {
  return {
    type: actions.SET_ASSET_TYPE,
    assetType,
  };
}

export function setAlertVia(alertVia) {
  return {
    type: actions.SET_ALERT_VIA,
    alertVia,
  };
}

export function setAlertPortfolioAbove(portfolioAbove) {
  return {
    type: actions.SET_ALERT_PORTFOLIO_ABOVE,
    portfolioAbove,
  };
}

export function setAlertPortfolioBelow(portfolioBelow) {
  return {
    type: actions.SET_ALERT_PORTFOLIO_BELOW,
    portfolioBelow,
  };
}

export function setAlertInstrumentAbove(instrumentAbove) {
  return {
    type: actions.SET_ALERT_INSTRUMENT_ABOVE,
    instrumentAbove,
  };
}

export function setAlertInstrumentBelow(instrumentBelow) {
  return {
    type: actions.SET_ALERT_INSTRUMENT_BELOW,
    instrumentBelow,
  };
}



export function saveCustomerRequest() {
  return {
    type: actions.CUSTOMER_INFO_SAVE_REQUEST,
  };
}

export function saveCustomerSuccess() {
  return {
    type: actions.CUSTOMER_INFO_SAVE_SUCCESS,
  };
}

export function saveCustomerFailure(err) {
  return {
    type: actions.CUSTOMER_INFO_SAVE_FAILURE,
    err,
  };
}

export function getRiskScoreRequest() {
  return {
    type: actions.GET_RISK_SCORE_REQUEST,
  };
}

export function getRiskScoreSuccess() {
  return {
    type: actions.GET_RISK_SCORE_SUCCESS,
  };
}

export function getRiskScoreFailure(err) {
  return {
    type: actions.GET_RISK_SCORE_FAILURE,
    err,
  };
}

export function getPortfolioInfoRequest() {
  return {
    type: actions.GET_PORTFOLIO_INFO_REQUEST,
  };
}

export function getPortfolioInfoSuccess() {
  return {
    type: actions.GET_PORTFOLIO_INFO_SUCCESS,
  };
}

export function getPortfolioInfoFailure(err) {
  return {
    type: actions.GET_PORTFOLIO_INFO_FAILURE,
    err,
  };
}

export function getDetailedPortfolioInfoRequest() {
  return {
    type: actions.GET_DETAILED_PORTFOLIO_INFO_REQUEST,
  };
}

export function getDetailedPortfolioInfoSuccess() {
  return {
    type: actions.GET_DETAILED_PORTFOLIO_INFO_SUCCESS,
  };
}

export function getDetailedPortfolioInfoFailure(err) {
  return {
    type: actions.GET_DETAILED_PORTFOLIO_INFO_FAILURE,
    err,
  };
}

export function saveAlertSettingsRequest() {
  return {
    type: actions.SAVE_ALERT_SETTINGS_REQUEST,
  };
}

export function saveAlertSettingSuccess() {
  return {
    type: actions.SAVE_ALERT_SETTINGS_SUCCESS,
  };
}

export function saveAlertSettingsFailure(err) {
  return {
    type: actions.SAVE_ALERT_SETTINGS_FAILURE,
    err,
  };
}

export function setPorfolioInfo(portfolioInfo) {
  return {
    type: actions.SET_PORTFOLIO_INFO,
    portfolioInfo,
  };
}

export function setDetailedPorfolioInfo(detailedPortfolioInfo) {
  return {
    type: actions.SET_DETAILED_PORTFOLIO_INFO,
    detailedPortfolioInfo,
  };
}

export function getRiskScoreWithDispatch(dispatch, customerInfo) {
  dispatch(getRiskScoreRequest());
  fetch(`${hamsterServerUrl}/customer/riskscore`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(customerInfo),
  }).then((res) => {
    return res.json();
  }).then((jsonRes) => {
    setTimeout(() => {
      dispatch(setTotalRiskScore(jsonRes.totalRiskScore));
      dispatch(getRiskScoreSuccess());
    }, 500);
  }).catch((err) => {
    dispatch(getRiskScoreFailure(err.message));
  });
}

export function saveCustomerInfoWithDispatch(dispatch, customerInfo) {
  dispatch(saveCustomerRequest());
  fetch(`${hamsterServerUrl}/customer/insert`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(customerInfo),
  }).then((res) => {
    return res.json();
  }).then((jsonRes) => {
    setTimeout(() => {
      dispatch(loadCustomerInfo(jsonRes.customer));
      dispatch(saveCustomerSuccess());
    }, 500);
  }).catch((err) => {
    dispatch(saveCustomerFailure(err.message));
  });
}

export function getPortfolioInfoWithDispatch(dispatch, totalRiskScore) {
  dispatch(getPortfolioInfoRequest());
  fetch(`${hamsterServerUrl}/portfolio/suggest/${totalRiskScore}`, {
    method: 'GET',
    headers: new Headers({ 'content-type': 'application/json' }),
  }).then((res) => {
    return res.json();
  }).then((jsonRes) => {
    setTimeout(() => {
      dispatch(setPorfolioInfo(jsonRes));
      dispatch(getPortfolioInfoSuccess());
    }, 1000);
  }).catch((err) => {
    dispatch(getPortfolioInfoFailure(err.message));
  });
}

export function getDetailedPortfolioInfoWithDispatch(dispatch, customerInfo) {
  const riskScore = customerInfo.totalRiskScore;
  const invAmount = customerInfo.initialInvestmentAmount;
  dispatch(getDetailedPortfolioInfoRequest());
  fetch(`${hamsterServerUrl}/portfolio/compose/${riskScore}/${invAmount}`, {
    method: 'GET',
    headers: new Headers({ 'content-type': 'application/json' }),
  }).then((res) => {
    return res.json();
  }).then((jsonRes) => {
    setTimeout(() => {
      dispatch(setDetailedPorfolioInfo(jsonRes));
      dispatch(getDetailedPortfolioInfoSuccess());
    }, 1000);
  }).catch((err) => {
    dispatch(getDetailedPortfolioInfoFailure(err.message));
  });
}

export function saveAlertSettingsWithDispatch(dispatch, alertInfo) {
  dispatch(saveAlertSettingsRequest());
  fetch(`${hamsterServerUrl}/events/insert`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(alertInfo),
  }).then((res) => {
    return res.json();
  }).then((jsonRes) => {
    dispatch(saveAlertSettingSuccess());
  }).catch((err) => {
    dispatch(saveAlertSettingsFailure(err.message));
  });
}

