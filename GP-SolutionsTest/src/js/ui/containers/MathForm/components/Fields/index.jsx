import React, { PureComponent } from 'react';
import BEMHelper from 'react-bem-helper';
import { InputWithLabel } from "../../../../components/InputWithLabel";
import { Select } from "../../../../components/Select";
import { OperationsTypes } from "../../../../../constants/Operators";
import Submit from "./Submit";

import { MathFormStorage } from "../storage";

const mathForm = new BEMHelper({
    name: 'math_form'
});

class FieldsComponent extends PureComponent {
    changeValueHandler = (e) => {
       const obj = e.target;
       const fieldName = obj.getAttribute('name');

       if (MathFormStorage.hasOwnProperty(fieldName)) {
           MathFormStorage[fieldName] = obj.value;
       } else {
           console.info(`field ${fieldName} not found if ${MathFormStorage}`);
       }
    };

    render() {
        return (
            <div {...mathForm()}>
                <InputWithLabel text={"Enter value"} name={"firstValue"} onInput={this.changeValueHandler} />
                <InputWithLabel text={"Enter second value"} name={"secondValue"} onInput={this.changeValueHandler} />
                <Select name={"operation"} items={OperationsTypes} onChange={this.changeValueHandler} />
                <Submit />
            </div>
        );
    }
}

export default FieldsComponent;
