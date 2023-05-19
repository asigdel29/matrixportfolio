import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const Projects = () => {
    const navigate = useNavigate();

    const commands = {
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                return 'Project 1\nProject 2\nProject 3';
            }
        },
        about: {
            description: 'Go to About page',
            fn: function () {
                navigate('/about');
                return 'Redirecting to About page...';
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
        }
    };

    return (
        <Layout commands={commands} welcomeMessage="Thhis is where you'll find some of my projects, For more visit my github">
        </Layout>
    );
};

export default Projects;
