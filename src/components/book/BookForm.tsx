import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row } from "react-bootstrap";
import { XCircle } from "react-feather";
import Select from "react-select/base";
import {IAuthor, ISelector} from "../../types/Types";
import {ValueType} from "react-select";

type BookFormProps = {
    authors: IAuthor[] | null
    closeButtonClicked: () => void,
}

const BookForm: React.FC<BookFormProps> = (props) => {
    const {authors, closeButtonClicked} = props;

    const [bookName, setBookName ] =  useState<string | null>(null);
    const [ISBN, setISBN] = useState<string | null>(null);
    const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);
    const [formValidate, setFormValidate] = useState<boolean>(false);
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
    const [selectorOptions, setSelectorOptions] = useState<ISelector | null>(null);
    const [selectorBorderColor, setSelectorBorderColor] = useState<string>("#A5A5A5");

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: `2px solid ${selectorBorderColor}`,
            borderRadius: '0px',
        }),
    }

    const handleBookNameChange = (e: ChangeEvent<HTMLInputElement>) => setBookName(e.target.value);
    const handleISBNChange = (e: ChangeEvent<HTMLInputElement>) => setISBN(e.target.value);
    const handleBookAuthorChange = (e: ValueType<ISelector, false>) => {
        if (option) {
            setSelectedAuthor(option.value);
            if (selectorValidate) {
                setSelectorBorderColor('#6AB867');
            }
        } else {
            setSelectedAuthor(null);
            if (selectorValidate) {
                setSelectorBorderColor('#f80046');
            }
        }
    }

    useEffect(() => {
        if (!authors) {
            return;
        }
        let options: ISelector[] = [];
            authors.map((author: IAuthor) => {
                options.push({
                    label: author.name,
                    value: author
                })
            })
        if (!options) return;
        setSelectorOptions(options);
    }, [authors]);

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(selectorOptions);
    }

    return (
        <Col xs={12} lg={9} className="form mt-4 px-0">
            <Col xs={12}>
                <Row className="form-title">
                    <Col xs={9} className="p-0">
                        <h5><label>Create Book</label></h5>
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
                            <Form.Control size="sm" type="text" onChange={handleBookNameChange} required />
                            <Form.Control.Feedback type="invalid">Please Enter the Title of the Book</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className=" mb-0 ml-1">ISBN</Form.Label>
                            <Form.Control size="sm" type="text" onChange={handleISBNChange} required />
                            <Form.Control.Feedback type="invalid">Please Enter a Valid ISBN</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className=" mb-0 ml-1">Author</Form.Label>
                            <Select className="select-control" classNamePrefix="select-control"
                                    options={selectorOptions}
                                    styles={customStyles}
                                    onChange={handleBookAuthorChange}
                                    isClearable
                                    isSearchable
                              />
                            <Form.Control.Feedback type="invalid">Please Select an Author Name</Form.Control.Feedback>
                        </Form.Group>
                        <Button className="form-button float-right mt-2 py-1 px-4" type="submit">
                            {false ? 'Update' : 'Create'}
                        </Button>
                </Form>
            </Col>
        </Col>
    );
}

export default BookForm;