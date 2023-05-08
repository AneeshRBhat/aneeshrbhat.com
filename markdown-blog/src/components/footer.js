import React from 'react';

const Footer = () => {
    return (
        <div className='font-serif text-xl text-right p-10 text-gray-50 bg-blue-950 heropattern-topography-yellow-600/30 sticky top-[100vh]'>
            &copy; Aneesh R. Bhat, {new Date().getFullYear()}
        </div>
    );
};

export default Footer;