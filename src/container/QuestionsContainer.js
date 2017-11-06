import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hamsterActionCreators from '../actions/hamsterActions';
import { saveCustomerInfoWithDispatch } from "../actions/hamsterActions";
import Questions from '../components/questions/Questions';

const mapStateToProps = state => ({
  qnNumber: state.uiState.qnNumber,
  totalQns: state.uiState.totalQns,
  customerInfo: state.customerInfo,
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

  const saveCustomerInfo = (customerInfo) => {
    saveCustomerInfoWithDispatch(dispatch, customerInfo);
  };

  return { getNextQuestion, getPreviousQuestion, saveCustomerInfo, ...boundActionCreators };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
