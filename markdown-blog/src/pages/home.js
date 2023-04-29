import React from "react"
import './pages.css'
import Layout from '../components/layout'
import PostList from "../components/postlist"
const Home = () => {
    return (
    <div>
        <Layout>
            <div>
                <PostList/>
            </div>
        </Layout>
    </div>
    );
}

export default Home;