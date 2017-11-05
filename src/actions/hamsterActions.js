export function loadCustomerInfo() {
  return {
    type: 'LOAD_CUSTOMER_INFO',
    info: { name: 'Noorul Ameen' },
  };
}

export function loadPortfolioInfo() {
  return {
    type: 'LOAD_PORTFOLIO_INFO',
    info: {},
  };
}

export function setQuestionNumber(qnNumber) {
  return {
    type: 'SET_QUESTION_NUMBER',
    qnNumber,
  };
}


export function setCurrentPage(pageName) {
  return {
    type: 'SET_CURRENT_PAGE',
    currentPage: pageName,
  };
}
