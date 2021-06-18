import React, {useState} from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AddBook from "./book/AddBook";
import BookList from "./book/BookList";
import BookForm from "./book/BookForm";
import {IAlert, IAuthor, IBook} from "../types/Types";
import ConfirmationAlert from "./alerts/ConfirmationAlert";

type BooksProps = {
    authors: IAuthor[] | null
}

const Books: React.FC<BooksProps> = (props) => {
    const {authors} = props;

    const [books, setBooks] = useState<IBook[] | null>(null);
    const [showBookForm, setShowBookForm] = useState<boolean>(false);
    const [updateClicked, setUpdateClicked] = useState<boolean>(false);
    const [alertContent, setAlertContent] = useState<IAlert | null>(null);
    const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);

    const handleAddBookClicked = () => setShowBookForm(true);
    const handleCloseButtonClicked = () => setShowBookForm(false);

    const handleCreateBook = (newBook: IBook) => {
        const newBookList: IBook[] = books ? books.slice() : [];
        newBookList.push(newBook);
        setBooks(newBookList);
        console.log(newBookList);
        setAlertContent({message:"Book Successfully", variant:"success"});
        setShowAlertMessage(true);
    }

    return (
        <Row className="books">
            <Header header="Books" />
            {(!books || books.length === 0) && <NoItemsLabel message={"No books listed here"}/>}
            {books && <BookList books={books}/>}
            <AddBook addBookClicked={handleAddBookClicked}/>
            <ConfirmationAlert content={alertContent} showAlertMessage={showAlertMessage} />
            {showBookForm && <BookForm authors={authors}
                                       updateClicked={updateClicked}
                                       closeButtonClicked={handleCloseButtonClicked}
                                       createBookSubmit={handleCreateBook}
            />}
        </Row>
    );
}

export default Books;