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
            isValid = true
        }
    })

    if(!isValid){
        return <Navigate to='/404'/>
    }

    console.log(fetchedPost)

    return (
        <div>
            <Layout>
                <div className='flex flex-col justify-left items-center mx-auto my-8  p-4'>
                <h1 className='text-5xl font-sans font-bold my-4'>{fetchedPost.title}</h1>
                <small className='text-left font-serif'>Published on {fetchedPost.date}</small>
                <h4 className='font-serif text-lg'>{fetchedPost.author}</h4>
                <hr/>
                    <Markdown children={fetchedPost.content} className='text-slate-900 font-blog my-4 prose lg:prose-lg md:prose-md sm:prose-sm prose-h3:text-justify'/>
                </div>
            </Layout> 
        </div>
    );
};

export default Post;