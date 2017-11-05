import * as actions from './actionNames';

export function loadCustomerInfo() {
  return {
    type: actions.LOAD_CUSTOMER_INFO,
    info: { name: 'Noorul Ameen' },
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
