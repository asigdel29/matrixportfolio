import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const About = () => {
    const navigate = useNavigate();

    const commands = {
        ls: {
            description: 'Show everything on the page',
            fn: function () {
                return 'Resume\nLinkedin\nGithub\nEmail\nBio';
            }
        },
        projects: {
            description: 'Go to Projects page',
            fn: function () {
                navigate('/projects');
                return 'Redirecting to Projects page...';
            }
        },
        research: {
            description: 'Go to Research page',
            fn: function () {
                navigate('/research');
                return 'Redirecting to Research page...';
            }
        },
        misc: {
            description: 'Go to Misc page',
            fn: function () {
                navigate('/misc');
                return 'Redirecting to Misc page...';
            }
        },
        cd: {
            description: 'Go to Main page',
            fn: function () {
                navigate('/');
                return 'Redirecting to Main page...';
            }
        },
        Resume:{
            description: 'Go to Main page',
            fn: function () {
                window.open('https://cs.oswego.edu/~asigdel/Resume.pdf', '_blank');
                return 'Redirecting to the resume page page...';
            }
        },
        Linkedin:{
            description: 'Go to Linkedin profile',
            fn: function () {
                window.open('https://www.linkedin.com/in/asigdel/', '_blank');
            }
        },
        Github:{
            description: 'Go to Github Profile',
            fn: function () {
                window.open('https://www.github.com/asigdel29/', '_blank');
            }
        },
        Email:{
            description: 'Shoot me an email',
            fn: function () {
                window.open('mailto:sigdelanubhav@gmail.com', '_blank');
            }
        },
        Bio:{
            description: 'A little about me',
            fn: function () {
                window.open('mailto:sigdelanubhav@gmail.com', '_blank');
            }
        },
    };

    return (
        <Layout commands={commands}>
            {}
        </Layout>
    );
};

export default About;
