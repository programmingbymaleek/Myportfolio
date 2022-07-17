import React from 'react';
import './portfolio.scss';
import Eccommence_img from '../../dental_ecommence_site_cover.png'
function Ecommence_info({ isOpen }) {
  console.log(isOpen)

  return (
    <div className='real'>
      <div className='popup_wrapper'>
        <button>x</button>
        <div className='popup_image_wrapper'>
          <img src={Eccommence_img} alt="Denatal Ecommence App" className='popup_img'>
          </img>
        </div>
        <h1>Status:</h1>
        <p>github link:</p>
        <p>web link:</p>
      </div>
    </div>
  );
}

export default Ecommence_info;
