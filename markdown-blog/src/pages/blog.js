import React from 'react';
import PostList from '../components/postlist';
import Layout from '../components/layout';

const Blog = () => {
    return (
        <div>
            <Layout>
                <div className='selection:bg-blue-300 selection:text-blue-950 p-8'>
                    <div>
                    <h1 className="text-center text-5xl font-sans font-black my-6">All Posts</h1>
                    <PostList/> 
                    </div>
                </div>
               
            </Layout>
           
        </div>
    );
};

export default Blog;