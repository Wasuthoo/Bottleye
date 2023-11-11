import React from 'react';

function BouncingDotsLoader() {
  return (
    <div className="flex items-center justify-center h-16">
      <div className="w-4 h-4 bg-slate-700 rounded-full mx-1 animate-bounce" style={{ animationDuration: '1s' }}></div>
      <div className="w-4 h-4 bg-slate-700 rounded-full mx-1 animate-bounce" style={{ animationDuration: '1s' }}></div>
      <div className="w-4 h-4 bg-slate-700 rounded-full mx-1 animate-bounce" style={{ animationDuration: '1s' }}></div>
    </div>
  );
}

export default BouncingDotsLoader;
