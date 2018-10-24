import React from 'react';

const NavItem = ({ navItem }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={navItem.link}>{navItem.text}</a>
        </li>
    )
}

export default NavItem; 