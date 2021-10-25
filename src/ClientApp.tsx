import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import AuthorsPage from "./pages/AuthorsPage";

const ClientApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12} className='text-center my-2'>
          <h1 className="header-nav">My Library</h1>
        </Col>
        <Router>
          <Switch>
            <Route path="/authors">
              <AuthorsPage/>
            </Route>
            <Route path="/books">
              <BooksPage/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Router>
      </Row>
    </Container>
  );
}

export default ClientApp;
