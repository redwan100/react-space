import React from 'react'

const Footer = () => {

  return (
    <div className="text-center p-3 bg-slate-700 text-white">
      <p>{new Date().getFullYear()} &#169; copyrights. All rights reserved <span className=' text-green-500 font-bold uppercase tracking-widest'>Redwan</span></p>
    </div>
  );
}

export default Footer