import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Contact(){
    return (
        <Container fluid="sm">
            <Row>
                <Col sm="12" md={{ size: 6}}>
                    <Button href="https://www.linkedin.com/in/timjbarrett" target="_blank" variant="light"><h3 className="text-center font-weight-light">Add me on LinkedIn</h3></Button>
                </Col>
                <Col sm="12" md={{ size: 6}}>
                    <Button href="#" target="_blank" variant="light"><h3 className="text-center font-weight-light">Shoot me an Email \n</h3></Button>
                </Col>
                <Col sm="12" md={{ size: 6}}>
                    <Button href="https://github.com/tjbarrett42" target="_blank" variant="light"><h3 className="text-center font-weight-light">See me on GitHub</h3></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;