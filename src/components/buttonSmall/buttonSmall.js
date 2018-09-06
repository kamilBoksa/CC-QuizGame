import React from 'react';

import './buttonSmall.css';

const buttonSmall = (props) => (
    <div>
        <button className="ButtonSmall" type={props.type} onClick={props.clicked}>{ props.desc }</button>
    </div>
);

export default buttonSmall;