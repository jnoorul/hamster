import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hamsterActionCreators from '../actions/hamsterActions';
import {
  getRiskScoreWithDispatch,
  getPortfolioInfoWithDispatch,
  getDetailedPortfolioInfoWithDispatch,
  saveAlertSettingsWithDispatch,
  saveCustomerInfoWithDispatch,
  getPositionWithDispatch,
  getTransactionWithDispatch,

} from "../actions/hamsterActions";
import Questions from '../components/questions/Questions';

const mapStateToProps = state => ({
  qnNumber: state.uiState.qnNumber,
  totalQns: state.uiState.totalQns,
  uiState: state.uiState,
  customerInfo: state.customerInfo,
  portfolioInfo: state.portfolioInfo,
  alertSettings: state.alertSettings,
  assetType: state.portfolioInfo.assetType,
});

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators(hamsterActionCreators, dispatch);

  const getNextQuestion = (currentQn, totalQns) => {
    const nextQn = currentQn + 1;
    if (nextQn <= totalQns) {
      boundActionCreators.setQuestionNumber(nextQn);
    }
  };

  const getPreviousQuestion = (currentQn) => {
    const nextQn = currentQn - 1;
    if (nextQn >= 0) {
      boundActionCreators.setQuestionNumber(nextQn);
    }
  };

  const getRiskScore = (customerInfo) => {
    getRiskScoreWithDispatch(dispatch, customerInfo);
  };

  const saveCustomerInfo = (customerInfo) => {
    saveCustomerInfoWithDispatch(dispatch, customerInfo);
  };

  const getPortfolioInfo = (totalRiskScore) => {
    getPortfolioInfoWithDispatch(dispatch, totalRiskScore);
  };

  const getDetailedPortfolioInfo = (customerInfo) => {
    getDetailedPortfolioInfoWithDispatch(dispatch, customerInfo);
  };

  const getPosition = (customerInfo) => {
    getPositionWithDispatch(dispatch, customerInfo);
  };

  const getTransaction = (customerInfo) => {
    getTransactionWithDispatch(dispatch, customerInfo);
  };

  const saveAlertSettings = (alertInfo) => {
    saveAlertSettingsWithDispatch(dispatch, alertInfo);
  };

  return {
    getNextQuestion,
    getPreviousQuestion,
    getRiskScore,
    saveCustomerInfo,
    getPortfolioInfo,
    getPosition,
    getTransaction,
    getDetailedPortfolioInfo,
    saveAlertSettings,
    ...boundActionCreators,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
