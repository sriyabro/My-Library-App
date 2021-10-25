import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import ConfirmationAlert from "../components/alerts/ConfirmationAlert";
import NoItemsLabel from "../components/NoItemsLabel";
import AuthorList from "../components/author/AuthorList";
import AddAuthor from "../components/author/AddAuthor";
import AuthorForm from "../components/author/AuthorForm";
import DeleteConfirmation from "../components/alerts/DeleteConfirmation";
import {IAlert, IAuthor} from "../types/Types";
import {BASE_URI} from "../config/config";

const AUTHOR_URI = BASE_URI + 'authors/';

const AuthorsPage: React.FC = () => {
  const [authors, setAuthors] = useState<IAuthor[] | null>(null);
  const [showAuthorForm, setShowAuthorForm] = useState<boolean>(false);
  const [updateClicked, setUpdateClicked] = useState<boolean>(false);
  const [indexToUpdate, setIndexToUpdate] = useState<number | null>(null);
  const [authorNameToUpdate, setAuthorNameToUpdate] = useState<string | null>(null);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);
  const [authorNameToDelete, setAuthorNameToDelete] = useState<string | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);
  const [alertContent, setAlertContent] = useState<IAlert | null>(null);
  const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    let uri = BASE_URI + 'authors';
    const res = await fetch(uri);
    const authors = await res.json();
    setAuthors(authors);
  }

  const handleAddAuthorClicked = () => {
    setUpdateClicked(false);
    setShowAuthorForm(true);
  }

  const handleCloseButtonClicked = () => {
    setUpdateClicked(false);
    setShowAuthorForm(false);
  }

  const handleCreateAuthorSubmit = async (newAuthor: IAuthor) => {
    await fetch(AUTHOR_URI, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newAuthor)
    })
    const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
    newAuthorList.push(newAuthor);
    setAuthors(newAuthorList);
    setAlertContent({message: "Author Created Successfully", variant: "success"});
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

  const handleUpdateAuthorSubmit = async (updatedAuthor: IAuthor) => {
    if (indexToUpdate === null) {
      return;
    }
    const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
    let id = newAuthorList[indexToUpdate].id;
    await fetch(AUTHOR_URI + id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedAuthor)
    });
    newAuthorList.splice(indexToUpdate, 1, updatedAuthor);
    setAuthors(newAuthorList);
    setAlertContent({message: "Author Updated Successfully", variant: "warning"});
    setShowAlertMessage(true);
  }

  const handleOnDeleteClick = (index: number) => {
    setIndexToDelete(index);
    setShowDeleteConfirmation(true);
    setShowAuthorForm(false);
  }

  useEffect(() => {
    if (!authors || indexToDelete === null) {
      return;
    }
    setAuthorNameToDelete(authors[indexToDelete].name);
  }, [indexToDelete]);

  const handleDeleteValidationClose = () => setShowDeleteConfirmation(false);

  const handleDeleteValidationConfirm = async () => {
    if (indexToDelete == null) {
      return;
    }
    const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
    let id = newAuthorList[indexToDelete].id;
    await fetch(AUTHOR_URI + id, {
      method: 'DELETE'
    });
    newAuthorList.splice(indexToDelete, 1);
    setAuthors(newAuthorList);
    setShowDeleteConfirmation(false);
    setAlertContent({message: "Author Deleted Successfully", variant: "danger"});
    setShowAlertMessage(true);
  }

  return (
    <React.Fragment>
      <Row className="authors m-3 p-0">
        <Col xs={12} md={6} className="p-0 p-md-2">
          {/*<Header header="Authors" />*/}
          {(!authors || authors.length === 0) && <NoItemsLabel message={"No authors listed here"}/>}
          {authors && <AuthorList authors={authors}
                                  onUpdateClick={handleOnUpdateClick}
                                  onDeleteClick={handleOnDeleteClick}
          />}
        </Col>
        <Col xs={12} md={6} className="p-0 p-md-2">
          <ConfirmationAlert content={alertContent} showAlertMessage={showAlertMessage}/>

          <AddAuthor addAuthorClicked={handleAddAuthorClicked}/>
          {showAuthorForm && <AuthorForm closeButtonClicked={handleCloseButtonClicked}
                                         createAuthorSubmit={handleCreateAuthorSubmit}
                                         updateClicked={updateClicked}
                                         authorNameToUpdate={authorNameToUpdate}
                                         updateAuthorSubmit={handleUpdateAuthorSubmit}
          />}
        </Col>
      </Row>
      <DeleteConfirmation show={showDeleteConfirmation}
                          type={"Author"}
                          item={authorNameToDelete ? authorNameToDelete : 'this item'}
                          handleDelete={handleDeleteValidationConfirm}
                          handleClose={handleDeleteValidationClose}
      />
    </React.Fragment>
  );
}

export default AuthorsPage;
