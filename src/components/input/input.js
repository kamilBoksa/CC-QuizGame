import React from 'react';

import './input.css';

const input = (props) => (
    <div>
        <input className="Input" type="text"
               value={props.value}
               onChange={props.onChange}
               placeholder={props.desc}/>
    </div>
);

export default input;