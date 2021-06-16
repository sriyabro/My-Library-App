import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import Book from "./Book";

const BookList: React.FC = () => {
    return (
        <Col xs={12}>
            <ListGroup className="mx-0">
                <ListGroup.Item className="p-0 border-0">
                    <Book />
                </ListGroup.Item>
            </ListGroup>
        </Col>
    );
}

export default BookList;