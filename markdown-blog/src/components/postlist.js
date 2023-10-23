import React from 'react';
import postlist from '../posts.json'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import { Link } from 'react-router-dom';


const PostList = () => {
    return (
        <div className='mt-0 lg:p-8 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4'>
            {postlist.length &&
                    postlist.map((post,i) => {
                        let firstTwenty = post.content.split(' ').slice(0, 20).join(' ') + "..."
                        return (
                            <div className='p-8 lg:p-8 flex flex-col gap-4 border-b-2 md:border-0 lg:border-0'>
                            <div>
                                {post.thumbnail && (
                                    <Link to={`/post/${post.id}`}><img src={post.thumbnail} alt="No thumbnail" className='mx-auto lg:mb-4'/></Link>
                                )}
                            </div>
                                <div className='p-4'>
                                    <h1 className='text-2xl md:text-xl lg:text-3xl font-sans font-bold'>
                                        <Link className='hover:underline' to={`/post/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h1>
                                    <small className='text-xs font-blog md:text-sm lg:text-sm text-slate-400'>Published on <i>{post.date}</i> by <b>{post.author}</b></small>
                                    <Markdown className='prose my-auto font-blog mt-4 hidden lg:inline-block md:inline-block
                                     prose-h2:m-0 prose-h2:text-base lg:prose-h2:text-lg prose-h2:font-semibold lg:prose-p:text-base prose-p:text-sm prose-p:my-2'>
                                        {firstTwenty}
                                    </Markdown>
                                </div>
                            </div>
                        )
    
            }
        )}
            
        </div>
    );
};

export default PostList;