import React from "react"
import Logo from "./logo";
import Navbar from "./navbar";
const Header = () => {
    return(
        <div className="px-10 lg:px-20 md:px-16 bg-blue-950 heropattern-topography-yellow-500/30 flex flex-row gap-4 py-12 items-center ">
            <Logo/>
            <Navbar/>
 
        </div>
    );
    
}

export default Header
