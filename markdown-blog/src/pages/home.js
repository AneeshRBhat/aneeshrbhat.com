import React from "react"
import Layout from '../components/layout'
// import PostList from "../components/postlist"
import HomeText from "../pages.json"
import Markdown from 'react-markdown'
const Home = () => {
    return (
    <div>
        
        <Layout>
            <div className="lg:w-[60%] md:w-[60%] w-[80%] px-4 mx-auto my-16 selection:text-blue-950 selection:bg-blue-300">

                    <div className= "lg:text-xl text-lg font-[400] text-center font-serif italic text-gray-900 border-l-4  border-gray-900 lg:p-4 lg:m-2 p-2 m-2">
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
                <Markdown className="prose-h1:text-center prose-h1:text-3xl prose-h1:font-sans font-blog font-[400] prose-h1:font-black text-gray-900 prose mt-6 prose-p:text-lg prose-a:no-underline prose-a:text-blue-500 hover:prose-a:underline">
                    {HomeText[1].content}
                </Markdown>
            </div>
        </Layout>
    </div>
    );
}

export default Home;