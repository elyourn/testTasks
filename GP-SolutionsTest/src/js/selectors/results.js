import { createSelector } from 'reselect';

export const resultsStore = (store) => store.results;
export const getResults = createSelector(
    resultsStore,
	(store) => store.history
);