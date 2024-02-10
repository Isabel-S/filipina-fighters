import React, { useState } from 'react';
import './Menu.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the state
    };

    return (
        <div>
            <button id="menu-toggle" className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-icon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            </button>
            <div id="side-menu" className="side-menu" >
            </div>
        </div>
        
    );
}

export default Menu;
