import React from "react";
import { Col } from 'react-bootstrap';

type HeaderProps = {
    header: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
            <Col xs={12} className="header">
                <h2>{props.header}</h2>
            </Col>
    );
}

export default Header;