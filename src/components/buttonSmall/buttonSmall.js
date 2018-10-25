import React from 'react';

import './buttonSmall.css';

const buttonSmall = (props) => (
    <div>
        <button id={props.id} className={props.className} type={props.type} onClick={props.clicked}>{ props.desc }</button>
    </div>
);

export default buttonSmall;