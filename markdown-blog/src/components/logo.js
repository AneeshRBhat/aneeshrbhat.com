import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => { 
    return (
        <div className="flex-auto h-fit flex">
            <Link to='/'>
                <h1 className="lg:text-5xl md:text-5xl text-3xl font-sans font-bold text-gray-50 text-left ">
                    Aneesh R. Bhat
                </h1>            
            </Link>

        </div>
    );
};

export default Logo;