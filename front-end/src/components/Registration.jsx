import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios';

function Registration() {
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState(0);
    const [email,setEmail]=useState("");
    const [enroll_no,setEnroll_no]=useState("");
    const nameChange=(e)=>{
        setName(e.target.value) 
    }
    const mobileChange=(e)=>{
        setMobile(e.target.value) 
    }
    const enrollChange=(e)=>{ 
        setEnroll_no(e.target.value) 
    }
    const emailChange=(e)=>{
        setEmail(e.target.value) 
    }
    const saveData=()=>{
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/registration/createStudent',
            data: {
              name: name,
              email: email,
              mobile:mobile,
              enroll_no:enroll_no
            }
          })
          .then((response)=>{
            console.log(response)
          });
    }
    return (
            <Link to="/registration">
                <div className='regCs'>
                <form id='new' action="">
                    <label id='regLab' htmlFor="name">STUDENT NAME:</label><br />
                    <input id='regId' type="text" id="name" name="name" onChange={nameChange}/><br /><br />

                    <label id='regLab' htmlFor="mobile">MOBILE:</label><br />
                    <input id='regId' type="number" name="mobile" id="mobile" onChange={mobileChange}/><br /><br />

                    <label id='regLab' htmlFor="enroll_no">ENROLL_NUMBER:</label><br />
                    <input id='regId' type="text" name="enroll_no" id="enroll_no" onChange={enrollChange}/><br /><br />

                    <label id='regLab' htmlFor="email">EMAIL:</label><br />
                    <input id='regId' type="email" name="email" id="email" onChange={emailChange}/><br /><br />

                    <button onClick={saveData}>REGISTER</button>
                </form>
                </div>
            </Link>
    )
}

export default Registration
