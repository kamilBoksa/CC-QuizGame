import React from 'react';
import './counter.css';

const counter = (props) => (
    <div>
        <p>Current score: {props.score}</p>
    </div>
);

export default counter;