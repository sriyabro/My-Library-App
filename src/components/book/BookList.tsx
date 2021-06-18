import React from "react";
import {Col, ListGroup} from "react-bootstrap";
import Book from "./Book";
import {IBook} from "../../types/Types";

type BookListProps = {
    books: IBook[] | null,
    onUpdateClick: (index: number) => void,
    onDeleteClick: (index: number) => void,

}

const BookList: React.FC<BookListProps> = (props) => {
    const {books, onUpdateClick, onDeleteClick} = props;

    return (
        <Col xs={12}>
            {books && <ListGroup className="mx-0 mt-4">
                {books.map((book: IBook, index: number) => {
                    return (
                        <ListGroup.Item className="p-0 border-0" key={index}>
                            <Book key={index}
                                  book={book}
                                  index={index}
                                  onUpdateClick={onUpdateClick}
                                  onDeleteClick={onDeleteClick}
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