import React from "react";
import {Row} from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AddBook from "./book/AddBook";
import BookList from "./book/BookList";

const Books: React.FC = () => {
    return (
        <Row className="books">
            <Header header="Books" />
            <NoItemsLabel message={"No books listed here"} />
            <BookList />
            <AddBook />
        </Row>
    );
}

export default Books;