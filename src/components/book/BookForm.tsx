import React, {useState} from "react";
import { Col, Form, Row } from "react-bootstrap";
import { XCircle } from "react-feather";
import FormButton from "../FormButton";
import Select from "react-select/base";

const options = [
        {value: "Author 1", label: "Author 1"},
        {value: "Author 2", label: "Author 2"},
        {value: "Author 3", label: "Author 3"},
        {value: "Author 4", label: "Author 4"},
    ];

const BookForm: React.FC = () => {
    const [formValidate, setFormValidate] = useState<boolean>(false);
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
    const [selectorBorderColor, setSelectorBorderColor] = useState<string>("#A5A5A5");

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: `2px solid ${selectorBorderColor}`,
            borderRadius: '0px',
        }),
    }

    return (
        <Col xs={12} lg={9} className="form mt-4 px-0">
            <Col xs={12}>
                <Row className="form-title">
                    <Col xs={9} className="p-0">
                        <h5><label>Create Book</label></h5>
                    </Col>
                    <Col xs={3} className="text-right px-0">
                        <XCircle size={22} />
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form noValidate validated={formValidate} >
                        <Form.Group className="mb-2">
                            <Form.Label className="mb-0 ml-1">Title of the Book</Form.Label>
                            <Form.Control size="sm" type="text" required />
                            <Form.Control.Feedback type="invalid">Please enter the title of the book</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className=" mb-0 ml-1">ISBN</Form.Label>
                            <Form.Control size="sm" type="text" required />
                            <Form.Control.Feedback type="invalid">Please enter a valid ISBN</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className=" mb-0 ml-1">Author</Form.Label>
                            <Select className="select-control" classNamePrefix="select-control"
                                    options={options}
                                    styles={customStyles}
                                    isClearable
                                    sisSearchable
                              />
                            <Form.Control.Feedback type="invalid">Please enter a valid ISBN</Form.Control.Feedback>
                        </Form.Group>
                    <FormButton updateClicked={false} />
                </Form>
            </Col>
        </Col>
    );
}

export default BookForm;