import React from 'react'; 
import logo from '../../assets/logo1.svg';
import { Link } from "react-router-dom";

import './styles.css';

const Logo = () =>
{
    return(
        <div id="logo">
            <Link to='/'><img src={logo} alt="logo"/></Link>
        </div>
    );
};

export default Logo;