import React from "react"
import Layout from '../components/layout'
import PostList from "../components/postlist"
import HomeText from "../pages.json"
import Markdown from 'react-markdown'
const Home = () => {
    return (
    <div>
        
        <Layout>
            <div className="lg:w-[60%] md:w-[60%] sm:w-[80%] xs:w-[80%] mx-auto my-8">

                    <div className= "lg:text-lg md:text-md text-sm text-center text-gray-900 border-l-4  border-gray-900 s font-semibold lg:p-4 md:p-2 lg:m-2 md:m-1 p-1 m-1">
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
                <Markdown className="prose-h1:text-center prose-h1:text-4xl md:prose-h1:text-5xl lg:prose-h1:text-5xl prose mt-6">
                    {HomeText[1].content}
                </Markdown>
            </div>
        </Layout>
    </div>
    );
}

export default Home;