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
                  </ul>
            <ul>
                <li className="footer_ul_first">Shop</li>
                <li><Link to='/' className="footer_link">How to Shop</Link></li>
                <li><Link to='/' className="footer_link">Phone Order</Link></li>
                  </ul>
            <ul>
                <li className="footer_ul_first">Services</li>
                <li><Link to='/' className="footer_link">All Services</Link></li>
                <li><Link to='/' className="footer_link">Delivery Service</Link></li>
                
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