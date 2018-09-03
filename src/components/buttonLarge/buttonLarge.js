import React from 'react';

import './buttonLarge.css';

const buttonLarge = (props) => (
    <div>
        <button onClick={ props.clicked }>{ props.desc }</button>
    </div>
);

export default buttonLarge;