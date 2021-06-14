import React from "react";
import {Row} from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";

const Authors: React.FC = () => {
    return (
        <Row className="authors">
            <Header header="Authors" />
            <NoItemsLabel message={"No authors listed here"} />
        </Row>
    );
}

export default Authors;