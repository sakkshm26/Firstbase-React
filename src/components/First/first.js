import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './first.css';
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';
import Loading from '../loading';

function First({location}) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [id, setId] = useState();

    /* const data = [
        { "id": 1, "name": "Private Limited", "description": "This is most suited for startups planning to raise fund" },
        { "id": 2, "name": "Limited Liability Partnership", "description": "This is for family business. Cannot raise funds." },
        { "id": 3, "name": "Foreign subsidiary", "description": "This is for foreign companies planning to setup operations in India" },
        { "id": 4, "name": "Proprietor", "description": "This is the easiest way to start the business for an individual" }
    ]; */

    const select = (id) => {
        const item = document.getElementsByClassName('selected')[0];
        if (item !== undefined) {
            item.classList.remove('selected');
        }
        document.getElementById(`${id}`).classList.add('selected');
        setId(id);
    }

    useEffect(() => {
        axios.get('https://admin.businesssetup.in/index.php?r=jprimary/allcompanytypes').then(response => {
            const item = response.data.company_types;
            setData(item);
            // console.log(response.data.com);
            setLoading(false);
        }).catch('Error');

        /* const params = new URLSearchParams(location.search);

        const q = params.get('q');
        console.log(q); */

    }, [])

    const ShowCompanies = () => {
        return (
            data.map(company => {
                let x = company.id;
                return (
                    <div id={company.id} key={company.id} className="first_selector" onClick={() => select(x)}>
                        <h1>{company.name}</h1>
                        <p>{company.description}</p>
                    </div>
                )
            })
        )
    }

    const handleSubmit = () => {
        const item = document.getElementsByClassName('selected')[0].firstChild.textContent;
        localStorage.setItem('CompanyType', id);

        /* async function companyID() {
            const response = await axios({
                method: 'post',
                // url: BASE_URL + 'juser/getinvolved',
                url: 'https://admin.businesssetup.in/index.php?r=jprimary/fetchcompanydata',
                data: id,
            });

            if (!response.ok) {
                console.log('Error occured in response2');
            }
            console.log(response);
        }

        companyID(); */
    }

    return (
        <div className='first'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="container">

                <div className="company_type flex">
                    <p>Company Type</p>
                </div>

                <div className="percentage flex">
                    <p>0%</p>
                </div>

                <div className="company_heading">
                    <h2>Select a Company Type  </h2>
                </div>
                <div className="compnay_subheading">
                    <h3>What type of company is best for your business? </h3>
                </div>

                <div className="selectors">
                    {loading ? <Loading /> : <ShowCompanies />}
                    {/* <div className="first_selector">
                        <h1>LLC </h1>
                        <p>Companies organized under an Operating Agreement, a contract between members specifying how the business will operate and how expenses and profits will be split. </p>
                    </div> */}
                    {/* <div className="second_selector">
                        <h1>C-Corporation </h1>
                        <p>Companies structured with the idea that control and ownership can be separate. Owners, called shareholders, may or may not be involved in the day-to-day operations.  </p>
                    </div> */}
                    <div className="link">
                        <a href=""><p>Not sure which one?</p></a>
                    </div>

                    <div className="buttons">
                        <div className="next_button">
                            <NavLink to='/second' onClick={() => handleSubmit()}><button>Next</button></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default First
