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
        if (item != undefined) {
            item.classList.remove('selected');
        }
        document.getElementById(`${id}`).classList.add('selected');
    }

    const handleSubmit = () => {
        console.log('YES')
        // const item = document.getElementsByClassName('selected')[0].firstChild.textContent;
        localStorage.setItem('State', '1');
        console.log(localStorage.getItem('State'));
        /* try{
            console.log('YES')
        // const item = document.getElementsByClassName('selected')[0].firstChild.textContent;
        localStorage.setItem('State', '1');
        console.log(localStorage.getItem('State'));
        }catch(error){
            console.log(error);
        } */
    }

    /* useEffect(() => {
        axios.get('http://3.110.143.87/index.php?r=jprimary/allcompanytypes').then(response => {
            const item = response.data.company_types;
            setData(item);
            // console.log(response.data.com);
            setLoading(false);
        }).catch('Error');
    }, []) */

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
                    <p>25%</p>
                </div>

                <div className="company_heading">
                    <h2>Select a Registration State   </h2>
                </div>
                <div className="compnay_subheading">
                    <h3>Which state do you prefer to register your business in?  </h3>
                </div>

                {/*  <div className="selectors"> */}

                {/* <label for="cars">Choose the state:</label>
                    <select name="state" id="state">
                        {loading ? <Loading /> : <ShowStates />}
                    </select> */}

                {/* <div class="first_selector" id='1' onClick={() => select(1)}>
                        <h1>Delaware  </h1>
                        <p>The gold standard for startups planning to raise capital. A majority of Fortune 500 companies are incorporated in Delaware.  </p>

                    </div>
                    <div className="second_selector" id='2' onClick={() => select(2)}>
                        <h1>Wyoming </h1>
                        <p>Companies due to low management costs, flexibility, and an easy to manage structure.   </p>
                    </div> */}
                <div class="main">
                    <form action="">
                        <div class="select_main">
                            <select class="all_input select_main">
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CH">Chandigarh</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="GA">Goa</option>
                                <option value="GJ">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="LA">Ladakh</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PY">Puducherry</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="WB">West Bengal</option>
                            </select>
                        </div>
                    </form>

                    <div className="link">
                        <a href="#"> <p>Which state is right for me?</p></a>
                    </div>


                    <div className="buttons_two">
                        <div class="back_button">
                            <NavLink to='/'><a href="#">&larr;Back</a></NavLink>

                        </div>
                        <div className="next_button">
                            <NavLink to='/third' ><button onClick={() => handleSubmit()}>Next</button></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Second
