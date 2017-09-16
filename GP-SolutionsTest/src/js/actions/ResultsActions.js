import { createAction } from 'redux-act';
import * as Types from './types/ResultsTypes';

export const addResults = createAction(Types.ADD_RESULT, (value) => {
	return value;
});