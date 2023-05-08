import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

icon({name: 'user', style: 'solid'})

const Footer = () => {
    return (
        <div className='heropattern-topography-yellow-500/30 sticky top-[100vh] px-16 py-12 '>
            <div>
                Hello
            </div>
            <div className='font-sans flex font-semibold text-lg text-right text-gray-50 bg-blue-950 justify-end items-center'>
                <p className='h-fit'>&copy; Aneesh R. Bhat, {new Date().getFullYear()}</p> 
            </div>
        </div>
    );
};

export default Footer;