import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CommentList from "./components/comments/CommentList";

function App() {
    return (
        <Container className="App">
            <Row className="justify-content-center">
                <Col md={6} className="pt-3">
                    <CommentList/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
