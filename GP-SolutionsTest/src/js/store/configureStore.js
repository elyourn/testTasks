import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { enableBatching } from 'redux-batched-actions';
import rootReducer from '../reducers';


const router = routerMiddleware(hashHistory);

/**
 * thunk - асинхронные actions - https://monsterlessons.com/project/lessons/reduxjs-asinhronnye-eksheny-s-pomoshyu-redux-thunk
 * */
const middlewares = [thunk, router];
const enhancer = compose(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
	const store = createStore(enableBatching(rootReducer), initialState, enhancer);

	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
		);
	}

	return store;
}
