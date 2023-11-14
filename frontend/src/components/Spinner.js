import React from 'react';

function Spinner() {
  return (
    <div className='spinner'>
      <video className='spinner-video' src='spinner-dev.mp4' autoPlay loop muted playsInline></video>
    </div>
  );
}

export default Spinner;
