import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImg from '../assets/images/welcome-library.jpg'

const Welcome: React.FC = () => {
  return (
    <React.Fragment>
      <Row className='welcome'>
        <Col xs={12} className='text-center my-2'>
          <h1>My Library</h1>
        </Col>
        <Col xs={12} className='mx-0 px-0'>
          <Image src={WelcomeImg} alt="Library Image"/>
        </Col>
        <Col xs={12} className='credits text-right pr-3 pr-md-5 pt-1'>
          Photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText" rel="noreferrer" target="_blank">
          Anna Hunko </a>
          on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText" rel="noreferrer" target="_blank">
          Unsplash </a>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Welcome;