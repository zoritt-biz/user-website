import React from 'react';

const ButtonControl = ({ text }) => {
  return (
    <div className="mb-4">
      <button type="button" class="btn sign-in-button w-100  fs-6  text-white">
        {text}
      </button>
    </div>
  );
};

export default ButtonControl;
