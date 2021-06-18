import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
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
    const [indexToUpdate, setIndexToUpdate] = useState<number | null>(null);
    const [bookToUpdate, setBookToUpdate] = useState<IBook | null>(null);
    const [alertContent, setAlertContent] = useState<IAlert | null>(null);
    const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);

    useEffect(() => {
        setBooks(books);
    },[books]);

    const handleAddBookClicked = () => {
        setShowBookForm(false);
        setUpdateClicked(false);
        setShowBookForm(true);
    }
    const handleCloseButtonClicked = () => setShowBookForm(false);
    const handleOnUpdateClick = (index: number) => {
        setUpdateClicked(true);
        setIndexToUpdate(index);
        setShowBookForm(true);
    }


    const handleCreateBook = (newBook: IBook) => {
        const newBookList: IBook[] = books ? books.slice() : [];
        newBookList.push(newBook);
        setBooks(newBookList);
        setAlertContent({message: "Book Created Successfully", variant: "success"});
        setShowAlertMessage(true);
    }

    useEffect(() => {
        if (indexToUpdate === null || !books) {
            return;
        }
        setBookToUpdate(books[indexToUpdate]);
    }, [indexToUpdate])

    const handleUpdateBook = (updatedBook: IBook) => {
        if (indexToUpdate === null) {
            return;
        }
        const newBookList: IBook[] = books ? books.slice() : [];
        newBookList.splice(indexToUpdate, 1, updatedBook);
        setBooks(newBookList);
        setAlertContent({message: "Book Updated Successfully", variant: "warning"});
        setShowAlertMessage(true);
    }

    return (
        <Row className="books">
            <Header header="Books"/>
            {(!books || books.length === 0) && <NoItemsLabel message={"No books listed here"}/>}
            {books && <BookList books={books} onUpdateClick={handleOnUpdateClick}/>}
            <AddBook addBookClicked={handleAddBookClicked}/>
            <ConfirmationAlert content={alertContent} showAlertMessage={showAlertMessage}/>
            {showBookForm && <BookForm authors={authors}
                                       updateClicked={updateClicked}
                                       closeButtonClicked={handleCloseButtonClicked}
                                       createBookSubmit={handleCreateBook}
                                       bookToUpdate={bookToUpdate}
                                       updateBookSubmit={handleUpdateBook}
            />}
        </Row>
    );
}

export default Books;