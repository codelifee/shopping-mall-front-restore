import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className="main_footer">
        <div className="footer_ul">
          
            

        </div>
        
            <p className="footer_col_copy">
              &copy;{new Date().getFullYear()} Noryangjin | All rights reserved |
              Terms Of Service | Privacy
            </p>
      </div>
    );
  }
  
  export default Footer;