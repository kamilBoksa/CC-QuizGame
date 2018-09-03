import React from 'react';

import './buttonSmall.css';

const buttonSmall = (props) => (
    <div className="ButtonSmall">
        <button type={props.type} onClick={props.clicked}>{ props.desc }</button>
    </div>
);

export default buttonSmall;