import React, { useState,useEffect} from "react";
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
export default function UpdateTrains() {
    const history=useHistory()
    const [id, setId] = useState("");
    const [trainNumber, setTrainNumber] = useState("");
    const [trainName, setTrainName] = useState("");
    const [trainFrom, setTrainFrom] = useState("");
    const [trainTo, setTrainTo] = useState("");
    const [trainAvaliablity, setTrainAvaliablity] = useState("");
    const [berthDetailsModel, setBerthDetailsModel] = useState([{
        availablility:"A8",
        coachName:"S1",
        berthType:"Sleeper",
        sideUpper:"SU1",
        sideLower:"SL2",
        leftUpper:"LU3",
        leftMiddel:"LM4",
        leftLower:"LL5",
        rightUpper:"RU6",
        rightMiddel:"RM7",
        rightLower:"RL8"
       

    },
    {
        availablility:"A8",
        coachName:"S2",
        berthType:"Tire-1(AC)",
        sideUpper:"SU1",
        sideLower:"SL2",
        leftUpper:"LU3",
        leftMiddel:"LM4",
        leftLower:"LL5",
        rightUpper:"RU6",
        rightMiddel:"RM7",
        rightLower:"RL8"
       

    }
      
    ])
    let aa=useParams()
    useEffect(() => {
   
        setId((aa.id));
       console.log(id);
    
    }, [])
    const handleadd = () => {
        // // var x = Math.floor((Math.random() * 100) + 1);
        // // setId(x);
        // let obj = { id: Math.floor((Math.random() * 100) + 1), trainNumber: trainNumber, trainName: trainName,  trainFrom:trainFrom,
        //      trainTo:trainTo, trainAvaliablity:trainAvaliablity,
        //     berthDetailsModel: berthDetailsModel }
        //     // console.log(obj)
        // axios.post("http://localhost:8081/admin/api/trainDetailsService/insertTrainlDetails",obj).then((res) => {
            
        //         //console.log(obj)
        //        history.push(`/all-trains`)
            
        // })
        
    
    }
    
    return (
   <div>
       &emsp;&emsp;
       <div class="form-container2">
       <h1 className="h1tag">Update Train</h1>
	<form>
		<div class="row align-items-start">
			<div class="col">
				<label for="fname">Tain Number:</label>
				<input type="text" id="triannumber" name="fname" placeholder="train number..." onChange={(event) => setTrainNumber(event.target.value)}/>&emsp;
			</div>
			<div class="col">
				<label for="fname">Train Name:</label>
				<input type="text" onChange={(event) => setTrainName(event.target.value)}/>
				<br/><br/>
			</div>
		</div>

		<div class="row align-items-start">
			<div class="col">
				<label for="fname">Tain from:</label>
				<input type="text" id="triannumber" name="fname" placeholder="from..." onChange={(event) => setTrainFrom(event.target.value)}/>&emsp;&emsp;
			</div>
			<div class="col">
				<label for="fname">Train To:</label>
				<input type="text" placeholder="To..." onChange={(event) => setTrainTo(event.target.value)}/>
				<br/><br/>
			</div>
			<div class="col">
				<label for="fname">Tain Avaliablity:</label>
				<input type="text" id="triannumber" name="fname" placeholder="avaliablity..." onChange={(event) => setTrainAvaliablity(event.target.value)}/><br/><br/>
			</div>
		</div>


		
        <div class="container border">

			<h3>SL</h3>
			<div class="row align-items-start">
				<div class="col">
					<label for="fname">Coach Name:</label>
					<input type="text" id="triannumber" name="fname" placeholder="Coach name..." 
                    value="S1"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Berth Type:</label>
					<input type="text" placeholder="berth type..."
                    value="Sleeper"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Availability:</label>
					<input type="text" id="triannumber" name="fname" placeholder="avaliablity..."
                    value="A8"
                    />
				</div>
				<br/><br/>
			</div>

			<div class="row align-items-start">
				<div class="col">
					<label for="fname">Side Upper:</label>
					<input type="text" id="triannumber" name="fname" placeholder="Coach name..."
                    value="SU1"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Side Lower:</label>
					<input type="text" placeholder="berth type..."
                    value="SL2"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Left Upper:</label>
					<input type="text" id="triannumber" name="fname" placeholder="avaliablity..."
                    value="LU3"
                    />
				</div>
				<br/><br/>

			</div>


			<div class="row align-items-start">
				<div class="col">
					<label for="fname">Left Middle:</label>
					<input type="text" id="triannumber" name="fname" placeholder="Coach name..."
                    value="LM4"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Left Lower:</label>
					<input type="text" placeholder="berth type..."
                    value="LL5"
                    />&emsp;
					
				</div>
				<div class="col">
					<label for="fname">Right Upper:</label>
					<input type="text" id="triannumber" name="fname" placeholder="avaliablity..."
                    value="RU6"
                    />
				</div>
				<br/><br/><br />

			</div>


			<div class="row align-items-start">
				<div class="col">
					<label for="fname">Right Middle:</label>
					<input type="text" id="triannumber" name="fname" placeholder="Coach name..."
                    value="RM7"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Right Lower:</label>
					<input type="text" placeholder="berth type..."
                    value="RL8"
                    />&emsp;
				</div>
			</div>
		</div>
        


		
		<div class="container border">

			<h3>AC</h3>
			<div class="row align-items-start">
				<div class="col">
					<label for="fname">Coach Name:</label>
					<input type="text" id="triannumber" name="fname" placeholder="Coach name..." 
                    value="S2"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Berth Type:</label>
					<input type="text" placeholder="berth type..."
                    value="Tire-1(AC)"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Availability:</label>
					<input type="text" id="triannumber" name="fname" placeholder="avaliablity..."
                    value="A8"
                    />
				</div>
				<br/><br/>
			</div>

			<div class="row align-items-start">
				<div class="col">
					<label for="fname">Side Upper:</label>
					<input type="text" id="triannumber" name="fname" placeholder="Coach name..."
                    value="SU1"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Side Lower:</label>
					<input type="text" placeholder="berth type..."
                    value="SL2"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Left Upper:</label>
					<input type="text" id="triannumber" name="fname" placeholder="avaliablity..."
                    value="LU3"
                    />
				</div>
				<br/><br/>

			</div>


			<div class="row align-items-start">
				<div class="col">
					<label for="fname">Left Middle:</label>
					<input type="text" id="triannumber" name="fname" placeholder="Coach name..."
                    value="LM4"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Left Lower:</label>
					<input type="text" placeholder="berth type..."
                    value="LL5"
                    />&emsp;
					
				</div>
				<div class="col">
					<label for="fname">Right Upper:</label>
					<input type="text" id="triannumber" name="fname" placeholder="avaliablity..."
                    value="RU6"
                    />
				</div>
				<br/><br/><br />

			</div>


			<div class="row align-items-start">
				<div class="col">
					<label for="fname">Right Middle:</label>
					<input type="text" id="triannumber" name="fname" placeholder="Coach name..."
                    value="RM7"
                    />&emsp;
				</div>
				<div class="col">
					<label for="fname">Right Lower:</label>
					<input type="text" placeholder="berth type..."
                    value="RL8"
                    />&emsp;
				</div>
			</div>
            
		</div>
        <br/>
        <div class="container border">
        <Button variant="outline-info" size="lg" block onClick={() => handleadd()}>ADD TRAIN</Button>
        </div>



		
	</form>
</div>
   </div>    
    )
}
