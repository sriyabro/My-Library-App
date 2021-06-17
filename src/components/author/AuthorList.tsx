import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import Author from "./Author";
import {IAuthor} from "../../types/Types";

type AuthorListProps = {
    authors: IAuthor[] | null,
    onUpdateClick: (index: number) => void,
    onDeleteClick: (index: number) => void
}

const AuthorList: React.FC<AuthorListProps> = (props) => {
    const {authors, onUpdateClick, onDeleteClick} = props;

    return (
        <Col xs={12}>
            {authors && <ListGroup className="mx-0 mt-4">
                {authors.map((author: IAuthor, index: number) => {
                    return (
                        <ListGroup.Item className="p-0 border-0" key={index}>
                            <Author key={index}
                                    author={author}
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

export default AuthorList;