import React from 'react';
import PostList from '../components/postlist';
import Layout from '../components/layout';

const Blog = () => {
    return (
        <div>
            <Layout>
                <h1 className="text-center text-4xl lg:text-5xl md:text-5xl mt-5 mb-0 font-sans font-black">All Posts</h1>
                <PostList/> 
            </Layout>
           
        </div>
    );
};

export default Blog;