import React from 'react';
import logo from '../../assets/firstbase.png';
import './five.css';
import { NavLink } from 'react-router-dom';

function Five() {
    return (
        <div className='five'>
            <div className="container">
                <img className="logo" src={logo} />
                <div className="box">
                    <div id="id">
                        <div id="head">
                            <h4>Company Details-</h4>
                            <h5>
                                Delware.llc
                            </h5>
                            <p>20%</p>
                        </div>
                        <h2>Choose a Company name</h2>
                        <h6>We'll check with the State of Delaware to see if your name is available.</h6>
                    </div>
                    {/* <h4>company details-Delware.llc</h4>
                    <h2>choose a company name</h2>
                    <h6>We'll check with the State of Delaware to see if your name is available.</h6>  */}
                    <div className="box2">
                        <div className="box3">
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
                                <input type="text" list="search" value={localStorage.getItem('CompanyType') ? localStorage.getItem('CompanyType') : ''} />
                                <datalist id="search">
                                    {localStorage.getItem('CompanyType') ? localStorage.getItem('CompanyType') : <div>
                                        <option value="LLC" />
                                        <option value="L.L.C" />
                                        <option value="limited libiality company" />
                                    </div>}
                                </datalist>

                            </form>

                        </div>
                        <div className="box4">
                            <h5>Tips for Choosing a Name</h5>
                            <ul>
                                <li>
                                    <p>Use 2 words preferably</p>
                                    <h6>1st the unique name and 2nd the activity. For example - Tata Motors Pvt Ltd</h6>

                                </li>
                                <li>
                                    <p>Avoid Restricted Words</p>
                                    <h6>Words like "Finance", "Bank" or "School" are subject to approval by the state. Here's a full list of restricted words.
                                    </h6>

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
                                {/* <li>
                                    <p>Consider Case-sensitivity</p>
                                    <h6>Uppercase and lowercase letters are considered. If you enter, “BusineSs”, the state will
                                        register as : “BusineSs, LLC”.</h6>

                                </li>
                                <li>
                                    <p>Double-check Spelling</p>
                                    <h6>Make sure the company name is spelled correctly.</h6>
                                </li> */}
                            </ul>


                        </div>

                    </div>



                    <div className="button1">

                        <NavLink to='/third'>&larr; Back</NavLink>

                        <NavLink className='next' to='/seven'>Next</NavLink>



                    </div>


                </div>
            </div>
        </div>
    )
}

export default Five
