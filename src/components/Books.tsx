import React from "react";
import {Row} from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AddItem from "./AddItem";

const Books: React.FC = () => {
    return (
        <Row className="books">
            <Header header="Books" />
            <NoItemsLabel message={"No books listed here"} />
            <AddItem item={"Book"} />
        </Row>
    );
}

export default Books;