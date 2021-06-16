import React from 'react';
import {Col, Container, Row } from "react-bootstrap";
import Welcome from "./components/Welcome";
import Authors from "./components/Authors";
import Books from "./components/Books";

const ClientApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12} >
                    <Welcome />
                </Col>
                <Col xs={12} md={6}>
                    <Books />
                </Col>
                <Col xs={12} md={6}>
                    <Authors />
                </Col>
            </Row>
        </Container>
    );
}

export default ClientApp;