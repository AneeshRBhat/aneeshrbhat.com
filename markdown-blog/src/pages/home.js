import React from "react"
import Layout from '../components/layout'
// import PostList from "../components/postlist"
import HomeText from "../pages.json"
import Markdown from 'react-markdown'
const Home = () => {
    return (
    <div>
        
        <Layout>
            <div className="lg:w-[60%] md:w-[60%] sm:w-[80%] xs:w-[80%] mx-auto my-8">

                    <div className= "text-xl  text-center font-serif italic text-gray-900 border-l-4  border-gray-900 lg:p-4 lg:m-2 p-2 m-2">
                    <blockquote>
                                "But I don't want comfort.
                                I want God, 
                                I want Poetry, 
                                I want real danger, 
                                I want freedom, 
                                I want goodness, 
                                I want sin."
                        </blockquote>
                </div>
                <Markdown className="prose-h1:text-center md:prose-h1:text-5xl prose-h1:font-sans font-blog font-[500] lg:prose-h1:text-5xl  text-gray-900 prose mt-6 prose-p:text-lg">
                    {HomeText[1].content}
                </Markdown>
            </div>
        </Layout>
    </div>
    );
}

export default Home;