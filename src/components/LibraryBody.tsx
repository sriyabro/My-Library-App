import React from 'react';
import {Col,Row} from "react-bootstrap";
import Authors from "./Authors";
import Books from "./Books";

const LibraryBody: React.FC = () => {
    return (
        <Row>
            <Col xs={12} md={6} className="px-5">
                <Books />
            </Col>
            <Col xs={12} md={6} className="px-5">
                <Authors />
            </Col>
        </Row>
    );
}

export default LibraryBody;