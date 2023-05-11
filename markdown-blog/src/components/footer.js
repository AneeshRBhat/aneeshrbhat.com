import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='bg-blue-950 text-gray-50 heropattern-topography-yellow-500/30 sticky top-[100vh] sm:px-16 lg:px-20 md:px-16 px-10 py-12 flex flex-row align-center justify-end'>
            <div className='flex-auto lg:flex flex-row justify-start gap-12 hidden book'>
            <a className='block' href="https://twitter.com/AneeshRBhat24">
                <FontAwesomeIcon fill="currentColor" className='w-fit inline-block p-2 text-gray-50 hover:text-yellow-500 text-3xl transition hover:ease-linear delay-200' icon={faTwitter}/>
            </a>
            <a className="block" href="https://github.com/AneeshRBhat"><FontAwesomeIcon className='w-fit p-2 text-gray-50 hover:text-yellow-500 text-3xl transition hover:ease-linear delay-200' icon={faGithub} /></a>
            <a className='block' href="https://aneeshworkspace.notion.site/Reading-List-Public-Access-54ef27983511428e88e5a9ceeeca57ed"><FontAwesomeIcon className='w-fit p-2 text-gray-50 hover:text-yellow-500 text-3xl transition hover:ease-linear delay-200' icon={faBook}/></a>





            </div>
            <div className='font-sans flex font-semibold text-lg text-right text-gray-50 justify-end items-center'>
                <p className='h-fit'>&copy; Aneesh R. Bhat, {new Date().getFullYear()}</p> 
            </div>
        </div>
    );
};

export default Footer;