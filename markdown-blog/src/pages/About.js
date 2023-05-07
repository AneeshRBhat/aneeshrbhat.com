import React from 'react';
import aboutText from '../pages.json'
import Markdown from 'react-markdown';
import Layout from '../components/layout'

const About = () => {
    return (
        <div>
            <Layout>
                <div className='m-auto w-[85%] md:w-[60%] lg:w-[50%] mt-6 p-4'>
                    <Markdown className='prose prose-h1:text-center prose-h1:text-4xl md:prose-h1:text-5xl text-gray-900 lg:prose-h1:text-5xl prose-p:text-lg font-blog lg:prose-p:text-lg '>
                        {aboutText[0].content}
                    </Markdown>
                </div>

            </Layout>
        </div>
    );
};

export default About; 