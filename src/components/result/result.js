import React from 'react';
import './result.css';

const result = (props) => (
    <div className="result"><p>{props.position}. {props.username} - {props.score} points</p></div>
);

export default result;
