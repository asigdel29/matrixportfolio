import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const Research = () => {
    const navigate = useNavigate();

    const commands = {
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                return 'Research Project 1\nResearch Project 2\nResearch Project 3';
            }
        },
        about: {
            description: 'Go to About page',
            fn: function () {
                navigate('/about');
                return 'Redirecting to About page...';
            }
        },
        projects: {
            description: 'Go to Projects page',
            fn: function () {
                navigate('/projects');
                return 'Redirecting to Projects page...';
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
        <Layout commands={commands}>
            {/* Content of the Research page */}
        </Layout>
    );
};

export default Research;
