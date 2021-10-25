import React from 'react';
import {Col, Row} from "react-bootstrap";
import Header from "../components/Header";
import {GitHub} from "react-feather";

const AboutPage: React.FC = () => {
  return (
    <React.Fragment>
      <Row className="about m-3 p-0">
        <Col xs={12} className="p-0 p-md-2">
          <Header header="About"/>
        </Col>
        <Col className="m-4 d-flex align-items-center">
          <GitHub size={30}/>
          <a href="https://github.com/sriyabro/My-Library-App" target="_blank" rel="noreferrer"><span className="h2 text-body">&nbsp;&nbsp;My Library App</span></a>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default AboutPage;
