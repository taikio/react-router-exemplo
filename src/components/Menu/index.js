import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

import './index.css';

const Menu = () => {
    return (
        <div className='side-menu'>
            <h3>Menu</h3>
                
            <p>
                <NavLink to="/" exact activeClassName="side-menu-active">Home</NavLink>
            </p>
            <p>
                <NavLink to="/sobre" exact activeClassName="side-menu-active">Sobre</NavLink>
            </p>
            
        </div>
    )
};

export default Menu;