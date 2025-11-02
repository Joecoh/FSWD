import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="button-grid">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() =>
              btn === '=' ? calculateResult() : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
