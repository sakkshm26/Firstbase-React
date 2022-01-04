import React from 'react';
import "./Fourteen.css";
import logo from '../../assets/firstbase.png';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../../components/Fourteen/SignUpModal.js'

function Fourteen() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='fourteen'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='main-card'>
                <div className='card-header'>
                    <p>Finish Application · <span className='text-white'>Fanime LLC</span></p>
                    <p className='text-red'>100%</p>
                </div>
                <div className='card-title'>
                    <h2>Review Company Application</h2>
                </div>
                <div className='card-subtitle'>
                    <p>Make sure all the information is accurate before finishing the application.</p>
                </div>
                <div className='card-content'>
                    <form>
                        <div className='form-content'>
                            <div className='form-header'>
                                <p>Fields marked with an asterisk (<span className='text-red'>*</span>) cannot be changed after payment. Please make sure the data is correct.</p>
                            </div>
                            <div className='contact'>
                                <div className='column-1'>
                                    <p>Contact Info</p>
                                    <p><span className='text-red'>Edit</span></p>
                                </div>
                                <div className='column-2'>
                                    <p>Name: <span>Makarand Sunil Warade</span></p>
                                    <p>Email: <span>mkarandsunilwarade@gmail.com</span></p>
                                    <p>Phone Number: <span>9999999999</span></p>
                                    <p>Residency: <span>India</span></p>
                                </div>
                            </div>
                            <div className='company'>
                                <div className='column-1'>
                                    <p>Company</p>
                                    <p><span className='text-red'>Edit</span></p>
                                </div>
                                <div className='column-2'>
                                    <p>Name: <span>Fanime LLC</span></p>
                                    <p>State: <span>Delaware</span></p>
                                    <p>Address: <span>xyz</span></p>
                                    <p>Industry: <span>BTB Software</span></p>
                                    <p>Product Description: <span>xyz</span></p>
                                    <p>Business Description: <span>xyz</span></p>
                                </div>
                            </div>
                            <div className='buttons'>
                                <button className='back-button'><NavLink to='/thirteen'>&larr;Back</NavLink></button>

                                {/* <button className='next-button'><NavLink to='/dashboard'>Next</NavLink></button> */}


                                <Button className='next-button' onClick={() => setModalShow(true)}>
                                    Finish
                                </Button>

                            </div>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Fourteen
