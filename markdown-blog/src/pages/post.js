import React from 'react';
import Layout from '../components/layout';
import { Navigate, useParams } from 'react-router-dom';
import postlist from '../posts.json'
import Markdown from 'react-markdown'

const Post = () => {
    const validId = parseInt(useParams().id)
    if(!validId) {
        return <Navigate to='/404'/>
    }
    let isValid = false
    const fetchedPost = {}
    postlist.forEach((post,i) => {
        if(validId === post.id){
            fetchedPost.title = post.title? post.title : "Post title not found"
            fetchedPost.author = post.author? post.author : "Post author not found"
            fetchedPost.date = post.date? post.date : "Post date not found"
            fetchedPost.content = post.content? post.content : "Post content not found"
            fetchedPost.thumbnail = post.thumbnail? post.thumbnail: null;
            isValid = true
        }
    })

    if(!isValid){
        return <Navigate to='/404'/>
    }

    return (
        <div>
            <Layout>
                <div className='w-[90%] md:w-[70%] lg:w-[60%] mx-auto my-8 p-4 selection:bg-blue-300 selection:text-blue-950'>
                <h1 className='text-4xl text-center font-sans font-black'>{fetchedPost.title}</h1>
                <img src={fetchedPost.thumbnail} className='mx-auto lg:w-[70%] w-[100%] my-8' alt="nothing to see here" />
                <small className='text-center text-[1rem] font-sans block mx-auto'>Published on {fetchedPost.date}</small>
                <h4 className='text-center font-sans font-semibold text-[1rem]'>{fetchedPost.author}</h4>
                <hr className='border-gray-400 my-10'/>
                    <Markdown skipHtml='false' children={fetchedPost.content} className='text-gray-900 font-blog my-4 prose prose-p:text-lg prose-blockquote:w-[70%] prose-blockquote:mx-auto prose-img:mx-auto'/>
                </div>
            </Layout> 
        </div>
    );
};

export default Post;