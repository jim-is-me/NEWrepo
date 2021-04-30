import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import './Login.css';
import { useHistory } from 'react-router-dom';
//import Tabs from 'react-bootstrap/Tabs';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

        let history = useHistory();

        function handleClickadmin() {
            history.push("/Admin");
        }

        function handleClickclient() {
            history.push("/Client");
        }

    return (
        
        <div className='login-form'>
            <Tabs defaultActiveKey="home" id="controlled-tab-example">
                <Tab eventKey="home" title="Admin">
                    <Form onSubmit={handleSubmit(onSubmit)} className='table'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="email" placeholder="Enter user name" {...register("firstName", { required: true, maxLength: 20 })} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register("Password", { required: true, maxLength: 20 })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleClickadmin}>
                            Submit
                        </Button>

                    </Form>
                </Tab>
                <Tab eventKey="profile" title="Client">
                    <Form onSubmit={handleSubmit(onSubmit)} className='table'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="email" placeholder="Enter user name" {...register("firstName", { required: true, maxLength: 20 })} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register("Password", { required: true, maxLength: 20 })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleClickclient}>
                            Submit
                        </Button>

                    </Form>
                </Tab>
            </Tabs>

        </div>

    );
}
