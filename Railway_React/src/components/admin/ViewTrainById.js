import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
function ViewTrainById() {
    const history=useHistory()
    const [trainList, settrainList] = useState("")
  const [berthList, setberthList] = useState([])
  const [trainNumber, setTrainNumber] = useState("")
//     const getDetails = () => {
//         console.log(trainNumber)
//     //     axios.get("http://localhost:8081/all/api/trainDetailsService/findTrainByNumber/"+trainNumber).then((res) => {
//     //   settrainList(res.data)
      
//     //   console.log(res.data)
//     //   console.log(res.data.berthDetailsModel)
//     //   setberthList(res.data.berthDetailsModel)
//     //  console.log(berthList)
//     //  console.log(trainList.berthDetailsModel)
     
      
//    // })
// }
const getDetails =() =>{
    //console.log(trainNumber);
     history.push(`/train-info/${trainNumber}`)
  }

   

    return (
        <div>
            <div className="search">

<Form className="form-container1">
          <h1 className="h1tag">Find Train By ID</h1> <br />
                <div>
                <label className="text">TRAIN NUMBER:</label>  &emsp;&emsp;           
                <input type="number" class="form-control1" id="id" name="id" placeholder="Enter Train Id" onChange={(event) => setTrainNumber(event.target.value)} />
                </div> 
                <br /><br />
                <Button variant="outline-success"  className="float-middle" type="submit" onClick={() =>getDetails()}>  find Train </Button>

           <br />
           

</Form>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
</div>
          
        </div>
    )
}

export default ViewTrainById
