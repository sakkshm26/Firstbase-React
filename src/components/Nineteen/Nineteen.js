import React from 'react';
import './Nineteen.css'
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';

function Nineteen() {
    return (
        <div className='thirteen'>
            <div className="container">
                <img src={logo} />
                <div className="box">
                    <div id="head">
                       
                    </div>
                    <h2 className="mt-5">Email Sent</h2>
                    <h6 className="mt-2">Confirmation email has been sent to your registered email</h6>


                    <div className="button1">
                  
                    <NavLink to='/fourteen'>Didnt received email ?</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nineteen
