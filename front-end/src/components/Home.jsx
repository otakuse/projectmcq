import React from 'react'
import {Link} from "react-router-dom";   
import './registration.css'
function Home() {
    return (
        <div>
            
            <Link to="/admin">
            <button>ADMIN</button></Link>
            <Link to="/student">
            <button>STUDENT</button></Link>
            
        </div>
    )
}

export default Home
