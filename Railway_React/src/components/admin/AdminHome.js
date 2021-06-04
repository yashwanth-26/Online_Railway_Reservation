import React from 'react'
//import Button from 'react-bootstrap/Button';
import "../css/admin.css";
import Card from 'react-bootstrap/Card';
import { Link} from "react-router-dom";
import { Col, Row, Form } from "react-bootstrap";
//import Form from 'react-bootstrap/Form'
function AdminHome() {
    
      
    return (
        <div className="tab">
            <div className="form-cont">
           <Row>
            <Col className=" text-info font-weight-bold text-uppercase "> 
           <Card style={{ width: '18rem' }}>
               <Card.Header as="h5">View All Trains</Card.Header>
                <Card.Body>
                 
                 <Card.Text>
                 <i class="fas fa-train"></i>
                 </Card.Text>
                <button type="button" class="btn btn-dark"><Link class='text-white' to="/all-trains"> FInd All Trains</Link> </button>
                 </Card.Body>
            </Card>
            </Col>  
            <Col className=" text-info font-weight-bold text-uppercase "> 
           <Card style={{ width: '18rem' }}>
               <Card.Header as="h5">View Particular Train By Id</Card.Header>
                <Card.Body>
                
                 <Card.Text>
                 <i class="fas fa-train"></i>
                 </Card.Text>
                 <button type="button" class="btn btn-dark"><Link class='text-white' to="/train-id"> FInd By TrainId</Link> </button>
               
                 </Card.Body>
            </Card>
           </Col>
            <Col className=" text-info font-weight-bold text-uppercase "> 
           <Card style={{ width: '18rem' }}>
               <Card.Header as="h5">Add Train Details</Card.Header>
                <Card.Body>
                
                 <Card.Text>
                 <i class="fas fa-users"></i>
                 </Card.Text>
                 <button type="button" class="btn btn-dark"><Link class='text-white' to="/add-train"> Add Trains</Link> </button>
                 </Card.Body>
            </Card>
            </Col>
            </Row>
           
            </div>

<br /><br />

	
        </div>
    )
}

export default AdminHome
