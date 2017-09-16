import React, { PureComponent } from 'react';
import BEMHelper from 'react-bem-helper';

import { Operations } from "../../../../../../../constants/Operators";
import { MathFormStorage } from "../../../storage";

const submit = new BEMHelper({
    name: 'submit'
});

class SubmitComponent extends PureComponent {
    toInt(str) {
        return parseInt(str, 10);
    }
    onClick = (e) => {
        const func = Operations[MathFormStorage.operation];
        const result = func(this.toInt(MathFormStorage.firstValue), this.toInt( MathFormStorage.secondValue));

        this.props.addResults(result);
    };

    render() {
        return (
            <div {...submit()} onClick={this.onClick}>
                Calculate
            </div>
        );
    }
}

export default SubmitComponent;
