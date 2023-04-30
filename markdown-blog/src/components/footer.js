import React from 'react';
import './components.css'

const Footer = () => {
    return (
        <div className='font-serif text-xl text-right border-2 p-10 text-french-pass-600 bg-slate-100'>
            &copy; Aneesh R. Bhat {new Date().getFullYear()}
        </div>
    );
};

export default Footer;