import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";
import LibraryBody from "./components/LibraryBody";

const ClientApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12} className='text-center my-2'>
                    <h1 className="header-nav">My Library</h1>
                </Col>
                <Col xs={12} >
                    <Welcome />
                </Col>
                <Col xs={12} >
                    <LibraryBody />
                </Col>
            </Row>
        </Container>
    );
}

export default ClientApp;
