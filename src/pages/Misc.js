import React from 'react';
import Terminal from '../Terminal';
import { useNavigate } from 'react-router-dom';

const Misc = () => {
    const navigate = useNavigate();

    const commands = {
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                return 'Misc Project 1\nMisc Project 2\nMisc Project 3';
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
        research: {
            description: 'Go to Research page',
            fn: function () {
                navigate('/research');
                return 'Redirecting to Research page...';
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
            <h1>Misc</h1>
            <p>This is the Misc page.</p>
        </div>
    );
};

export default Misc;
