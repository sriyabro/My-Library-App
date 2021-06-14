import React from "react";
import { Col } from 'react-bootstrap';
import {Plus} from "react-feather"

type AddItemProps = {
    item: string
}

const AddItem: React.FC<AddItemProps> = (props) => {
    return (
            <Col xs={12} className="add-item mx-0 p-0">
                <Plus size={24} className="plus-icon p-0"/>
                <span className="pl-2 py-0">Add {props.item}</span>
            </Col>
    );
}

export default AddItem;