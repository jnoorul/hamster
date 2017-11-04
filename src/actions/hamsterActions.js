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
