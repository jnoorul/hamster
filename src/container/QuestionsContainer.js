import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hamsterActionCreators from '../actions/hamsterActions';
import Questions from '../components/questions/Questions';

const mapStateToProps = state => ({
  qnNumber: state.uiState.qnNumber,
  totalQns: state.uiState.totalQns,
  currentPage: state.uiState.currentPage,
  customerInfo: state.customerInfo,
});

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators(hamsterActionCreators, dispatch);

  const getNextQuestion = (currentQn, totalQns) => {
    const nextQn = currentQn + 1;
    if (nextQn <= totalQns) {
      boundActionCreators.setQuestionNumber(nextQn);
    }
  };
  return { getNextQuestion, ...boundActionCreators };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
