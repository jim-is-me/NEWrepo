import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import Login from './Login';
import { LinkContainer } from 'react-router-bootstrap';
import Fileupload from './Fileupload';
import Clients from './Clients';
import Createclients from './Createclients';

function Admin() {
    return (
        <div>
            <Router>
            <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>ADMIN</Navbar.Brand>

                    <Nav className="mr-auto">
                        <Nav.Link>Home</Nav.Link>
                        <LinkContainer to="/Fileupload">
                            <Nav.Link>File upload</Nav.Link>
                        </LinkContainer>
                    <LinkContainer to="/Clients">
                    <Nav.Link>Clients</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Createclients">
                            <Nav.Link>Create client</Nav.Link>
                        </LinkContainer>
                </Nav>
                    
                </Navbar>
                
                <Switch>
                    
                    <Route path="/Fileupload" component={Fileupload}></Route>
                    <Route path="/Clients" component={Clients}></Route>
                    <Route path="/Createclients" component={Createclients}></Route>
                </Switch>
            </Router>
        </div>
        );
}

export default Admin;
