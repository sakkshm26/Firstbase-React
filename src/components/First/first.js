import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './first.css';
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';
import Loading from '../loading';

function First() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    /* const data = [
        { "id": 1, "name": "Private Limited", "description": "This is most suited for startups planning to raise fund" },
        { "id": 2, "name": "Limited Liability Partnership", "description": "This is for family business. Cannot raise funds." },
        { "id": 3, "name": "Foreign subsidiary", "description": "This is for foreign companies planning to setup operations in India" },
        { "id": 4, "name": "Proprietor", "description": "This is the easiest way to start the business for an individual" }
    ]; */

    const select = (id) => {
        const item = document.getElementsByClassName('selected')[0];
        if(item!=undefined) {
            item.classList.remove('selected');
        }
        document.getElementById(`${id}`).classList.add('selected');
    }

    useEffect(() => {
        axios.get('http://3.110.143.87/index.php?r=jprimary/allcompanytypes').then(response => {
            const item = response.data.company_types;
            setData(item);
            // console.log(response.data.com);
            setLoading(false);
        }).catch('Error');
    }, [])

    const ShowCompanies = () => {
        return (
            data.map(company => {
                let x = company.id;
                return (
                    <div id={company.id} className="first_selector" onClick={() => select(x)}>
                        <h1>{company.name}</h1>
                        <p>{company.description}</p>
                    </div>
                )
            })
        )
    }

    const handleSubmit = () => {
        const item = document.getElementsByClassName('selected')[0].firstChild.textContent;
        localStorage.setItem('CompanyType', '1');
    }

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
                    <p>0%</p>
                </div>

                <div class="company_heading">
                    <h2>Select a Company Type  </h2>
                </div>
                <div class="compnay_subheading">
                    <h3>What type of company is best for your business? </h3>
                </div>

                <div class="selectors">
                    {loading ? <Loading /> : <ShowCompanies />}
                    {/* <div class="first_selector">
                        <h1>LLC </h1>
                        <p>Companies organized under an Operating Agreement, a contract between members specifying how the business will operate and how expenses and profits will be split. </p>
                    </div> */}
                    {/* <div class="second_selector">
                        <h1>C-Corporation </h1>
                        <p>Companies structured with the idea that control and ownership can be separate. Owners, called shareholders, may or may not be involved in the day-to-day operations.  </p>
                    </div> */}
                    <div class="link">
                        <a href=""><p>Not sure which one?</p></a>
                    </div>

                    <div class="buttons">
                        <div class="next_button">
                            <NavLink to='/second' onClick={() => handleSubmit()}><button>Next</button></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default First
