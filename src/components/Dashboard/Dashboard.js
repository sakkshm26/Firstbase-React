import React from 'react';
import './Dashboard.css';
import logo from '../../assets/firstbase.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion, faCog, faAngleDown, faSignOutAlt, faExclamationCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav, NavDropdown, FormControl, Button, Offcanvas, Row, Col, Form, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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
                            <li>Documents</li>
                            <li>Invoice Creator</li>
                            <li>Legal Templates</li>
                            <li>Compliance Tracker</li>
                            <li>Rewards</li>
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
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
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
                                <Nav.Link href="#action2">Documents</Nav.Link>
                                <Nav.Link href="#action2">Invoice Creator</Nav.Link>
                                <Nav.Link href="#action2">Legal Templates</Nav.Link>
                                <Nav.Link href="#action2">Compliance Tracker</Nav.Link>
                                <Nav.Link href="#action2">Rewards</Nav.Link>
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
                        {/* <div className='sign-out'>
                            <FontAwesomeIcon icon={faSignOutAlt} id='signout-icon' />
                            <p>Sign Out</p>
                        </div> */}
                    </div>
                </div>
                <div className='main-view'>
                    <h3>Good morning,<span>Rohit!</span></h3>
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
                    {/* <div className='company-details'>
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
                    <div className='finish-app'>
                        <NavLink to='/payment'><button>Finish Application</button></NavLink>
                    </div> */}
                    <div className='rewards'>
                        <h3 className='rewards'>Rewards</h3>
                        <p>Curated library of startup offers valued more than $25k to support founders like you.</p>
                    </div>
                    <Container fluid className="p-3">
                        <Row>
                            <Form className='d-flex'>
                                <Col xs={1} className='search'>
                                    <button type="button" className="btn btn-secondary" >
                                        <svg width="15px" height="15px">
                                            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                                        </svg>
                                    </button>
                                </Col>
                                <Col xs={5} className='input'>
                                    <Form.Control placeholder="Search" className='text-dark' />
                                </Col>
                            </Form>
                        </Row>
                    </Container>
                    <div className='cards'>
                        <div className='section'>
                            <h2>Stripe</h2>
                            <div className='card-text'>
                                <h4>Stripe</h4>
                                <p>The world's most powerful and easy to use APIs</p>
                            </div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className='section'>
                            <h2>deel.</h2>
                            <div className='card-text'>
                                <h4>deel</h4>
                                <p>3 months free for contractors and 20% off employees for 1...</p>
                            </div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
