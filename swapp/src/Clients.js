import React from 'react';
import Table from 'react-bootstrap/Table';
import './Login.css';
import Button from 'react-bootstrap/Button';

function Clients(){

	return(
		
        <div>
            
            <Button variant="info" className="button">
                Edit client
            </Button>{' '}
            <Button variant="danger" className="button">
                Delete client
            </Button>{' '}
            <Table striped bordered hover variant="white" className="table">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Client Name</th>
                        <th>Business</th>
                        <th>Mobile no</th>
                        <th>Email ID</th>
                        <th>GST No</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                        <td>Offset</td>
                        <td>3445344534</td>
                        <td>Mark@mdo</td>
                        <td>1234552</td>
                </tr>
                <tr>
                    <td>2</td>
                        <td>Jacob</td>
                        <td>Offset</td>
                        <td>344455342</td>
                    <td>tornton@gan</td>
                    <td>655343</td>
                </tr>
                <tr>
                        <td>3</td>
                        <td>Malcom</td>
                        <td>Fireworks</td>
                        <td>944455342</td>
                        <td>arub@gan</td>
                        <td>98655343</td>
                        
                </tr>
                </tbody>
            </Table>
		</div>
		
		);

}

export default Clients;