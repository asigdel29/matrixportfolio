import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const Research = () => {
    const navigate = useNavigate();

    const commands = {

        Research: {
            description: 'You are here',
            fn: function () {
                return 'You are already at the Research page';
            }
        },

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
                setTimeout(function () {
                    navigate('/projects');
                }, 1200);
                return 'Redirecting to the projects Page ...';
            }
        },

        misc: {
            description: 'Go to Misc page',
            fn: function () {
                setTimeout(function () {
                    navigate('/misc');
                }, 1200);
                return 'Redirecting to the Miscellaneous Page ...';
            }
        },

        cd: {
            description: 'Go to Main page',
            fn: function () {
                setTimeout(function () {
                    navigate('/');
                }, 1200);
                return 'Redirecting to the Main Page ...';
            }
        },
    };

    return (
        <Layout commands={commands} welcomeMessage="Ennter command 'ls' to see some cool stuff done with professors. Use 'cd' to go back to main">
            {}
        </Layout>
    );
};

export default Research;
