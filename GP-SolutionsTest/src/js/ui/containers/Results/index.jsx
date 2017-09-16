import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getResults } from '../../../selectors/results';
import ResultsComponent from './components';

const mapStateToProps = createSelector(
    getResults,
	(history) => ({ history })
);

const ResultsContainer = connect(mapStateToProps)(ResultsComponent);

export default ResultsContainer;
