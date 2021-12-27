import React from 'react';
import logo from '../../assets/firstbase.png';
import './fourth2.css';
import { NavLink } from 'react-router-dom';

function Fourth2() {
    return (
        <div className='fourth2'>
            <div class="container">
                <img src={logo} />
                <div class="box">
                    <div id="id">
                        <h4>company details-Delware.llc</h4>
                        <h2>choose a company name</h2>
                        <h6>We'll check with the State of Delaware to see if your name is available.</h6>
                    </div>
                    {/* <h4>company details-Delware.llc</h4>
                    <h2>choose a company name</h2>
                    <h6>We'll check with the State of Delaware to see if your name is available.</h6>  */}
                    <div class="box2">
                        <div class="box3">
                            <form>
                                <label>Company Name<span id="span">*

                                </span> </label> <br />
                                <input type="text" required />
                            </form><br />
                            <form>
                                <label>
                                    Entity Ending<span id="span">*

                                    </span>
                                </label><br />
                                <input type="text" list="search" />
                                <datalist id="search">
                                    <option value="LLC" />
                                    <option value="L.L.C" />
                                    <option value="limited libiality company" />

                                </datalist>

                            </form>

                        </div>
                        <div class="box4">
                            <h5>Tips for Choosing a Name</h5>
                            <ul>
                                <li>
                                    <p>Avoid Restricted Words</p>
                                    <h6>Words like “Bank” or “School” are subject to approval by the state. Here’s a full list
                                        of <span id="span">restricted Words

                                        </span></h6>

                                </li>
                                <li>
                                    <p>Use English Words</p>
                                    <h6>Choosing a company name in a different language can be delayed and even denied by the
                                        state.</h6>

                                </li>
                                <li>
                                    <p>Do not start with “A” or “An” or “The”</p>
                                    <h6>The company name should not start with an article adjective, i.e. “A Business, Inc.” or
                                        “The Company, LLC”.</h6>


                                </li>
                                <li>
                                    <p>Avoid using Special Characters</p>
                                    <h6>The company name should not contain special characters. It can, but will be subject to
                                        state approval.</h6>

                                </li>
                                <li>
                                    <p>Consider Case-sensitivity</p>
                                    <h6>Uppercase and lowercase letters are considered. If you enter, “BusineSs”, the state will
                                        register as : “BusineSs, LLC”.</h6>

                                </li>
                                <li>
                                    <p>Double-check Spelling</p>
                                    <h6>Make sure the company name is spelled correctly.</h6>
                                </li>
                            </ul>


                        </div>

                    </div>



                    <div class="button1">

                        <NavLink to='/fourth'>&larr;back</NavLink>

                        <NavLink className='next' to='/seven'>Next</NavLink>



                    </div>


                </div>
            </div>
        </div>
    )
}

export default Fourth2
