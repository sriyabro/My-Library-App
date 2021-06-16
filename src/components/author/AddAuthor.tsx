import React from "react";
import { Col } from 'react-bootstrap';
import { Plus } from "react-feather"

type AddAuthorProps = {
    addAuthorClicked:() => void;
}

const AddAuthor: React.FC<AddAuthorProps> = (props) => {
    const {addAuthorClicked} = props;
    return (
            <Col xs={12} className="add-item mx-0 mt-1 mb-3 p-0">
                <h6 onClick={() => addAuthorClicked()}>
                    <Plus size={24} className="plus-icon p-0"/>
                    <span className="pl-2 py-0">Add Author</span>
                </h6>
            </Col>
    );
}

export default AddAuthor;