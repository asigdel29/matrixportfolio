import React from 'react';
import Terminal from '../Terminal';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <Terminal commands={commands} />
            <h1>Research</h1>
            <p>This is the Research page.</p>
        </div>
    );
};

export default Research;
