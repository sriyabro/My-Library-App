import React from 'react';
import {Col} from "react-bootstrap";
import Welcome from "../components/Welcome";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Col xs={12}>
        <Welcome/>
      </Col>
    </React.Fragment>
  );
}

export default HomePage;
