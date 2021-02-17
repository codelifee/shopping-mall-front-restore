import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className="main_footer">
        <div className="footer_ul">
          <p>
          Bring your ideas to life with rewards, inspiration, discounts and a few surprises along the way.
          </p>
            <ul>
                <li className="footer_ul_first">Help</li>
                <li><Link to='/' className="footer_link">Customer Service</Link></li>
                <li><Link to='/' className="footer_link">FAQ</Link></li>
                <li><Link to='/' className="footer_link">Contact us</Link></li>
                <li><Link to='/' className="footer_link">Delivery Tracking</Link></li>
                <li><Link to='/' className="footer_link">Returns and Claims</Link></li>
                <li><Link to='/' className="footer_link">Guarantees</Link></li>
                <li><Link to='/' className="footer_link">Product Recalls</Link></li>
                <li><Link to='/' className="footer_link">Feedback</Link></li>
            </ul>
            <ul>
                <li className="footer_ul_first">Shop</li>
                <li><Link to='/' className="footer_link">How to Shop</Link></li>
                <li><Link to='/' className="footer_link">Phone Order</Link></li>
                <li><Link to='/' className="footer_link">Business</Link></li>
                <li><Link to='/' className="footer_link">App</Link></li>
                <li><Link to='/' className="footer_link">Online Planning</Link></li>
                <li><Link to='/' className="footer_link">Catalogue</Link></li>
                <li><Link to='/' className="footer_link">Product Tip/Guide</Link></li>
                <li><Link to='/' className="footer_link">Finance Option</Link></li>
                <li><Link to='/' className="footer_link">Gift card</Link></li>
            </ul>
            <ul>
                <li className="footer_ul_first">Services</li>
                <li><Link to='/' className="footer_link">All Services</Link></li>
                <li><Link to='/' className="footer_link">Delivery Service</Link></li>
                <li><Link to='/' className="footer_link">Assembly Service</Link></li>
                <li><Link to='/' className="footer_link">Home Furnishing Advice</Link></li>
                <li><Link to='/' className="footer_link">Kitchen Planning Service</Link></li>
                <li><Link to='/' className="footer_link">Click & Collect</Link></li>
                <li><Link to='/' className="footer_link">Buy back Service</Link></li>
               
            </ul>
           

        </div>
        
            <p className="footer_col_copy">
              &copy;{new Date().getFullYear()} Noryangjin | All rights reserved |
              Terms Of Service | Privacy
            </p>
      </div>
    );
  }
  
  export default Footer;