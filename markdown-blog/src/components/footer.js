import React from 'react';
import './components.css'

const Footer = () => {
    return (
        <div className='font-serif text-xl text-right border-2 p-10 text-slate-900 bg-slate-100 sticky top-[100vh]'>
            &copy; Aneesh R. Bhat, {new Date().getFullYear()}
        </div>
    );
};

export default Footer;