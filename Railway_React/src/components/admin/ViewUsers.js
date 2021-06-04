import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import {
   
    Link
  } from "react-router-dom";
function ViewUsers() {
    const [users, setUsers]= useState([])
    useEffect(()=>{
      axios.get("http://localhost:8082/api/userservice/getUserDetails")
      .then((res)=>{
        console.log(res)
        setUsers(res.data)
      }).catch((error) => {
          console.error(`Error :  ${error} : No users Available"`);
        })
  
  
  },[])
      return (
          <div>
          
              users
          </div>
      )
  }
  

export default ViewUsers
