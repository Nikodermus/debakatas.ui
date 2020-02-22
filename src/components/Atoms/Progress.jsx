import React from 'react';

const randomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const Progress = ({ color, className = '' }) => (
    <div className={`progress np-element progress--${color} ${className}`}>
        <span
            className="progress__bar"
            style={{ width: `${randomInteger(20, 80)}%` }}
        ></span>
    </div>
);

export default Progress;
