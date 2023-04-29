import React from 'react';
import postlist from '../posts.json'
import Markdown from 'react-markdown'


const PostList = () => {
    return (
        <div className='my-8 p-20 '>
            {postlist.length &&
                    postlist.map((post,i) => {
                return (
                        <div className='border-[1px] border-french-pass-900 my-4 p-2 w-[40%] mx-auto'>
                            <h1 className='text-2xl font-sans font-semibold'>{post.title}</h1>
                            <small className=''>Published on {post.date} by {post.author}</small>
                            <hr className='border-french-pass-900'/>
                            <Markdown className='prose'>
                                {post.content}
                            </Markdown>
                            
                        </div>
                        )
    
            }
        )}
            
        </div>
    );
};

export default PostList;