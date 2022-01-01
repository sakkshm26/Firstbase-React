import React from 'react';
import './Dashboard.css';
import logo from '../../assets/firstbase.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion, faCog, faAngleDown, faSignOutAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='nav-bar'>
                <div className='top'>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <div className='nav-links'>
                        <ul>
                            <li>Dashboard</li>
                            <li>Details</li>
                            <li>Rewards</li>
                            <li>Documents</li>
                        </ul>
                    </div>
                </div>
                <div className='bottom'>
                    <ul>
                        <li><FontAwesomeIcon icon={faPlus} className='icon-1' />New Company</li>
                        <li><FontAwesomeIcon icon={faCog} className='icon-2' />Settings</li>
                        <li><FontAwesomeIcon icon={faQuestion} className='icon-3' />Help</li>
                    </ul>
                </div>
            </div>
            <div className='main-area'>
                <div className='main-top'>
                    <select id="select-company">
                        <option value="Gigmo Solutions Inc.">Gigmo Solutions Inc.</option>
                        <option value="Incorporated">Incorporated</option>
                    </select>
                    <div>
                        <div className='profile'>
                            <div className='profile-photo'>
                                <span>R</span>
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} id='arrow-icon'/>
                        </div>
                        <div className='sign-out'>
                            <FontAwesomeIcon icon={faSignOutAlt} id='signout-icon' />
                            <p>Sign Out</p>
                        </div>
                    </div>
                </div>
                <div className='main-view'>
                    <h3><span>Good morning,</span> Rohit!</h3>
                    <div className='steps'>
                        <div className='step-1'>
                            <div className='step-top'>
                                <h5>STEP 1</h5>
                                <p>In Progress</p>
                            </div>
                            <h4>Company Formation</h4>
                            <p>2 to 7 business days on average.</p>
                        </div>
                        <div className='step-2'>
                            <div className='step-top'>
                                <h5>STEP 2</h5>
                                <p>In Progress</p>
                            </div>
                            <h4>Post-formation package</h4>
                            <p>2 to 7 business days on average.</p>
                        </div>
                        <div className='step-3'>
                            <div className='step-top'>
                                <h5>STEP 3</h5>
                                <p>In Progress</p>
                            </div>
                            <h4>Tax ID (EIN)</h4>
                            <p>20 to 30 business days once SS-4 is signed.</p>
                        </div>
                        <div className='step-4'>
                            <div className='step-top'>
                                <h5>STEP 4</h5>
                                <p>Pending</p>
                            </div>
                            <h4>BANK ACCOUNT</h4>
                            <p>2 to 7 business days after Tax ID assigned.</p>
                        </div>
                    </div>
                    <div className='warning'>
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <p>IMPORTANT: Must complete all tasks for timely and accurate processing of your company's EIN and bank account.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
