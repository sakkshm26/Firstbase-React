import React from 'react';
import "./nine.css";
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';

function Nine() {
    return (
        <div className='nine'>
        <div className='container'>
            <img src={logo} />
            <div class="box">
                <h4>Individual Owner Details · h LLC</h4>
                <h2>Individual Owner Details</h2>
                <h6>How many owners and parent companies will own h, LLC?</h6>
                <div class="box2">
                    <div class="box3">
                        <form>
                            <label>
                                Individual Owners<span id="span">
                                    *
                                </span>
                            </label><br />
                            <input type="text" list="search" />
                            <datalist id="search">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>


                            </datalist>

                        </form>
                    </div>
                    <h5>Will a percentage of the company be owned by another company?</h5>
                </div>



                <div class="button1">
                    <NavLink to='/seven'>&larr;back</NavLink>
                    <NavLink className='next' to='/thirteen'>Next</NavLink>



                </div>


            </div>
        </div>
        </div>
    )
}

export default Nine
