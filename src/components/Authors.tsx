import React, {useState} from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AuthorList from "./author/AuthorList";
import AddAuthor from "./author/AddAuthor";
import AuthorForm from "./author/AuthorForm";
import {IAuthor} from "../types/Types";

const Authors: React.FC = () => {
    const [authors, setAuthors] = useState<IAuthor[] | null>(null);
    const [showAuthorForm, setShowAuthorForm] = useState<boolean>(false);
    const [updateClicked, setUpdateClicked] = useState<boolean>(false);

    const handleAddAuthorClicked = () => setShowAuthorForm(true);
    const handleCloseButtonClicked = () => setShowAuthorForm(false);
    const handleCreateAuthorSubmit = (newAuthor: IAuthor) => {
        const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
        newAuthorList.push(newAuthor);
        setAuthors(newAuthorList);
    }

    return (
        <Row className="authors">
            <Header header="Authors" />
            {!authors && <NoItemsLabel message={"No authors listed here"}/>}
            {authors && <AuthorList authors={authors}/>}
            <AddAuthor addAuthorClicked={handleAddAuthorClicked}/>
            {showAuthorForm && <AuthorForm closeButtonClicked={handleCloseButtonClicked}
                                           updateClicked={updateClicked}
                                            createAuthorSubmit={handleCreateAuthorSubmit}/>}
        </Row>
    );
}

export default Authors;