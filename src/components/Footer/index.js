import React from 'react'
import {RiTwitterFill, RiFacebookFill, RiLinkedinFill} from 'react-icons/ri'
import {BiChevronRight} from 'react-icons/bi';

export default function index1() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3>Lamas Group</h3>
                                <p>
                                    Pipalbot, Boudha <br/>
                                    Kathmandu, Nepal<br/><br/>
                                    <strong>Phone:</strong> +977-9841504552, +977-9813955307<br/>
                                    <strong>Email:</strong> lamasgroup@gmail.com<br/>
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="me-2"><RiTwitterFill/></a>
                                    <a href="#" className="me-2"><RiFacebookFill/></a>
                                    <a href="#" className="me-2"><RiLinkedinFill/></a>
                                </div>
                            </div>
                        </div>

                        <div className="offset-lg-1 col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><span><BiChevronRight/></span> <a href="#">Home</a></li>
                                <li><span><BiChevronRight/></span> <a href="#">About us</a></li>
                                <li><span><BiChevronRight/></span> <a href="#">Services</a></li>
                                <li><span><BiChevronRight/></span> <a href="#">FAQ</a></li>
                                <li><span><BiChevronRight/></span> <a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="offset-lg-1 col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Subscribe us to get notifications and be updated about us.</p>
                            <form action="" method="">
                                <input type="email" name="email"/>
                                <input type="submit" value="Subscribe"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                &copy; Copyright <strong><span>Lamas Group Estate</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                Designed by <a href="https://zoektech.com/">Zoek Tech</a>
                </div>
            </div>
        </footer>           
    )
}