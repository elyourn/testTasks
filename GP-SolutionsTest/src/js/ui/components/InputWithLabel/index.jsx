import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { Label } from "../Label/index";
import { Input } from "../Inputs/index";

const inputField = new BEMHelper({
    name: 'inputField'
});
const InputWithLabel = ({ name, placeholder, onInput, text }) => (
    <div {...inputField()}>
        <Label name={name} text={text} />
        <Input name={name} placeholder={placeholder} onInput={onInput} />
    </div>
);

InputWithLabel.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onInput: PropTypes.func
};

export { InputWithLabel };
