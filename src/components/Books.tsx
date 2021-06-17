import React, {useState} from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AddBook from "./book/AddBook";
import BookList from "./book/BookList";
import BookForm from "./book/BookForm";
import {IAuthor, IBook} from "../types/Types";

type BooksProps = {
    authors: IAuthor[] | null
}

const Books: React.FC<BooksProps> = (props) => {
    const {authors} = props;

    const [books, setBooks] = useState<IBook[] | null>(null);
    const [showBookForm, setShowBookForm] = useState<boolean>(false);

    const handleAddBookClicked = () => setShowBookForm(true);
    const handleCloseButtonClicked = () => setShowBookForm(false);

    return (
        <Row className="books">
            <Header header="Books" />
            {(!books || books.length === 0) && <NoItemsLabel message={"No books listed here"}/>}
            {books && <BookList books={books}/>}
            <AddBook addBookClicked={handleAddBookClicked}/>
            {showBookForm && <BookForm authors={authors} closeButtonClicked={handleCloseButtonClicked}/>}
        </Row>
    );
}

export default Books;