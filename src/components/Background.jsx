import React from 'react';
import './Background.css';

function Background() {
  const colors=[
    'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg',
    'https://images.pexels.com/photos/4198029/pexels-photo-4198029.jpeg',
    'https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg'
  ];

  const imgChange=(img)=>{
    document.body.style.backgroundImage=`url(${img})`; 
  };

  return(
    <div className='min-vh-100'>
      <div className='container d-flex justify-content-center h-100 align-items-center'>
        {colors.map((color,index)=>(
          <button 
            onClick={()=>imgChange(color)} 
            className='btn btn-primary mx-2'>
            Background {index+1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Background;
