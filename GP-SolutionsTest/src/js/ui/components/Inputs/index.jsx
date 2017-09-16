import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const input = new BEMHelper({
    name: 'input'
});
const Input = ({ name, placeholder, onInput }) => (
    <input
        {...input(null, 'text')}
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        onInput={onInput}
    />
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onInput: PropTypes.func
};

export { Input };
