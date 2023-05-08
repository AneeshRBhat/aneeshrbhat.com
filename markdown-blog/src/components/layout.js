import React from 'react';
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
    return (
        <div className='min-h-screen'>
            <div className='flex-row'>
                <Header className='flex-auto'/>
            </div>
            
            <div>{children}</div>
            <Footer/>
        </div>
    );
};

export default Layout;