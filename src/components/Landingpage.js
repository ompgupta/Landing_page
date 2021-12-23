import React from 'react'
import "./style.css"
function Landingpage() {
    return (
        <div>
            <div className="main-container">
                <div className="container1">
                    <h1 className="main-heading">Investing for <br /> Everyone</h1>
                    <p className='cotent-para'>
                    Commission-free investing, plus the tools you need to put your money in motion. 
                    Sign up and get your first stock for free. Certain limitations and fees apply.
                    </p>
                    <button className='sign-btn'>Sign Up</button> <br />
                 <a id="notice" href='#'><i class="fas fa-exclamation-circle"></i>
                 Commissions & Free Stock Disclosures</a>
                </div>
                <div className="container2">
                <img src="images/img1.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Landingpage
