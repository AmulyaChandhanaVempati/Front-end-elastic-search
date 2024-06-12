import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react'
import './Header.css';
import logo from '../images/logo.png';

const NavBar = () => {

return(<>
<body>
    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <img src={logo} />
        </div>
    </nav>
</body>
</>
)
};

export default NavBar;