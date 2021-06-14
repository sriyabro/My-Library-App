import React from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AuthorList from "./author/AuthorList";
import AddAuthor from "./author/AddAuthor";
import AuthorForm from "./author/AuthorForm";

const Authors: React.FC = () => {
    return (
        <Row className="authors">
            <Header header="Authors" />
            <NoItemsLabel message={"No authors listed here"} />
            <AuthorList />
            <AddAuthor />
            <AuthorForm />
        </Row>
    );
}

export default Authors;