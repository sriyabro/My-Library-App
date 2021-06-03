import React from 'react';
import '../assets/styles/partials/welcome.scss'
import {Col, Container, Row, Image} from "react-bootstrap";
import WelcomeImg from '../assets/images/welcome-library.jpg'

const Welcome: React.FC = () => {
    return (
        <Container fluid={true}>
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
                <Col xs={12} className='text-right pt-1'>
                    Photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Anna Hunko </a>
                    on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Welcome;