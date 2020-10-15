import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container py-5">
            <div className="row container justify-content-between " style={{margin:'0 auto',fontFamily:'poppins'}}>
                <div className="col-md-5">
                    <div>
                        <h1 style={{fontWeight:'600', margin:'20px 0'}}>Let us handle your project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <form action="">
                            <input type="email" name="email" placeholder="Your Email Address" id=""/>
                            <input type="text" name="name" placeholder="Your Name" id=""/>
                            <textarea name="message" id="" cols="30" placeholder="Message" rows="10"></textarea>
                            <button className="btn btn-primary" type="submit"> SEND US</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className="text-center mt-5">copyright Orange labs {(new Date()).getFullYear()}</p>
        </div>
    );
};

export default Footer;