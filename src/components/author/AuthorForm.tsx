import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from 'react-bootstrap';
import {XCircle} from "react-feather";
import {IAuthor} from "../../types/Types";

type AuthorFormProps = {
    closeButtonClicked: () => void,
    updateClicked: boolean,
    createAuthorSubmit: (newAuthor: IAuthor) => void,
    authorNameToUpdate: string | null,
    updateAuthorSubmit: (updatedAuthor: IAuthor) => void
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {
    const {closeButtonClicked, updateClicked, createAuthorSubmit, authorNameToUpdate, updateAuthorSubmit } = props;

    const [formValidate, setFormValidate] = useState<boolean>(false);
    const [author, setAuthor] = useState<string | null>(null);

    const handleOnAuthorInputChange = (e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value);
    
    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (author === null || author === '') {
            setFormValidate(true);
        }
        else {
            if (!updateClicked) {
                const newAuthor: IAuthor = {
                    name: author,
                };
                createAuthorSubmit(newAuthor);
                closeButtonClicked();
            }
            else {
                const updatedAuthor: IAuthor = {
                    name: author,
                };
                updateAuthorSubmit(updatedAuthor);
                closeButtonClicked();
            }
        }
    }

    useEffect(() => {
            setAuthor(authorNameToUpdate);
    }, [authorNameToUpdate]);

    return (
        <Col xs={12} lg={9} className="form mt-4 px-0">
            <Col xs={12}>
                <Row className="form-title">
                    <Col xs={9} className="p-0">
                        <h5><label>{updateClicked ? 'Update' : 'Create'} Author</label></h5>
                    </Col>
                    <Col xs={3} className="text-right px-0">
                        <XCircle size={22} onClick={() => closeButtonClicked()}/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form noValidate validated={formValidate} onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label className=" mb-0 ml-1">Name of Author</Form.Label>
                        {!updateClicked
                            ? <Form.Control size="sm" type="text" required autoFocus
                                             onChange={handleOnAuthorInputChange}/>
                            : <Form.Control size="sm" type="text" required autoFocus
                                            onChange={handleOnAuthorInputChange}
                                            value={author ? author : ''}/>
                        }
                        <Form.Control.Feedback type="invalid">Please Enter the Name of Author</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="form-button float-right mt-2 py-1 px-4" type="submit">
                        {updateClicked ? 'Update' : 'Create'}
                    </Button>
                </Form>
            </Col>
        </Col>
    );
}

export default AuthorForm;