import React from 'react';
import './thirteen.css'
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';

function Thirteen() {
    return (
        <div className='thirteen'>
            <div class="container">
        <img src={logo}/>
        <div class="box">
            <h4>Individual Owner Details · h LLC</h4>
            <h2>Percentage of Ownership</h2>
            <h6>Ownership is usually measured in proportion to capital contributions.</h6>
            <div class="box2">
                <p>Name</p>
                <div class="box3">
                    
                    <form>
                        <label>
                            Ownership Percentage*
                        </label><br/>
                        <input type="text" required/>
                        
                    

                    </form>
                </div>

            </div>



            <div class="button1">
                <NavLink to='/seven'>&larr;back</NavLink>
                <a className='next'>Next</a>



            </div>


        </div>
    </div>
        </div>
    )
}

export default Thirteen
