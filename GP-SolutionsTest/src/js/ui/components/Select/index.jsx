import React, { PureComponent } from 'react';
import BEMHelper from 'react-bem-helper';

const select = new BEMHelper({
    name: 'select'
});

export class Select extends PureComponent {

    render() {
        const { name, items, onChange } = this.props;
        return (
            <div {...select()}>
                <select name={name} onChange={onChange}  {...select('field')}>
                    {Object.keys(items).map((item) => (
                        <option key={item} {...select('item')} value={items[item]}>
                            {items[item]}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}
