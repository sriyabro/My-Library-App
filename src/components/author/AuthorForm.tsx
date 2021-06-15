import React, {useState} from "react";
import {Col, Form, Row} from 'react-bootstrap';
import {XCircle} from "react-feather";
import FormButton from "../FormButton";

const AuthorForm: React.FC = () => {
    const [formValidate, setFormValidate] = useState<boolean>(false);

    return (
        <Col xs={12} lg={9} className="form mt-4 px-0">
            <Col xs={12}>
                <Row className="form-title">
                    <Col xs={9} className="p-0">
                        <h5><label>Create Author</label></h5>
                    </Col>
                    <Col xs={3} className="text-right px-0">
                        <XCircle size={22} />
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form noValidate validated={formValidate} >
                        <Form.Group>
                            <Form.Label className=" mb-0 ml-1">Name of Author</Form.Label>
                            <Form.Control size="sm" type="text" required />
                            <Form.Control.Feedback type="invalid">Please enter the name of author</Form.Control.Feedback>
                        </Form.Group>
                    <FormButton updateClicked={true} />
                </Form>
            </Col>
        </Col>

    );
}

export default AuthorForm;