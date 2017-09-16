import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
	render() {
		return (
			<div className="app-wrapper" >
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.element
};

export default App;
