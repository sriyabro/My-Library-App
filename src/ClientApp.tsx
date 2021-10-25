import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import AuthorsPage from "./pages/AuthorsPage";
import HeaderNavBar from "./components/HeaderNavBar";

const ClientApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <Router>
        <HeaderNavBar/>
        <Row>
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
        </Row>
      </Router>
    </Container>
  );
}

export default ClientApp;
