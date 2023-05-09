import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
            <div>
                <div className='mobile-menu bg-blue-500 flex flex-col font-sans font-bold items-center gap-4 p-8 text-blue-950 '>
                    <Link className='w-[30%] p-2 text-center hover:underline' to="/">Home</Link>
                    <Link className='w-[30%]  p-2 text-center hover:underline' to="/about">About</Link>
                    <Link className='w-[30%]  p-2 text-center hover:underline' to="/blog">Blog</Link>
                </div>
            </div>    );
};

export default MobileNav;