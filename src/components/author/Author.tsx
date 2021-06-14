import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";

const Author: React.FC = () => {
    return (
        <Row className="author pt-2 pb-1">
            <Col xs={8} className="pl-0">
                <h5>1. Author</h5>
            </Col>
            <Col xs={4} className="text-right px-0">
                <Edit className="icon mx-2 text-warning" size={20}/>
                <Trash2 className="icon mx-2 text-danger" size={20}/>
            </Col>
        </Row>
    );
}

export default Author;