import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Resume(){
    return (
        <Container fluid="sm">
            <Row>
                <Col sm="12" md={{ size: 6}}>
                    <h1>Allvue Systems, NY</h1>
                    <h2 className="font-weight-light">Application Engineer</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;