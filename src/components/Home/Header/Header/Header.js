import React from 'react';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-contain">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <HeaderBottom></HeaderBottom>
        </div>
    );
};

export default Header;