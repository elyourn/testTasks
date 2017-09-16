import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import FieldsComponent from "./Fields";

const page = new BEMHelper({
    name: 'page'
});
const title = new BEMHelper({
    name: 'title'
});
const mathForm = new BEMHelper({
	name: 'math_form'
});

class MathFormComponent extends PureComponent {

	render() {
		return (
			<div {...mathForm()}>
				<div {...title(null, 'h1')}>
					I want to calculate:
				</div>
				<div {...page("middle")}>
					<FieldsComponent />
				</div>
			</div>
		)
	}
}

MathFormComponent.propTypes = {};

export default MathFormComponent;