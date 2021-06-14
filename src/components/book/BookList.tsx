import React from "react";
import {Col, ListGroup} from "react-bootstrap";

const BookList: React.FC = () => {
    return (
        <Col xs={12} className="book-list mx-0 p-0">
            <ListGroup className="mx-0">
                <ListGroup.Item className="px-0 border-0"><h5>1. Book</h5></ListGroup.Item>
            </ListGroup>
        </Col>
    );
}

export default BookList;