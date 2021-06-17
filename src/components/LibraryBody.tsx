import React, {useState} from 'react';
import {Col,Row} from "react-bootstrap";
import Authors from "./Authors";
import Books from "./Books";
import {IAuthor} from "../types/Types";

const LibraryBody: React.FC = () => {
    const [authors, setAuthors] = useState<IAuthor[] | null>(null);

    const handleOnAuthorsChange = (authors: IAuthor[]) => setAuthors(authors);

    return (
        <Row className="library-body mt-4">
            <Col xs={12} md={6} className="px-5 mb-5">
                <Books authors={authors}/>
            </Col>
            <Col xs={12} md={6} className="px-5 mb-5">
                <Authors authors={authors} onAuthorsChange={handleOnAuthorsChange}/>
            </Col>
        </Row>
    );
}

export default LibraryBody;