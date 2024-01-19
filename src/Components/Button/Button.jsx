import React from 'react';
import button from './button.module.css';

function Button({ text, link, background }) {
  return (
    <div>
      <button
        onClick={link}
        className={background ? `${button.butt} ${button.background}` : `${button.butt} ${button.none}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
