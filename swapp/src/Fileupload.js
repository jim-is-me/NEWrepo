import React from 'react';
import Form from 'react-bootstrap/Form';
import './Login.css';

function Fileupload() {

    return (

        <div>
            <Form className="login-form">
                <Form.Group>
                    <Form.Label>Client name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
            </Form>

        </div>
        
        );
}

export default Fileupload;