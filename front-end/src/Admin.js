import React from 'react'
import {Link} from 'react-router-dom';
function Admin() {
    return (
        <div id='homeCs'>
            <Link to="/registration">
                <button >REGISTRATION</button>
            </Link>
            <Link to="/questionbank">
                <button >QUESTIONS</button>
            </Link>
        </div>
    )
}

export default Admin
