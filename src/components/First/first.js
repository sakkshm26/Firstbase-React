import React from 'react';
import './first.css';
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';

function First() {
    return (
        <div className='first'>
            <div class="logo">
                <img src={logo} alt="" />
            </div>

            <div class="container">

                <div class="company_type flex">
                    <p>Company Type</p>
                </div>

                <div class="percentage flex">
                    <p>10%</p>
                </div>

                <div class="company_heading">
                    <h2>Select a Company Type  </h2>
                </div>
                <div class="compnay_subheading">
                    <h3>What type of company is best for your business? </h3>
                </div>

                <div class="selectors">
                    <div class="first_selector">
                        <h1>LLC </h1>
                        <p>Companies organized under an Operating Agreement, a contract between members specifying how the business will operate and how expenses and profits will be split. </p>

                    </div>
                    <div class="second_selector">
                        <h1>C-Corporation </h1>
                        <p>Companies structured with the idea that control and ownership can be separate. Owners, called shareholders, may or may not be involved in the day-to-day operations.  </p>
                    </div>
                    <div class="link">
                        <a href=""><p>Not sure which one?</p></a>
                    </div>

                    <div class="buttons">
                        <div class="next_button">
                            <NavLink to='/second'><button>Next</button></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default First
