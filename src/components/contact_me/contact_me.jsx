import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';



function Contact_me() {
  return (
    <Con_container>
      <div id='contact'>
        <h1>Contact me</h1>
        <p> You can send me an email<a href="mailto:wisdommaliki19@gmail.com?subject=new inquiries"> here  <FontAwesomeIcon className='' icon={faMailBulk} /></a>

        </p>
        <p>Reach me by phone: +17206624943 <FontAwesomeIcon className='phone' icon={faPhone} /></p>
        <p> GitHub: <a href={'https://github.com/programmingbymaleek'} target={'_blank'}>Wisdom Maliki</a>      </p>
      </div>
    </Con_container>
  );
}

export default Contact_me;

const Con_container = styled.div`
display:flex;
padding:1rem 0;
margin-top:1rem;
background:#212529;
color:white;
flex-direction:row;
justify-content:center;
width:100%;
border:1px solid black;
div{
  h1{
    font-size:3rem;
    letter-spacing:.5rem;
  }
  p{
    a{
      text-decoration:none;
    }
  }
  .phone{
    color:#0A58CA;
  }
}
`
