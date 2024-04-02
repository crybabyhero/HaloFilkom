import { Button } from 'antd';
import React from 'react';

const LandingPage = (props) => { 
  const { backgroundImage ="./public/fil.png", h1, p} = props; 
  return (
    <div className="fixed inset-0 overflow-hidden bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}> 
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className="text-center z-10 mb-40">
        <h1 className="text-6xl text-white font-bold mt-10">{h1}</h1>
        <p className="text-lg text-white">{p}</p>
      </div>
    </div>
  );
};

export default LandingPage;
