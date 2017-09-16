import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import MathForm from '../../MathForm'
import Results from "../../Results";


const page = new BEMHelper({
	name: 'page'
});

class CalculatorComponent extends PureComponent {
	render() {
		return (
			<div {...page(null)}>
				<div {...page('column_left')}>
					<MathForm />
				</div>
				<div {...page('column_right', null, "results__wrapper")}>
					<Results />
				</div>
			</div>
		)
	}
}

CalculatorComponent.propTypes = {};

export default CalculatorComponent;