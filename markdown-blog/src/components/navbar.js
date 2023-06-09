import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
            <div className='font-sans font-bold lg:text-lg flex-auto text-lg lg:flex flex-row px-2 text-gray-50 h-fit  hidden justify-end'>
                    <Link className='w-[30%] p-2 text-center hover:underline' to="/">Home</Link>
                    <Link className='w-[30%]  p-2 text-center hover:underline' to="/about">About</Link>
                    <Link className='w-[30%]  p-2 text-center hover:underline' to="/blog">Blog</Link>
            </div>
    );
};

export default Navbar;