import React from 'react';
import {Col, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const HeaderNavBar: React.FC = () => {
  const history = useHistory();

  const handleNavClicked = (nav: string) => {
    history.push(`/${nav}`);
  }

  return (
    <React.Fragment>
      <Row className="shadow">
        <Col xs={6} className='my-2'>
          <h1 className="header pl-5" onClick={() => history.push('/')}>My Library</h1>
        </Col>
        <Col xs={6} className='pr-5 d-flex justify-content-end align-items-center'>
          <h3 className="nav ml-5" onClick={() => handleNavClicked('authors')}>Authors</h3>
          <h3 className="nav ml-5" onClick={() => handleNavClicked('books')}>Books</h3>
          <h3 className="nav ml-5" onClick={() => handleNavClicked('about')}>About</h3>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default HeaderNavBar;
