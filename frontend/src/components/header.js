import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './myStyle.css'
//imported all the necessary things

//created my header function
function Header() {
    return (
      <div className="header-container">
        <header>
            <br/>
            <h1 className='mainHeading'>Conference Centre</h1><br/>

        </header><hr/>
      </div>
    );
  }
  
  export default Header;