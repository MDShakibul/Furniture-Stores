import React from 'react';
import CustomeLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='d-flex justify-content-center fs-5 p-3 fw-bold navbar'>
            <CustomeLink to='/home' className='me-3'>Home</CustomeLink>
            <CustomeLink to='/reviews' className='me-3'>Reviews</CustomeLink>
            <CustomeLink to='/dashboard' className='me-3'>Dashboard</CustomeLink>
            <CustomeLink to='/blogs' className='me-3'>Blogs</CustomeLink>
            <CustomeLink to='/about' className='me-3'>About</CustomeLink>
        </nav>
    );
};

export default Header;