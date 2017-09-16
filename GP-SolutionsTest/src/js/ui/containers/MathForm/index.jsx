import { connect } from 'react-redux';
import MathFormComponent from './components';

const mapStateToProps =  (state, ownProps) => ownProps;

const MathForm = connect(mapStateToProps)(MathFormComponent);

export default MathForm;
