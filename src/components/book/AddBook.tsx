import React from "react";
import { Col } from 'react-bootstrap';
import { Plus } from "react-feather"

const AddBook: React.FC = () => {
    return (
            <Col xs={12} className="add-item mx-0 my-3 p-0">
                <h6>
                    <Plus size={24} className="plus-icon p-0"/>
                    <span className="pl-2 py-0">Add Book</span>
                </h6>
            </Col>
    );
}

export default AddBook;