import React from "react";
import {Row} from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AddItem from "./AddItem";

const Authors: React.FC = () => {
    return (
        <Row className="authors">
            <Header header="Authors" />
            <NoItemsLabel message={"No authors listed here"} />
            <AddItem item={"Author"} />
        </Row>
    );
}

export default Authors;