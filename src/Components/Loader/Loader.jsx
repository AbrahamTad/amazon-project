import React from 'react'
import { FadeLoader } from 'react-spinners';

function Loader() {
  return (
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width: '100%',
        // backgroundColor: '#f1f1f1'
    }}
    
    
    >
      <FadeLoader color="#36d7b7" />
    </div>
  );
}

export default Loader
