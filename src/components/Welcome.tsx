import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImg from '../assets/images/welcome-library.jpg'

const Welcome: React.FC = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xs={12} className='text-center mt-2 mb-1'>
                    <h1>My Library</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='mx-0 px-0'>
                    <Image src={WelcomeImg} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='text-right pr-5 pt-1'>
                    Photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText">
                    Anna Hunko </a>
                    on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText">
                    Unsplash </a>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Welcome;