import React, {useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import NoItemsLabel from "./NoItemsLabel";
import AuthorList from "./author/AuthorList";
import AddAuthor from "./author/AddAuthor";
import AuthorForm from "./author/AuthorForm";
import {IAlert, IAuthor} from "../types/Types";
import DeleteConfirmation from "./alerts/DeleteConfirmation";
import ConfirmationAlert from "./alerts/ConfirmationAlert";

const Authors: React.FC = () => {
    const [authors, setAuthors] = useState<IAuthor[] | null>(null);
    const [showAuthorForm, setShowAuthorForm] = useState<boolean>(false);
    const [updateClicked, setUpdateClicked] = useState<boolean>(false);
    const [indexToUpdate, setIndexToUpdate] = useState<number | null>(null);
    const [authorNameToUpdate, setAuthorNameToUpdate] = useState<string | null>(null);
    const [indexToDelete, setIndexToDelete] = useState<number | null>(null);
    const [authorNameToDelete, setAuthorNameToDelete] = useState<string | null>(null);
    const [showDeleteValidation, setShowDeleteValidation] = useState<boolean>(false);
    const [alertContent, setAlertContent] = useState<IAlert | null>(null);
    const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);

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
        setAlertContent({message:"Author Created Successfully", variant:"success"});
        setShowAlertMessage(true);
    }

    const handleOnUpdateClick = (index: number) => {
        setUpdateClicked(true);
        setIndexToUpdate(index);
        setShowAuthorForm(true);
    }

    useEffect(() => {
        if (indexToUpdate === null || !authors) {
                return;
            }
            setAuthorNameToUpdate(authors[indexToUpdate].name);
    }, [indexToUpdate])

    const handleUpdateAuthorSubmit = (updatedAuthor: IAuthor) => {
        if (indexToUpdate === null) {
            return;
        }
        const newAuthorList: IAuthor[] = authors? authors.slice() : [];
        newAuthorList.splice(indexToUpdate, 1, updatedAuthor);
        setAuthors(newAuthorList);
        setAlertContent({message:"Author Updated Successfully", variant:"warning"});
        setShowAlertMessage(true);
    }

    const handleOnDeleteClick = (index: number) => {
        setIndexToDelete(index);
        setShowDeleteValidation(true);
        setShowAuthorForm(false);
    }

    useEffect(() => {
        if (!authors || indexToDelete === null) {
            return;
        }
        setAuthorNameToDelete(authors[indexToDelete].name);
    }, [indexToDelete]);

    const handleDeleteValidationClose = () => setShowDeleteValidation(false);

    const handleDeleteValidationConfirm = () => {
        if (indexToDelete == null) {
            return;
        }
        const newAuthorList: IAuthor[] = authors? authors.slice() : [];
        newAuthorList.splice(indexToDelete, 1);
        setAuthors(newAuthorList);
        setShowDeleteValidation(false);
        setAlertContent({message:"Author Deleted Successfully", variant:"danger"});
        setShowAlertMessage(true);
    }

    return (
        <React.Fragment>
        <Row className="authors">
            <Header header="Authors" />
            {(!authors || authors.length === 0) && <NoItemsLabel message={"No authors listed here"} />}
            {authors && <AuthorList authors={authors}
                                    onUpdateClick={handleOnUpdateClick}
                                    onDeleteClick={handleOnDeleteClick}
            />}
            <AddAuthor addAuthorClicked={handleAddAuthorClicked}/>
            <ConfirmationAlert content={alertContent} showAlertMessage={showAlertMessage} />
            {showAuthorForm && <AuthorForm closeButtonClicked={handleCloseButtonClicked}
                                           createAuthorSubmit={handleCreateAuthorSubmit}
                                            updateClicked={updateClicked}
                                            authorNameToUpdate={authorNameToUpdate}
                                            updateAuthorSubmit={handleUpdateAuthorSubmit}
            />}
        </Row>
            <DeleteConfirmation show={showDeleteValidation}
                                type={"Author"}
                                item={authorNameToDelete ? authorNameToDelete : 'this item'}
                                handleDelete={handleDeleteValidationConfirm}
                                handleClose={handleDeleteValidationClose}
            />
    </React.Fragment>
    );
}

export default Authors;