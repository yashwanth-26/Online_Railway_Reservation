import React, { useState, useEffect }  from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Row, Form } from "react-bootstrap";
export default function DisplayTrain() {
    const [trainList, settrainList] = useState("")
  const [berthList, setberthList] = useState([])
  const [trainNumber, setTrainNumber] = useState("")
    let aa=useParams()
    useEffect(() => {
   
        setTrainNumber((aa.id));
       
        axios.get("http://localhost:8081/all/api/trainDetailsService/findTrainlDetails/"+(aa.id)).then((res) => {
          settrainList(res.data)
          console.log(res.data)
          console.log(res.data.berthDetailsModel)
          setberthList(res.data.berthDetailsModel)
         //console.log(berthList)
         // console.log(trainList.berthDetailsModel)
         
          
        })
    
    }, [])
    return (
        
            <div >
                <br /><br /><br /><br />&emsp; &emsp; &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;
                    <div className="form-container2" >
                        <Row><Col className="float-right text-info font-weight-bold text-uppercase "> &emsp; &emsp;
                        <i class="fas fa-list-ol"></i> &emsp; {trainList.trainNumber} &emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <i class="fas fa-train"></i>&emsp;{trainList.trainName}  </Col></Row>
                        <br />
                        <Row>
                            &emsp;&emsp;
                            <Col className="text-warning">
                                From: {trainList.trainFrom}<br />
                      
                            </Col>
                            <Col className="float-right text-warning font-weight-bold text-uppercase ">
                            <i class="fas fa-angle-double-right"></i>
                            </Col>
                            <Col className="text-warning" >
                                To: {trainList.trainTo}<br />
                        
                            </Col>
                        </Row>
                        <Row ><Col className="float-right text-danger font-weight-bold " >&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        {
                        berthList.map(
                            berth=>
                            <Row>
                               &emsp; &emsp;
                                 <Col>{berth.berthType}&emsp;&emsp;&emsp;</Col>
                                  <Col>{berth.coachName}&emsp;&emsp;&emsp;</Col>
                                <Col>{berth.availablility}&emsp;&emsp;&emsp;</Col>
                            </Row>
                            
                            
                        )
                       } 
             </Col></Row>
                    

                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>

        
    
    )
}
