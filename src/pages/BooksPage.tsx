import React, {useEffect, useState} from 'react';
import Books from "../components/Books";
import {IAuthor, IBook} from "../types/Types";
import {BASE_URI} from "../config/config";
import {Col, Row} from "react-bootstrap";

const BooksPage: React.FC = () => {
  const [authors, setAuthors] = useState<IAuthor[] | null>(null);
  const [books, setBooks] = useState<IBook[] | null>(null);

  useEffect(() => {
    fetchAuthors();
    fetchBooks();
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

  const handleOnBooksChange = (books: IBook[]) => setBooks(books);

  return (
    <Row>
      <Col md={6}>
        <Books authors={authors} books={books} onBooksChange={handleOnBooksChange}/>
      </Col>
    </Row>
  );
}

export default BooksPage;
