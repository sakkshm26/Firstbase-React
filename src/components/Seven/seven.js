import React, { useEffect, useState } from 'react';
import './seven.css';
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Seven = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        if (data.length === 0)
            axios.get('http://3.110.143.87/index.php?r=jprimary/allindustry').then(response => {
                setData(response.data.industries);
                console.log(response.data.industries)
            }).catch('Error');
    })

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

                                    {
                                        data.map((industry, index) =>
                                            <option key={index} value={industry.name} />
                                        )
                                    }

                                    {/* <option value="B2B software" />
                                    <option value="B2C software" />
                                    <option value="consultant/contractor" />
                                    <option value="E-commerce" />
                                    <option value="Education" /> */}


                                </datalist>

                            </form>
                        </div>

                    </div>



                    <div class="button1">
                        <NavLink to='/five'>&larr;back</NavLink>
                        <NavLink className='next' to='/nine'>Next</NavLink>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Seven