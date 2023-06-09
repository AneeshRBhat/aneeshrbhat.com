import React from "react"
import Logo from "./logo";
import Navbar from "./navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faAddressCard, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, } from '@fortawesome/free-brands-svg-icons'



const Header = () => {
    const [menuClicked, isMenuClicked] = useState(false)
    const [menuHeight, setMenuHeight] = useState(0);

    const hamClickHandler = () => {
        isMenuClicked(!menuClicked)
    }

    
    const menuRef = React.useRef(null);

    React.useEffect(() => {
        setMenuHeight(menuRef.current.scrollHeight);
    }, []);

    React.useEffect(() => {
        setMenuHeight(menuClicked ? menuRef.current.scrollHeight : 0);
    }, [menuClicked]);

    return(
        <div>
            <div className="px-8 lg:px-20 md:px-16 bg-blue-950 heropattern-topography-yellow-500/30 flex justify-around gap-4 py-12 items-center ">
                <Logo/>
                <Navbar className="hidder"/>
                <svg onClick={hamClickHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F8FAFC" className="sm:w-10 w-8 block text-slate-50 lg:hidden ">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            </div>
            <div id="menu"
                ref={menuRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: `${menuHeight}px` }}>
                <div className='mobile-menu bg-gray-200 flex flex-col font-sans font-bold items-center gap-4 p-8 text-blue-950'>
                    <div className="flex flex-col gap-12 items-center w-fit">
                        <Link className='w-fit text-center hover:underline flex items-center' to="/">
                            <FontAwesomeIcon className='w-fit px-2 text-blue-950  text-xl' icon={faHome}/>
                            <span>Home</span>
                        </Link>
                        <Link className='w-fit text-center hover:underline flex items-center ' to="/about">
                            <FontAwesomeIcon className='w-fit px-2 text-blue-950  text-xl' icon={faAddressCard}/>
                            <span>About</span>
                        </Link>
                        <Link className='w-fit text-center flex items-center hover:underline' to="/blog">
                            <FontAwesomeIcon className='w-fit px-2 text-blue-950  text-xl' icon={faNewspaper}/>
                            <span>Blog</span>
                        </Link>
                    </div>
                    
                    <div className='flex gap-10 w-fit mt-8'>
                        <a className="flex" href="https://twitter.com/AneeshRBhat24"><FontAwesomeIcon className='w-fit p-2 text-blue-950  text-2xl' icon={faTwitter}/></a>
                        <a className="flex" href="https://github.com/AneeshRBhat"><FontAwesomeIcon className='w-fit p-2 text-blue-950  text-2xl' icon={faGithub} /></a>
                        <a className="flex" href="https://aneeshworkspace.notion.site/Reading-List-Public-Access-54ef27983511428e88e5a9ceeeca57ed"><FontAwesomeIcon className='w-fit p-2 text-blue-950  text-2xl' icon={faBook}/></a>

                    </div>
                </div>            
            </div>
        </div>


    );
    
}

export default Header
