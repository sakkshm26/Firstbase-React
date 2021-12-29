import React from 'react';
import './seven.css';
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';

function Seven() {
    return (
        <div className='seven'>
        <div className="container">
            <img src={logo} />
            <div class="box">
                <h4>company details-Delware.llc</h4>
                <h2>Select an Industry</h2>
                <h6>What kind of business are you starting?</h6>
                <div class="box2">
                    <div class="box3">
                        <form>
                            <label>
                                Industry<span id="span">*</span>
                            </label><br />
                            <input type="text" list="search" />
                            <datalist id="search">
                                <option value="B2B software"/>
                                <option value="B2C software"/>
                                <option value="consultant/contractor"/>
                                <option value="E-commerce"/>
                                <option value="Education"/>


                            </datalist>

                        </form>
                    </div>

                </div>



                <div class="button1">
                    <NavLink to='/five'>&larr;back</NavLink>
                    <NavLink className='next' to='/thirteen'>Next</NavLink>
                </div>


            </div>
       </div>
       </div>
    )
}

export default Seven
