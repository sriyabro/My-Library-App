import React, {useEffect, useState} from 'react';
import {IAlert, IAuthor, IBook} from "../types/Types";
import {BASE_URI} from "../config/config";
import {Col, Row} from "react-bootstrap";
import ConfirmationAlert from "../components/alerts/ConfirmationAlert";
import NoItemsLabel from "../components/NoItemsLabel";
import BookList from "../components/book/BookList";
import AddBook from "../components/book/AddBook";
import BookForm from "../components/book/BookForm";
import DeleteConfirmation from "../components/alerts/DeleteConfirmation";
import Header from "../components/Header";

const BOOKS_URI = BASE_URI + 'books/';

const BooksPage: React.FC = () => {
  const [authors, setAuthors] = useState<IAuthor[] | null>(null);
  const [books, setBooks] = useState<IBook[] | null>(null);
  const [showBookForm, setShowBookForm] = useState<boolean>(false);
  const [updateClicked, setUpdateClicked] = useState<boolean>(false);
  const [indexToUpdate, setIndexToUpdate] = useState<number | null>(null);
  const [bookToUpdate, setBookToUpdate] = useState<IBook | null>(null);
  const [alertContent, setAlertContent] = useState<IAlert | null>(null);
  const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);
  const [bookNameToDelete, setBookNameToDelete] = useState<string | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    let uri = BASE_URI + 'authors';
    const res = await fetch(uri);
    const authors = await res.json();
    setAuthors(authors);
  }

  const fetchBooks = async () => {
    let uri = BASE_URI + 'books';
    const res = await fetch(uri);
    const books = await res.json();
    setBooks(books);
  }

  const handleCloseButtonClicked = () => setShowBookForm(false);

  const handleAddBookClicked = () => {
    setShowBookForm(false);
    setUpdateClicked(false);
    setShowBookForm(true);
  }

  const handleOnDeleteClick = (index: number) => {
    setIndexToDelete(index);
    setBookNameToDelete(books ? books[index].name : null);
    setShowDeleteConfirmation(true);
    setShowBookForm(false);
  }

  const handleCreateBook = async (newBook: IBook) => {
    await fetch(BOOKS_URI, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBook)
    })
    const newBookList: IBook[] = books ? books.slice() : [];
    newBookList.push(newBook);
    setBooks(newBookList);
    setAlertContent({message: "Book Created Successfully", variant: "success"});
    setShowAlertMessage(true);
  }

  const handleUpdateBook = async (updatedBook: IBook) => {
    if (indexToUpdate === null) {
      return;
    }
    const newBookList: IBook[] = books ? books.slice() : [];
    let id = newBookList[indexToUpdate].id;
    await fetch(BOOKS_URI + id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedBook)
    });
    newBookList.splice(indexToUpdate, 1, updatedBook);
    setBooks(newBookList);
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

  const handleDeleteValidationConfirm = async () => {
    if (indexToDelete == null) {
      return;
    }
    const newBookList: IBook[] = books ? books.slice() : [];
    let id = newBookList[indexToDelete].id;
    await fetch(BOOKS_URI + id, {
      method: 'DELETE'
    });
    newBookList.splice(indexToDelete, 1);
    setBooks(newBookList);
    setShowDeleteConfirmation(false);
    setAlertContent({message: "Book Deleted Successfully", variant: "danger"});
    setShowAlertMessage(true);
  }

  return (
    <React.Fragment>
      <Row className="books m-3 p-0">
        <Col xs={12} md={6} className="p-0 p-md-2">
          <Header header="Books"/>
          {(!books || books.length === 0) && <NoItemsLabel message={"No books listed here"}/>}
          {books && <BookList books={books} onUpdateClick={handleOnUpdateClick} onDeleteClick={handleOnDeleteClick}/>}
        </Col>
        <Col xs={12} md={6} className="p-0 p-md-2">
          <ConfirmationAlert content={alertContent} showAlertMessage={showAlertMessage}/>
          <AddBook addBookClicked={handleAddBookClicked}/>
          {showBookForm && <BookForm authors={authors}
                                     updateClicked={updateClicked}
                                     closeButtonClicked={handleCloseButtonClicked}
                                     createBookSubmit={handleCreateBook}
                                     bookToUpdate={bookToUpdate}
                                     updateBookSubmit={handleUpdateBook}
          />}
        </Col>
      </Row>
      <DeleteConfirmation show={showDeleteConfirmation}
                          type={"Book"}
                          item={bookNameToDelete ? bookNameToDelete : 'this item'}
                          handleDelete={handleDeleteValidationConfirm}
                          handleClose={handleDeleteValidationClose}
      />
    </React.Fragment>
  )
    ;
}

export default BooksPage;
