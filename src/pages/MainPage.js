import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';
const MainPage = () => {
    const navigate = useNavigate();
    const commands = {
        ls: {
            description: 'List all pages',
            fn: function () {
                return 'about projects research misc';
            },
        },
        about: {
            description: 'Go to About page',
            fn: function () {
                navigate('/about');
                return 'Redirecting...';
            },
        },
        projects: {
            description: 'Go to Projects page',
            fn: function () {
                navigate('/projects');
                return 'Redirecting...';
            },
        },
        research: {
            description: 'Go to Research page',
            fn: function () {
                navigate('/research');
                return 'Redirecting...';
            },
        },
        misc: {
            description: 'Go to Misc page',
            fn: function () {
                navigate('/misc');
                return 'Redirecting...';
            },
        },
    };

    return (

        <Layout commands={commands}>
        </Layout>
    );
};

export default MainPage;
