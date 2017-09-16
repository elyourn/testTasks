import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const results = new BEMHelper({
    name: 'results'
});
const title = new BEMHelper({
    name: 'title'
});
const page = new BEMHelper({
    name: 'page'
});

class ResultsComponent extends PureComponent {

	render() {
		const { history } = this.props;
		return (
			<div {...results()}>
				<div {...title(null, 'h1')}>
					Results:
				</div>
				<div {...page("middle")}>
					<div {...results('fields')}>
                        {history.map((item) => {
							return(
							<div {...results("item")}>
								{item && item}
							</div>)
                        })}
					</div>
				</div>
			</div>
		)
	}
}

ResultsComponent.propTypes = {
    history: PropTypes.array,
};

export default ResultsComponent;