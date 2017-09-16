import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import results from './results';

const appReducer = combineReducers({
    results,
	routing, // name 'routing' is important!
});

function rootReducer(state, action) {
	return appReducer(state, action);
}

export default rootReducer;
