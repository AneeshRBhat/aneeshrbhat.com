import React from "react"
import Layout from '../components/layout'
import PostList from "../components/postlist"
const Home = () => {
    return (
    <div>
        <Layout>
            <div>
                <h1 className="text-center text-5xl mt-5 mb-0 font-sans font-black">All Posts</h1>
                <PostList/>
            </div>
        </Layout>
    </div>
    );
}

export default Home;