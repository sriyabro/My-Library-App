import React from 'react';
import {Col} from "react-bootstrap";
import Welcome from "../components/Welcome";
import LibraryBody from "../components/LibraryBody";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Col xs={12}>
        <Welcome/>
      </Col>
      <Col xs={12}>
        <LibraryBody/>
      </Col>
    </React.Fragment>
  );
}

export default HomePage;
