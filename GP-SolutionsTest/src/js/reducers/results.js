import { createReducer } from 'redux-act';
import * as Actions from '../actions/ResultsActions';

const InitialState = {
	history: [],
};

export default createReducer({
	[Actions.addResults]: (state, value) => ({
		...state,
        history: [...state.history, value]
	}),
}, InitialState);