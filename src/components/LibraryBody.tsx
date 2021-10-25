import React, {useEffect, useState} from 'react';
import {Col,Row} from "react-bootstrap";
import Authors from "./Authors";
import Books from "./Books";
import {IAuthor, IBook} from "../types/Types";
import {BASE_URI} from "../config/config";

const LibraryBody: React.FC = () => {
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

    const handleOnAuthorsChange = (authors: IAuthor[]) => setAuthors(authors);
    const handleOnBooksChange = (books: IBook[]) => setBooks(books);

    return (
        <Row className="library-body mt-4">
            <Col xs={12} md={6} className="px-5 mb-5">
                <Books authors={authors} books={books} onBooksChange={handleOnBooksChange}/>
            </Col>
            <Col xs={12} md={6} className="px-5 mb-5">
                <Authors authors={authors} onAuthorsChange={handleOnAuthorsChange}/>
            </Col>
        </Row>
    );
}

export default LibraryBody;
