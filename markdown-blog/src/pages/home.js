import React from "react"
import Layout from '../components/layout'
import PostList from "../components/postlist"
import HomeText from "../pages.json"
import Markdown from 'react-markdown'
const Home = () => {
    return (
    <div>
        <Layout>
            <div className="w-[60%] mx-auto my-16">
                <blockquote className="border-l-4 border-slate-900 text-md  italic font-semibold p-4 m">
                        "But I don't want comfort.
                        I want God, 
                        I want Poetry, 
                        I want real danger, 
                        I want freedom, 
                        I want goodness, 
                        I want sin."
                </blockquote>
                <p className= "mt-0 pt-0 mx-4"><em>-Aldous Huxley</em></p>

                <Markdown className="prose-h1:text-center prose mt-8">
                    {HomeText[1].content}
                </Markdown>
            </div>
        </Layout>
    </div>
    );
}

export default Home;