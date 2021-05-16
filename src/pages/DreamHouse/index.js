import React from 'react'
import './index.css'
import {FaUser,FaPhoneAlt} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import HouseBox from '../../assets/houseBox.jpg'

export default function index() {
    return (
        <div>
            <section className="details-banner"></section>

            <section className="container mb-5">
                <div className="row first-section">
                    <div className="col-md-8 p-0 m-0">
                        <legend>HOME</legend>
                        <p>Let's build your dream house</p>
                        <form id="dreamHouseStart">
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text" id="addon-wrapping"><FaUser size='1.5em'/></span>
                                <input type="text" className="form-control p-3" placeholder="Full Name" aria-label="Fullname" aria-describedby="addon-wrapping" required/>
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text" id="addon-wrapping"><FaPhoneAlt size='1.5em'/></span>
                                <input type="text" className="form-control p-3" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="addon-wrapping" required/>
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text" id="addon-wrapping"><IoIosMail size='2em'/></span>
                                <input type="email" className="form-control p-3" placeholder="Email Address" aria-label="Email Address" aria-describedby="addon-wrapping" required/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 p-0 m-0">
                        <img src={HouseBox} alt="houseBoxImg"/>
                        <button form='dreamHouseStart' type="submit" className="btn mt-5 btnStart"><span>START</span></button>
                    </div>
                </div>
            </section>
        </div>
    )
}
