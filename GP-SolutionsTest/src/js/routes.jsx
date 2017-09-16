import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './ui/App';
import Calculator from './ui/containers/Calculator';

export default (store) => (
	<Route path="/" component={App}>
		<IndexRoute component={Calculator} />
		<Redirect from="*" to="404" />
	</Route>
);
