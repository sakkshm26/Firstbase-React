import React from 'react';
import './second.css';
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';

function Second() {
    return (
        <div className='second'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="container">

                <div className="company_type flex">
                    <p>Company Type</p>
                </div>

                <div className="percentage flex">
                    <p>10%</p>
                </div>

                <div className="company_heading">
                    <h2>Select a Registration State   </h2>
                </div>
                <div className="compnay_subheading">
                    <h3>Which state do you prefer to register your business in?  </h3>
                </div>

                <div className="selectors">
                    <div class="first_selector">
                        <h1>Delaware  </h1>
                        <p>The gold standard for startups planning to raise capital. A majority of Fortune 500 companies are incorporated in Delaware.  </p>

                    </div>
                    <div className="second_selector">
                        <h1>Wyoming </h1>
                        <p>Companies due to low management costs, flexibility, and an easy to manage structure.   </p>
                    </div>
                    <div className="link">
                        <a href="#"> <p>Which state is right for me?</p></a>
                    </div>


                    <div className="buttons_two">
                        <div class="back_button">
                            <NavLink to='/'><a href="#">&larr;Back</a></NavLink>

                        </div>
                        <div className="next_button">
                            <NavLink to='/third'><button>Next</button></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Second
