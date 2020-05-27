import React from 'react';
import { Link } from 'react-router-dom';



const Header = () =>
    (
        <nav>
            <div className="nav-wrapper">
            <Link to={'/'} className="brand-logo">Brand</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/flight'}>Flight</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </div>

        </nav>
    )


export default Header;