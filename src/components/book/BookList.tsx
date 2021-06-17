import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import Book from "./Book";
import {IBook} from "../../types/Types";

type BookListProps = {
    books: IBook[] | null
}

const BookList: React.FC<BookListProps> = (props) => {
    const {books} = props;

    return (
        <Col xs={12}>
            {books && <ListGroup className="mx-0">
                {books.map((book: IBook, index: number ) => {
                    return (
                        <ListGroup.Item className="p-0 border-0" key={index}>
                            <Book key={index}
                                  book={book}
                                  index={index}
                            />
                        </ListGroup.Item>
                    );
                })
                }
            </ListGroup>}
        </Col>
    );
}

export default BookList;