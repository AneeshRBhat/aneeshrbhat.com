import React from 'react';
import aboutText from '../pages.json'
import Markdown from 'react-markdown';
import Layout from '../components/layout'

const About = () => {
    return (
        <div>
            <Layout>
                <div className='m-auto w-[40%] mt-6 p-4'>
                    <Markdown className='prose'>
                        {aboutText[0].content}
                    </Markdown>
                </div>

            </Layout>
        </div>
    );
};

export default About; 