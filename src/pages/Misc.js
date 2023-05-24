import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';

const Misc = () => {
    const navigate = useNavigate();

    const commands = {
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                return 'Misc Project 1\nMisc Project 2\nMisc Project 3';
            }
        },

        Misc: {
            description: 'You are here',
            fn: function () {
                return 'You are already at the miscellaneous page';
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

        research: {
            description: 'Go to Research page',
            fn: function () {
                setTimeout(function () {
                    navigate('/research');
                }, 1200);
                return 'Redirecting to the Research Page ...';
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
        <Layout commands={commands} welcomeMessage="Thhere's a lot of unorganized stuff you'll find here. Use 'cd' to go back to main ">
            {}
        </Layout>
    );
};

export default Misc;
