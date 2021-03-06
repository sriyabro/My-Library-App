import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import {IBook} from "../../types/Types";

type BookProps = {
  book: IBook,
  index: number,
  onUpdateClick: (index: number) => void
  onDeleteClick: (index: number) => void
}

const Book: React.FC<BookProps> = (props) => {
  const {book, index, onUpdateClick, onDeleteClick} = props;

  return (
    <Row className="item-row pt-2 pb-1">
      <Col xs={9}>
        <h5>{index + 1}. {book.name}</h5>
      </Col>
      <Col xs={3} className="text-right px-0">
        <Edit className="icon mx-2 text-warning" size={20} onClick={() => {
          onUpdateClick(index)
        }}/>
        <Trash2 className="icon mx-2 text-danger" size={20} onClick={() => {
          onDeleteClick(index)
        }}/>
      </Col>
    </Row>
  );
}

export default Book;
