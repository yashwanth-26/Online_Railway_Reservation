import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
   
    Link
  } from "react-router-dom";
function ViewTrains() {
  const history=useHistory()
  const [trains, settrains]= useState([])
  const [id, setId]= useState("")
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = () => {
    setOpen(false);
    let value=id;
    axios.delete("http://localhost:8081/admin/api/trainDetailsService/deleteTrainByNumber/"+value)
    .then((res)=>{
      console.log(res)
        
    }).catch((error) => {
        console.error(`Error :  ${error} : No Train Available"`);
      })
  };
  useEffect(()=>{
    axios.get("http://localhost:8081/all/api/trainDetailsService/getTrainDetails")
    .then((res)=>{
      console.log(res)
        settrains(res.data)
       
    }).catch((error) => {
        console.error(`Error :  ${error} : No Train Available"`);
      })


},[])
// const deleteID =(id) =>{
  
//   axios.delete("http://localhost:8081/admin/api/trainDetailsService/deleteTrainByNumber/"+id)
//   .then((res)=>{
//     console.log(res)
      
//   }).catch((error) => {
//       console.error(`Error :  ${error} : No Train Available"`);
//     })
//   //  history.push(`/process-booking/${type}/${id}`)
// }
const updateTrain =(id) =>{
  // console.log(id);
  // axios.delete("http://localhost:8081/admin/api/trainDetailsService/deleteTrainByNumber/"+id)
  // .then((res)=>{
  //   console.log(res)
      
  // }).catch((error) => {
  //     console.error(`Error :  ${error} : No Train Available"`);
  //   })
    history.push(`/update-train/${id}`)
}
    return (
        <div >
            
            <div className="tab">
            <h2 className="h1tag">ALL TRAINS</h2>
            <div className="border">
            <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                   <th>Train No</th>
                   <th>Train Name</th>
                   <th>Train From</th>
                   <th>Train To</th>
                   <th>Delete</th>
                   <th>Update</th>
               </tr>
           </thead>
           <tbody>
                       {
                                trains.map(
                                    train =>
                                    <tr key={train.train_id}>
  
                                         <td>{train.trainNumber}</td>
                                         <td>{train.trainName}</td>
                                         <td>{train.trainFrom}</td>
                                         <td>{train.trainTo}</td>
                                         <td><button class="btn btn-danger" onClick={() =>handleClickOpen(train.id)} ><i class="fas fa-trash"> Delete</i></button></td>
                                         <td><button class="btn btn-info" onClick={() =>updateTrain(train.id)}><i class="far fa-edit"> Update</i></button></td>
                                  </tr>
                                )
                            }
       </tbody>
</Table>
<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Train?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          If you wish to permanently delete train, No longer train data is available. ... 
          Otherwise cancel .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Delete
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
<br /><br /><br /><br /><br /><br /><br />
</div>
        </div>
        </div>
    )
}

export default ViewTrains
