import React from 'react';
import postlist from '../posts.json'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


const PostList = () => {
    return (
        <div className='mt-0 p-10 '>
            {postlist.length &&
                    postlist.map((post,i) => {
                        let firstFifty = post.content.split(' ').slice(0, 50).join(' ') + "..."
                        return (
                        
                            <div className='border-[1px] border-slate-900 mt-2 mb-4 p-4 w-[40%] mx-auto  selection:bg-slate-600 selection:text-slate-100 hover:shadow-md hover:shadow-slate-500'>
                                <h1 className='text-2xl font-sans font-semibold'>{post.title}</h1>
                                <small className=''>Published on {post.date} by {post.author}</small>
                                <hr className='border-slate-900'/>
                                <Markdown className='prose' rehypePlugins={[rehypeRaw]}>
                                    {firstFifty}
                                </Markdown>
                                
                            </div>
                        )
    
            }
        )}
            
        </div>
    );
};

export default PostList;