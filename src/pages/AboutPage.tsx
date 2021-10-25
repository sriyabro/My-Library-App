import React from 'react';
import {Col, Row} from "react-bootstrap";
import Header from "../components/Header";

const AboutPage: React.FC = () => {
  return (
    <React.Fragment>
      <Row className="about m-3 p-0">
        <Col xs={12} md={6} className="p-0 p-md-2">
          <Header header="About"/>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default AboutPage;
