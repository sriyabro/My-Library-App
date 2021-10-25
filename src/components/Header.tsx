import React from "react";
import {Col} from 'react-bootstrap';

type HeaderProps = {
  header: string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Col xs={12} className="header pl-2 pl-md-5 font-weight-bolder">
      <h1>{props.header}</h1>
    </Col>
  );
}

export default Header;
