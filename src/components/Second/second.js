import React, { useState, useEffect } from 'react';
import './second.css';
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';
import Loading from '../loading';

function Second() {

    const [loading, setLoading] = useState(false);

    const data = [
        { "id": 1, "name": "Delhi" },
        { "id": 2, "name": "Punjab" },
        { "id": 3, "name": "Kerala" }
    ];

    const ShowStates = () => {
        return (
            data.map(state => {
                return (
                    <option id={state.id}>{state.name}</option>
                )
            })
        )
    }

    const select = (id) => {
        const item = document.getElementsByClassName('selected')[0];
        if(item!=undefined) {
            item.classList.remove('selected');
        }
        document.getElementById(`${id}`).classList.add('selected');
    }

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

                    {/* <label for="cars">Choose the state:</label>
                    <select name="state" id="state">
                        {loading ? <Loading /> : <ShowStates />}
                    </select> */}

                    <div class="first_selector" id='1' onClick={() => select(1)}>
                        <h1>Delaware  </h1>
                        <p>The gold standard for startups planning to raise capital. A majority of Fortune 500 companies are incorporated in Delaware.  </p>

                    </div>
                    <div className="second_selector" id='2' onClick={() => select(2)}>
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
