import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const label = new BEMHelper({
    name: 'label'
});
const Label = ({ name, text }) => (
    <label {...label(null)} htmlFor={name}>
        {text}
    </label>
);

Label.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export { Label };
