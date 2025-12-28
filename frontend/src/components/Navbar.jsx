import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="container">
                <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
                    Portfolio
                </NavLink>

                <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
                    <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                </ul>

                <div className="navbar-right">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        <span className="material-symbols-outlined">
                            {isDark ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>

                    <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className="material-symbols-outlined">
                            {isOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
