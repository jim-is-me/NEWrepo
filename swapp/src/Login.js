import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

        let history = useHistory();

        function handleClick() {
            history.push("/Admin");
        }

    return (
        
        <div className='login-form'>
            <h1>ADMIN LOGIN</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("firstName", { required: true, maxLength: 20 })} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("Password", { required: true, maxLength: 20 })}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                        Submit
                    </Button>
                    
            </Form>
        </div>

    );
}
