import { connect } from 'react-redux';
import CalculatorComponent from './components';

const mapStateToProps =  (state, ownProps) => ownProps;

const Calculator = connect(mapStateToProps)(CalculatorComponent);

export default Calculator;
