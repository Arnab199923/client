import React from 'react'
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa'
import "./Newsletter.scss";

const Newsletter = () => {
    return <div className='newsletter-section'>
        <div className="newsletter-content">
            <span className="samll-text">NewsLetter</span>
            <span className="big-text">Sign up for latest updates and offers</span>
            
            <div className="form">
                <input type="text" placeholder='enter your email'/>
                <button>Subscribe</button>

                </div>  
                <div className="text">We won't post anything without your permission </div>
               <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14}/>
                    </div>
                    <div className="icon">
                        <FaTwitter size={14}/>
                    </div>
                    <div className="icon">
                        <FaInstagram size={14}/>
                    </div>
                    <div className="icon">
                        <FaLinkedin size={14}/>
                    </div>
                </div>
        </div>
    </div>;
};

export default Newsletter;
