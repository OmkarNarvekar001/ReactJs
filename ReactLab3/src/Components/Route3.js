import React from 'react'
import Nav from './Nav'
function Route3() {
    return (
        <>
            <div>
                <Nav />
                <h1><center>Contact us</center></h1>
                <form>
                    <center>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                <br />
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                <br />
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">India</option>
                    <option value="usa">USA</option>
                </select>
                </center>
                </form>
                
                <br />
            </div>
        </>
    )
}

export default Route3

