import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './myStyle.css'
//imported all the necessary thing

//created my footer function that displays the contact 
//details and the location
function Footer() {
    return (
      <div className="footer-container">
        <h1 className='mainHeading'>Where to find us</h1><br/>
        <Row className='Row'>
            <Col md='6'>
                <div className='contactInfo'>
                    <h2 className='secondaryFooterHeading'>Contact information</h2>
                    <p>+27 (0)21 551 6000</p>
                    <p>ccinfo@gmail.com</p>
                </div>
            </Col>
            <Col md='6'>
                <div className='locationInfo'>
                    <h2 className='secondaryFooterHeading'>Location information</h2>
                    <p>123 Main Road, Cape Town, South Africa</p>
                </div>
            </Col>
        </Row>
        
        
      </div>
    );
  }
  
  export default Footer;