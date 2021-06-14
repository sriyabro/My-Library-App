import React from "react";
import {Col, ListGroup} from "react-bootstrap";
import Author from "./Author";

const AuthorList: React.FC = () => {
    return (
        <Col xs={12}>
            <ListGroup className="mx-0">
                <ListGroup.Item className="p-0 border-0">
                    <Author />
                </ListGroup.Item>
            </ListGroup>
        </Col>
    );
}

export default AuthorList;