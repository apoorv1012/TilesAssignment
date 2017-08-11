import React from 'react';
import Logo from '../Logo/logo.jsx';
import Search from '../Search/search.jsx';

const Header = () => (
    <header>
        <Logo/>
        <div className="header-text">
            <span>MovieBase</span>
        </div>
        <Search/>
    </header>
);

export default Header;
