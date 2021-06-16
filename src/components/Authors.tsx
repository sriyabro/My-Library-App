import React, {useEffect, useState} from "react";
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
    const [indexToUpdate, setIndexToUpdate] = useState<number | null>(null);
    const [authorNameToUpdate, setAuthorNameToUpdate] = useState<string | null>(null);

    const handleAddAuthorClicked = () => {
        setUpdateClicked(false);
        setShowAuthorForm(true);
    }

    const handleCloseButtonClicked = () => {
        setUpdateClicked(false);
        setShowAuthorForm(false);
    }

    const handleCreateAuthorSubmit = (newAuthor: IAuthor) => {
        const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
        newAuthorList.push(newAuthor);
        setAuthors(newAuthorList);
    }

    const handleOnUpdateClick = (index: number) => {
        setUpdateClicked(true);
        setIndexToUpdate(index);
        setShowAuthorForm(true);
    }

    const handleUpdateAuthorSubmit = (updatedAuthor: IAuthor) => {
        if (indexToUpdate === null) return;
        const newAuthorList: IAuthor[] = authors? authors.slice() : [];
        newAuthorList.splice(indexToUpdate, 1, updatedAuthor);
        setAuthors(newAuthorList);
    }

    useEffect(() => {
        if (indexToUpdate === null || !authors) {
                return;
            }
            setAuthorNameToUpdate(authors[indexToUpdate].name);
    }, [indexToUpdate])

    return (
        <Row className="authors">
            <Header header="Authors" />
            {!authors && <NoItemsLabel message={"No authors listed here"}/>}
            {authors && <AuthorList authors={authors} onUpdateClick={handleOnUpdateClick}/>}
            <AddAuthor addAuthorClicked={handleAddAuthorClicked}/>
            {showAuthorForm && <AuthorForm closeButtonClicked={handleCloseButtonClicked}
                                           createAuthorSubmit={handleCreateAuthorSubmit}
                                            updateClicked={updateClicked}
                                            authorNameToUpdate={authorNameToUpdate}
                                            updateAuthorSubmit={handleUpdateAuthorSubmit}/>}
        </Row>
    );
}

export default Authors;