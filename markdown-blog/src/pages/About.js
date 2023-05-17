import React from 'react';
import aboutText from '../pages.json'
import Markdown from 'react-markdown';
import Layout from '../components/layout'

const About = () => {
    return (
        <div>
            <Layout>

                <div className='md:w-[60%] lg:w-[50%] w-[85%] mx-auto my-16 selection:text-blue-950 selection:bg-blue-300'>
                    <div className=''>
                            <img alt="My face" src='/images/aboutme.png' className='mx-auto w-[90%] lg:w-[50%]'/>
                    </div>
                    
                    <div className='mt-6 mx-auto'>
                        <Markdown className='prose prose-h1:text-center prose-h1:text-3xl md:prose-h1:text-3xl prose-h1:font-sans text-gray-900 lg:prose-h1:text-3xl prose-p:text-lg font-blog '>
                            {aboutText[0].content}
                        </Markdown>
                    </div>

                </div>
           
            </Layout>
        </div>
    );
};

export default About; 