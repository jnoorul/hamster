import { connect } from 'react-redux';
import { setQuestionNumber } from '../actions/hamsterActions';
import Questions from '../components/questions/Questions';

const mapStateToProps = state => ({
  qnNumber: state.uiState.qnNumber,
  totalQns: state.uiState.totalQns,
  currentPage: state.uiState.currentPage,
});

const mapDispatchToProps = (dispatch) => {
  const getNextQuestion = (currentQn, totalQns) => {
    const nextQn = currentQn + 1;
    if (nextQn <= totalQns) {
      dispatch(setQuestionNumber(nextQn));
    } else {
      dispatch(setQuestionNumber(0));
    }
  };
  return { getNextQuestion };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
