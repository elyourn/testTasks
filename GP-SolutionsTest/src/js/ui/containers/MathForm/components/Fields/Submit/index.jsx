import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addResults } from "../../../../../../actions/ResultsActions";
import SubmitComponent from './components';

const mapStateToProps =  (state, ownProps) => ownProps;

const mapDispatchToProps = (dispatch) => {
    return {
        addResults: bindActionCreators(addResults, dispatch)
    };
};

const Submit = connect(mapStateToProps, mapDispatchToProps)(SubmitComponent);

export default Submit;
