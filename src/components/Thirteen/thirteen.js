import React from 'react';
import './thirteen.css'
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';

function Thirteen() {
    return (
        <div className='thirteen'>
            <div className="container">
                <img src={logo} />
                <div className="box">
                    <div id="head">
                        <h4>Individual Owner Details·</h4>
                        <h5>
                            W.LLC
                        </h5>
                        <p>20%</p>
                    </div>
                    <h2>Percentage of Ownership</h2>
                    <h6>Ownership is usually measured in proportion to capital contributions.</h6>
                    <div className="box2">
                        <p>Name</p>
                        <div className="box3">

                            <form>
                                <label>
                                    Ownership Percentage*
                                </label><br />
                                <input type="text" required />



                            </form>
                        </div>
                        <br />
                        <div className="scale">
                            <hr />
                            <p>0%</p>

                        </div>

                    </div>



                    <div className="button1">
                        <NavLink to='/fourth'>&larr; back</NavLink>
                        <NavLink to='/fourteen' className='next'>Next</NavLink>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Thirteen
