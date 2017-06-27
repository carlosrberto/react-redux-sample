import React from 'react';

const Counter = ({ value, increment, decrement }) => (
    <div>
        {value}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
);

export default Counter;