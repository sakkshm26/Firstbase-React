import React from 'react';
import './Dashboard.css';
import logo from '../../assets/firstbase.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion, faCog, faAngleDown, faSignOutAlt, faExclamationCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav, NavDropdown, FormControl, Button, Offcanvas } from 'react-bootstrap';

function Dashboard() {
    return (
        <div className='dashboard'>
            <nav className='nav-bar'>
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
            </nav>
            <Navbar bg="black" className='mobile-navbar' expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start">
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">                    
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Gigmo Solutions Inc.</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Incorporated</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Add a new company
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action1">Dashboard</Nav.Link>
                                <Nav.Link href="#action2">Details</Nav.Link>
                                <Nav.Link href="#action2">Rewards</Nav.Link>
                                <Nav.Link href="#action2">Documents</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
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
                            <FontAwesomeIcon icon={faAngleDown} id='arrow-icon' />
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
                        <FontAwesomeIcon icon={faExclamationCircle} id='excl-icon' />
                        <p>IMPORTANT: Must complete all tasks for timely and accurate processing of your company's EIN and bank account.</p>
                    </div>
                    <div className='company-details'>
                        <div className='box'>
                            <h4>Responsible Party</h4>
                            <p>The person responsible for forming Gigmo Solutions Inc.</p>
                            <div className='task'>
                                <p>Complete Task</p>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Business Details</h4>
                            <p>Provide some additional information about Gigmo Solutions Inc.</p>
                            <div className='task'>
                                <p>Complete Task</p>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Board of Directors</h4>
                            <p>Appoint the officers for forming Gigmo Solutions Inc.</p>
                            <div className='task'>
                                <p>Complete Task</p>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Officers</h4>
                            <p>Appoint the officers for forming Gigmo Solutions Inc.</p>
                            <div className='task'>
                                <p>Complete Task</p>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Puneet Shareholder Details</h4>
                            <p>Provide some basic information about the individual shareholder.</p>
                            <div className='task'>
                                <p>Complete Task</p>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Puneet's Ownership</h4>
                            <p>The number of shares Puneet will receive from Gigmo Solutions Inc.</p>
                            <div className='task'>
                                <p>Complete Task</p>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
