import React from 'react';
import PostList from '../components/postlist';
import Layout from '../components/layout';

const Blog = () => {
    return (
        <div>
            <Layout>
                <h1 className="text-center text-3xl mt-6 font-sans font-black">All Posts</h1>
                <PostList/> 
            </Layout>
           
        </div>
    );
};

export default Blog;