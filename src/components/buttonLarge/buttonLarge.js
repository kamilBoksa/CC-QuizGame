import React from 'react';
import Aux from '../../hoc/Auxillary';
import './buttonLarge.css';

const buttonLarge = (props) => (
    <Aux>
        <button className={props.className} value={props.desc}
                onClick={ props.clicked } id={props.id}>{ props.desc }</button>
    </Aux>
);

export default buttonLarge;