import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from "react-select";
import {IAuthor, IBook, ISelector} from "../../types/Types";
import {ValueType} from "react-select";

type BookFormProps = {
    authors: IAuthor[] | null,
    closeButtonClicked: () => void
    updateClicked: boolean
    createBookSubmit: (newBook: IBook) => void
    bookToUpdate: IBook | null
    updateBookSubmit: (updatedBook: IBook) => void
}

const BookForm: React.FC<BookFormProps> = (props) => {
    const {authors, closeButtonClicked, updateClicked, createBookSubmit, bookToUpdate, updateBookSubmit} = props;

    const [bookName, setBookName] = useState<string>('');
    const [bookISBN, setBookISBN] = useState<string>('');
    const [selectedAuthor, setSelectedAuthor] = useState<IAuthor | null>(null);
    const [formValidate, setFormValidate] = useState<boolean>(false);
    const [selectorValidate, setSelectorValidate] = useState<boolean>(false);
    const [selectorOptions, setSelectorOptions] = useState<ISelector[] | null>(null);
    const [selectorBorderColor, setSelectorBorderColor] = useState<string>("#A5A5A5");

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: `2px solid ${selectorBorderColor}`,
            borderRadius: '0px',
        }),
    }

    const handleBookNameChange = (e: ChangeEvent<HTMLInputElement>) => setBookName(e.target.value);
    const handleISBNChange = (e: ChangeEvent<HTMLInputElement>) => setBookISBN(e.target.value);
    const handleBookAuthorChange = (option: ValueType<ISelector, false>) => {
        if (option) {
            setSelectedAuthor(option.value);
            if (selectorValidate) {
                setSelectorBorderColor('#5cb85c');
            }
        } else {
            setSelectedAuthor(null);
            if (selectorValidate) {
                setSelectorBorderColor('#d9534f');
            }
        }
    }

    useEffect(() => {
        if (!authors) {
            return;
        }
        let options: ISelector[] | null = [];
        authors.forEach((author: IAuthor) => {
            options?.push({
                label: author.name,
                value: author
            })
        })
        if (!options) return;
        setSelectorOptions(options);
    }, [authors]);

    useEffect(() => {
        if (bookToUpdate === null) return;
        setBookName(bookToUpdate?.name);
        setBookISBN(bookToUpdate?.ISBN);
        setSelectedAuthor(bookToUpdate?.author);
    },[bookToUpdate]);

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (selectedAuthor === null || bookName === '' || !bookName || bookISBN === '' || !bookISBN) {
            setFormValidate(true);
            setSelectorValidate(true);
        }
        else {
            if (!updateClicked) {
                const newBook: IBook = {
                    name: bookName,
                    ISBN: bookISBN,
                    author: selectedAuthor
                };
                createBookSubmit(newBook);
                closeButtonClicked();
                setBookName('');
                setBookISBN('');
            }
            else {
                const updatedBook: IBook = {
                    name: bookName,
                    ISBN: bookISBN,
                    author: selectedAuthor
                };
                updateBookSubmit(updatedBook);
                closeButtonClicked();
                setBookName('');
                setBookISBN('');
            }
        }
    }

    return (
        <Col xs={12} lg={9} className="form mt-4 px-0">
            <Col xs={12}>
                <Row className="form-title">
                    <Col xs={9} className="p-0">
                        <h5><label>{updateClicked ? 'Update' : 'Create'} Book</label></h5>
                    </Col>
                    <Col xs={3} className="text-right px-0">
                        <XCircle size={22} onClick={() => closeButtonClicked()}/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form noValidate validated={formValidate} onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-2">
                        <Form.Label className="mb-0 ml-1">Title of the Book</Form.Label>
                        {!updateClicked
                            ? <Form.Control size="sm" type="text" onChange={handleBookNameChange} autoFocus required/>
                            : <Form.Control size="sm" type="text" onChange={handleBookNameChange} autoFocus value={bookName} required/>}
                        <Form.Control.Feedback type="invalid">Please Enter the Title of the Book</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label className=" mb-0 ml-1">ISBN</Form.Label>
                        {!updateClicked
                            ? <Form.Control size="sm" type="text" onChange={handleISBNChange} required/>
                            : <Form.Control size="sm" type="text" onChange={handleISBNChange} value={bookISBN} required/>}
                        <Form.Control.Feedback type="invalid">Please Enter a Valid ISBN</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className=" mb-0 ml-1">Author</Form.Label>
                        <Select className="select-control" classNamePrefix="select-control"
                                isSearchable
                                isClearable
                                options={!selectorOptions ? [] : selectorOptions}
                                styles={customStyles}
                                onChange={handleBookAuthorChange}
                        />
                        {selectorValidate && <small className="invalid-feedback text-danger" style={{'display': 'block'}}>Please Select an
                            Author Name</small>}
                    </Form.Group>
                    <Button className="form-button float-right mt-2 py-1 px-4" type="submit">
                        {updateClicked ? 'Update' : 'Create'}
                    </Button>
                </Form>
            </Col>
        </Col>
    );
}

export default BookForm;