import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Login.css";

function Createclients() {

    return (

        <div>
            <Form className="table">
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Client name</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Business</Form.Label>
                    <Form.Control type="text" placeholder="Fireworks" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Mobile number</Form.Label>
                    <Form.Control type="number" placeholder="9384983948" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
		</div>

    );

}

export default Createclients;