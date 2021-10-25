import React from 'react';
import {BrowserRouter as Router, Route, RouteComponentProps, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import HeaderNavBar from "./components/HeaderNavBar";
import {routes} from "./config/routes";

const ClientApp: React.FC = () => {
  return (
    <Container fluid={true} className="p-0 m-0">
      <Router>
        <HeaderNavBar/>
          <Switch>
            {routes.map((route, index) =>
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(routeProps: RouteComponentProps<any>) => {
                  return <route.component  {...routeProps} />
                }}
              />)}
          </Switch>
      </Router>
    </Container>
  );
}

export default ClientApp;
