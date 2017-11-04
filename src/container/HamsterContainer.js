import { connect } from 'react-redux';
import Hamster from './Hamster';
import { loadCustomerInfo } from '../actions/hamsterActions';

const mapStateToProps = state => ({ customerName: state.customerInfo.name });

const mapDispatchToProps = (dispatch) => {
  const loadCustomerDetails = () => dispatch(loadCustomerInfo());
  return { loadCustomerDetails };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamster);