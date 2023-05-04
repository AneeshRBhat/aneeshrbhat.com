import React from 'react';

const Footer = () => {
    return (
        <div className='font-serif text-xl text-right p-10 text-gray-50 bg-gray-900 sticky top-[100vh]'>
            &copy; Aneesh R. Bhat, {new Date().getFullYear()}
        </div>
    );
};

export default Footer;