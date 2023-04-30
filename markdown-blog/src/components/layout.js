import React from 'react';
import './components.css';
import Header from './header'
import Footer from './footer'
import Navbar from "./navbar";

const Layout = ({children}) => {
    return (
        <div className='min-h-screen'>
            <div className='flex-row'>
                <Header className='flex-auto'/>
                <Navbar className='flex-auto'/>
            </div>
            
            <div>{children}</div>
            <Footer/>
        </div>
    );
};

export default Layout;