import './portfolio.scss'
import EccommceCover from '../../dental_ecommence_site_cover.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import Ecommence_info from './ecommence_info';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

import { useState } from 'react';

const Portfolio = () => {
  return (
    <ProjectContainer id='portfolio'>
      <Popup
        trigger={open => (
          <button className="button">
            {/* < div className="container" > */}
            <div className="top">
              <div className="project1">
                <div className='pro-display'>
                  <img src={EccommceCover} style={{ width: '100%', height: '100%' }} />
                  <div className='overflow'></div>
                  <FontAwesomeIcon className='portfolio_search_icon' icon={faSearchPlus} />
                </div>
                <p>STATUS:<span>Still Under development</span></p>
              </div>
            </div>
            {/* </div> */}
            {open ? (<a href={'https://programmingbymaleek.github.io/buyDentalImagingDigitalProduct/'} target={'_blank'}>Click to access site</a>) : ''}</button>
        )}
        position="right center"
        closeOnDocumentClick
      >
        <span>   </span>
      </Popup>
      <Popup
        trigger={open => (
          <button className="button">
            < div className="container" >
              <div className="top">
                <div className="project1">
                  <div className='pro-display'>
                    <img src={EccommceCover} style={{ width: '100%', height: '100%' }} />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio_search_icon' icon={faSearchPlus} />
                  </div>
                  <p>STATUS:<span>Still Under development</span></p>
                </div>
              </div>
            </div>
            {open ? (<a href={'https://programmingbymaleek.github.io/buyDentalImagingDigitalProduct/'} target={'_blank'}>Click to access site</a>) : ''}</button>
        )}
        position="right center"
        closeOnDocumentClick
      >
        <span>   </span>
      </Popup>





    </ProjectContainer>

  )
}
export default Portfolio;

const ProjectContainer = styled.div`
display:flex; 
flex-direction:column;


`







