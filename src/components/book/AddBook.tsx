import React from "react";
import { Col } from 'react-bootstrap';
import { Plus } from "react-feather"

type AddBookProps ={
    addBookClicked:() => void
}

const AddBook: React.FC<AddBookProps> = (props) => {
    const {addBookClicked} = props;

    return (
            <Col xs={12} className="add-item mx-0 mt-1 mb-3 p-0">
                <h6 onClick={() => addBookClicked()}>
                    <Plus size={24} className="plus-icon p-0"/>
                    <span className="pl-2 py-0">Add Book</span>
                </h6>
            </Col>
    );
}

export default AddBook;