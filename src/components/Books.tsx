import React, {useState} from "react";
import {Row} from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AddBook from "./book/AddBook";
import BookList from "./book/BookList";
import BookForm from "./book/BookForm";
import {IAlert, IAuthor, IBook} from "../types/Types";
import ConfirmationAlert from "./alerts/ConfirmationAlert";
import DeleteConfirmation from "./alerts/DeleteConfirmation";

type BooksProps = {
    authors: IAuthor[] | null
    books: IBook[] | null
    onBooksChange: (books: IBook[]) => void
}

const Books: React.FC<BooksProps> = (props) => {
    const {authors, books, onBooksChange} = props;

    const [showBookForm, setShowBookForm] = useState<boolean>(false);
    const [updateClicked, setUpdateClicked] = useState<boolean>(false);
    const [indexToUpdate, setIndexToUpdate] = useState<number | null>(null);
    const [bookToUpdate, setBookToUpdate] = useState<IBook | null>(null);
    const [alertContent, setAlertContent] = useState<IAlert | null>(null);
    const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);
    const [indexToDelete, setIndexToDelete] = useState<number | null>(null);
    const [bookNameToDelete, setBookNameToDelete] =useState<string | null>(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);

    const handleAddBookClicked = () => {
        setShowBookForm(false);
        setUpdateClicked(false);
        setShowBookForm(true);
    }

    const handleCloseButtonClicked = () => setShowBookForm(false);

    const handleOnDeleteClick = (index: number) => {
        setIndexToDelete(index);
        setBookNameToDelete(books ? books[index].name : null);
        setShowDeleteConfirmation(true);
        setShowBookForm(false);
    }

    const handleCreateBook = (newBook: IBook) => {
        const newBookList: IBook[] = books ? books.slice() : [];
        newBookList.push(newBook);
        onBooksChange(newBookList);
        setAlertContent({message: "Book Created Successfully", variant: "success"});
        setShowAlertMessage(true);
    }

    const handleUpdateBook = (updatedBook: IBook) => {
        if (indexToUpdate === null) {
            return;
        }
        const newBookList: IBook[] = books ? books.slice() : [];
        newBookList.splice(indexToUpdate, 1, updatedBook);
        onBooksChange(newBookList);
        setIndexToUpdate(null);
        setBookToUpdate(null);
        setAlertContent({message: "Book Updated Successfully", variant: "warning"});
        setShowAlertMessage(true);
    }

    const handleOnUpdateClick = (index: number) => {
        setUpdateClicked(true);
        setIndexToUpdate(index);
        setBookToUpdate(books ? books[index] : null);
        setShowBookForm(true);
    }

    const handleDeleteValidationClose = () => setShowDeleteConfirmation(false);

    const handleDeleteValidationConfirm = () => {
        if (indexToDelete == null) {
            return;
        }
        const newBookList: IBook[] = books? books.slice() : [];
        newBookList.splice(indexToDelete, 1);
        onBooksChange(newBookList);
        setShowDeleteConfirmation(false);
        setAlertContent({message:"Book Deleted Successfully", variant:"danger"});
        setShowAlertMessage(true);
    }

    return (
        <React.Fragment>
        <Row className="books">
            <Header header="Books"/>
            {(!books || books.length === 0) && <NoItemsLabel message={"No books listed here"}/>}
            {books && <BookList books={books} onUpdateClick={handleOnUpdateClick} onDeleteClick={handleOnDeleteClick}/>}
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
        <DeleteConfirmation show={showDeleteConfirmation}
                                type={"Book"}
                                item={bookNameToDelete ? bookNameToDelete : 'this item'}
                                handleDelete={handleDeleteValidationConfirm}
                                handleClose={handleDeleteValidationClose}
            />
        </React.Fragment>
    );
}

export default Books;
