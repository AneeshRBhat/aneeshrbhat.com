import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='font-serif lg:text-lg md:text-lg text-md lg:flex md:flex flex-row p-2 bg-gray-900 text-gray-50 h-fit items-center lg:items-end md:justify-items-end hidden '>
                <Link className='w-32 mx-2 p-2 text-center hover:underline' to="/">Home</Link>
                <Link className='w-32 mx-2 p-2 text-center hover:underline' to="/about">About</Link>
                <Link className='w-32 mx-2 p-2 text-center hover:underline' to="/blog">Blog</Link>
        </div>
        
    );
};

export default Navbar;