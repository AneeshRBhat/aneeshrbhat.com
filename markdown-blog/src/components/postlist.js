import React from 'react';
import postlist from '../posts.json'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import { Link } from 'react-router-dom';


const PostList = () => {
    return (
        <div className='mt-0 p-8 flex flex-col gap-8'>
            {postlist.length &&
                    postlist.map((post,i) => {
                        let firstFifty = post.content.split(' ').slice(0, 50).join(' ') + "..."
                        return (
                            <div className='border-b-2 p-8 w-[90%] md:w-[60%] lg:w-[50%] mx-auto'>
                            {post.thumbnail && (
                                <Link to={`/post/${post.id}`}><img src={post.thumbnail} alt="No thumbnail" className='md:w-[80%] lg:w-[50%] mx-auto mb-4'/></Link>
                            )}
                                <h1 className='text-2xl md:text-3xl lg:text-4xl font-sans font-bold'>
                                    <Link className='hover:underline' to={`/post/${post.id}`}>
                                        {post.title}
                                    </Link>
                                    
                                </h1>
                                <small className='text-xs font-blog md:text-sm lg:text-md'>Published on <i>{post.date}</i> by <b>{post.author}</b></small>
                                <Markdown className='prose font-blog mt-4 hidden lg:inline-block md:inline-block lg:prose-p:text-lg md:prose-p:text-lg' rehypePlugins={[rehypeRaw]}>
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