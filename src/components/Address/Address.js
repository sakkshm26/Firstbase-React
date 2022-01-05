import React from 'react';
import './Address.css';
import logo from '../../assets/firstbase.png';

function Address() {
    return (
        <div className='address'>
            <div class="container">
                <img src={logo} />
                <div class="box">
                    <div id="id">
                        <div id="head">
                            <h4>Company Details-</h4>
                            <h5>
                                Delware.llc
                            </h5>
                            <p>20%</p>
                        </div>
                        <h2>Current Busines Address</h2>
                        <h6>What is the address of our business?</h6>
                    </div>

                    <div class="box2">
                        <div class="box3">
                            <form>
                                <label>Street Address<span id="span">*

                                </span> </label> <br />
                                <input type="text" required />
                            </form><br />
                            <form>
                                <label>
                                    Suite, etc.<span id="span">*
                                    </span>
                                </label><br />
                                <input type="text" />


                            </form>

                        </div>
                        <br />
                        <div class="box3">
                            <form>
                                <label>City<span id="span">*

                                </span> </label> <br />
                                <input type="text" required />
                            </form><br />
                            <form>
                                <label>
                                    County<span id="span">*

                                    </span>
                                </label><br />
                                <input type="text" />

                            </form>

                        </div>
                        <br />
                        <div class="box3">
                            <form>
                                <label>State<span id="span">*

                                </span> </label> <br />
                                <input type="text" required list="search" />
                                <datalist id="search">
                                    <option value="Alabama" />
                                    <option value="Alaska" />
                                    <option value="Arizona" />
                                    <option value="Arkansas" />
                                    <option value="California" />
                                    <option value="Colorado" />
                                    <option value="Delware" />
                                    <option value="District of Columbia" />
                                    <option value="Florida" />
                                    <option value="Georgia" />
                                    <option value="Hawaii" />
                                    <option value="Iadho" />
                                    <option value="Illinois" />
                                    <option value="Indiana" />
                                    <option value="Iowa" />
                                    <option value="Kansas" />
                                    <option value="Kentucky" />
                                    <option value="Louisiana" />
                                    <option value="Maine" />
                                    <option value="Maryland" />
                                    <option value="Massachusetts" />
                                    <option value="Michigan" />
                                    <option value="Minnesota" />
                                    <option value="Mississippi" />
                                    <option value="Missouri" />
                                    <option value="Montana" />
                                    <option value="Nebraska" />
                                    <option value="Nevada" />
                                    <option value="New Hampshire" />
                                    <option value="New jersey" />
                                    <option value="New Mexico" />
                                    <option value="New York" />
                                    <option value="North Carolina" />
                                    <option value="North DaKota" />
                                    <option value="Ohio" />
                                    <option value="Oklahoma" />
                                    <option value="oregon" />
                                    <option value="Pennsylvania" />
                                    <option value="Rhode Island" />
                                    <option value="South Carolina" />
                                    <option value="South DaKota" />
                                    <option value="Tennessee" />
                                    <option value="Texas" />
                                    <option value="Utah" />
                                    <option value="Vermont" />
                                    <option value="Virignia" />
                                    <option value="Washington" />
                                    <option value="West Virginia" />
                                    <option value="Wisconsin" />
                                    <option value="Wyoming" />

                                </datalist>

                            </form><br />
                            <form>
                                <label>

                                    ZIP/Postal Code<span id="span">*

                                    </span>
                                </label><br />
                                <input type="text" />
                            </form>

                        </div>

                    </div>

                    <div class="button1">

                        <p>&larr; Back</p>
                        <h3>Next</h3>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Address
