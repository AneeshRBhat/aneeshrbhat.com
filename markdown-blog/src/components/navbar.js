import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex-auto justify-end h-fit'>
            <div className='font-sans font-bold lg:text-lg flex-auto text-lg lg:flex flex-row px-2 text-gray-50 h-fit  hidden md:justify-end lg:justify-end'>
                    <Link className='w-[30%] p-2 text-center hover:underline' to="/">Home</Link>
                    <Link className='w-[30%]  p-2 text-center hover:underline' to="/about">About</Link>
                    <Link className='w-[30%]  p-2 text-center hover:underline' to="/blog">Blog</Link>
            </div>

            <div className="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f9fafb" className="sm:w-10 w-8 block lg:hidden">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
};

export default Navbar;