import React from "react"
const Header = () => {
    return(
        <div className="px-8 md:px-10 lg:px-12 py-2 bg-blue-950 heropattern-topography-yellow-600/30 flex flex-row">
            <div className="flex-auto">
                <h1 className="lg:text-5xl text-3xl font-sans font-bold text-gray-50 text-left py-8 px-0">
                    Aneesh R. Bhat
                </h1>
            </div>
        <div className="items-center h-fit my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 block lg:hidden md:hidden">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>

        </div>
        </div>
    );
    
}

export default Header
