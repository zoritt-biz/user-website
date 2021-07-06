import React from 'react';

const ButtonControl = ({ text }) => {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <button type="submit" class="btn sign-in-button fs-6 text-white">
        {text}
      </button>
    </div>
  );
};

export default ButtonControl;
