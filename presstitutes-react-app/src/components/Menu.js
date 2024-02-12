import React, { useState } from 'react';
import './Menu.css';

const Menu = ({ headings }) => {
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
            <div id="side-menu" className={`side-menu ${isOpen ? 'show' : ''}`} style={{ left: isOpen ? '0px' : '-250px' }}>
                <ul>
                    {headings.map((heading) => (
                        <li key={heading.text} className={`level-${heading.className[7]}`}>
                        <a href={`#${heading.text}`}>{heading.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default Menu;
