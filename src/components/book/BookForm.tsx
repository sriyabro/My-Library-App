import React from "react";
import {Col, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const BookForm: React.FC = () => {
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

            </Col>
        </Col>
    );
}

export default BookForm;