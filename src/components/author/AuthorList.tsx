import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import Author from "./Author";
import {IAuthor} from "../../types/Types";

type AuthorListProps = {
    authors: IAuthor[] | null
}

const AuthorList: React.FC<AuthorListProps> = (props) => {
    const {authors} = props;

    return (
        <Col xs={12}>
            {authors && <ListGroup className="mx-0 mt-4">
                {authors.map((author: IAuthor, index: number) => {
                    return (
                        <ListGroup.Item className="p-0 border-0" key={index}>
                            <Author key={index}
                                    author={author}
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

export default AuthorList;