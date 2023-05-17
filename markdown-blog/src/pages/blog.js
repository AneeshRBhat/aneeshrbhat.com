import React from 'react';
import PostList from '../components/postlist';
import Layout from '../components/layout';

const Blog = () => {
    return (
        <div>
            <Layout>
                <div className='selection:bg-blue-300 selection:text-blue-950'>
                    <h1 className="text-center text-3xl mt-6 font-sans font-black">All Posts</h1>
                    <PostList/> 
                </div>
               
            </Layout>
           
        </div>
    );
};

export default Blog;