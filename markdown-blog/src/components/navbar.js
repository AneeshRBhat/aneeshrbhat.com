import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='font-serif text-lg flex flex-row p-2 bg-slate-600 text-slate-50 h-fit'>
            <div className='flex-1 flex  mx-auto'>
                <Link className='flex-auto w-[60%] mx-2 p-2 text-center hover:underline border-2' to="/">Home</Link>
                <Link className='flex-auto w-[60%] mx-2 p-2 text-center hover:underline border-2' to="/about">About</Link>
                <Link className='flex-auto w-[60%] mx-2 p-2 text-center hover:underline border-2' to="/blog">Blog</Link>
            </div>
        </div>
        
    );
};

export default Navbar;