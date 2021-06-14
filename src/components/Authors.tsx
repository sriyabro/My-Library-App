import React from "react";
import {Row} from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AuthorList from "./author/AuthorList";
import AddAuthor from "./author/AddAuthor";

const Authors: React.FC = () => {
    return (
        <Row className="authors">
            <Header header="Authors" />
            <NoItemsLabel message={"No authors listed here"} />
            <AuthorList />
            <AddAuthor />
        </Row>
    );
}

export default Authors;