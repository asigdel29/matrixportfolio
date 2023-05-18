import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const MainPage = () => {
    const navigate = useNavigate();

    const commands = {
        default: {
            description: 'Unknown command, available commands are: ls, about, projects, research, misc',
            fn: function () {
                return 'Unknown command, available commands are: ls, about, projects, research, misc';
            },
        },
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
