import React from "react";
import {Col} from 'react-bootstrap';
import {Plus} from "react-feather"

const AddAuthor: React.FC = () => {
    return (
            <Col xs={12} className="add-author mx-0 my-2 p-0">
                <h6>
                    <Plus size={24} className="plus-icon p-0"/>
                    <span className="pl-2 py-0">Add Author</span>
                </h6>
            </Col>
    );
}

export default AddAuthor;