import React from "react";
import {Col} from 'react-bootstrap';

type LabelProps = {
    message: string
}

const NoItemsLabel: React.FC<LabelProps> = (props) => {
    return (
            <Col className="mt-3 pl-0 font-italic">
                <label>{props.message}</label>
            </Col>
    );
}

export default NoItemsLabel;