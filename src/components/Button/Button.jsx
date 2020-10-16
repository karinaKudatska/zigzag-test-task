import React from 'react';
import './Button.scss';

const Button = ({ isWindowOpen, setIsWindowOpen }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={() => setIsWindowOpen(!isWindowOpen)}
    >
      Открыть модалку
    </button>
  )
}

export default Button;
