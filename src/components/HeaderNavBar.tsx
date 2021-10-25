import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {ChevronDown, ChevronUp, Search} from "react-feather";

const HeaderNavBar: React.FC = () => {
  const history = useHistory();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleNavClicked = (nav: string) => {
    if (nav) setShowMobileMenu(!showMobileMenu);
    history.push(`/${nav}`);
  }

  return (
    <React.Fragment>
      <Row className="shadow p-0 m-0">
        <Col xs={12} md={6} className='my-2'>
          <h1 className="nav-header pl-0 pl-md-5 text-center text-md-left" onClick={() => handleNavClicked('')}>My Library</h1>
        </Col>
        <Col xs={12} md={6}
             className={`pr-md-5 ${showMobileMenu ? 'd-flex' : 'd-none'} d-md-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center`}>
          <h3 className="nav mb-3 mb-md-0 ml-md-5" onClick={() => handleNavClicked('authors')}>Authors</h3>
          <h3 className="nav mb-3 mb-md-0 ml-md-5" onClick={() => handleNavClicked('books')}>Books</h3>
          <h3 className="nav mb-3 mb-md-0 ml-md-5" onClick={() => handleNavClicked('about')}>About</h3>
          <Search className="nav mb-3 mb-md-0 ml-md-5"/>
        </Col>
      </Row>
      <Row className="menu-div m-0 p-0 d-flex d-md-none justify-content-center">
        <ChevronDown className={`menu ${showMobileMenu ? 'd-none' : 'd-flex'}`} size={30} onClick={() => setShowMobileMenu(!showMobileMenu)}/>
        <ChevronUp className={`menu ${showMobileMenu ? 'd-flex' : 'd-none'}`} size={30} onClick={() => setShowMobileMenu(!showMobileMenu)}/>
      </Row>
    </React.Fragment>
  );
}

export default HeaderNavBar;
