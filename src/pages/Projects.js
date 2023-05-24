import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const Projects = () => {
    const navigate = useNavigate();

    const commands = {
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                return 'Project 1\nProject 2\nProject 3\nProject4';
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
                setTimeout(function () {
                    navigate('/research');
                }, 1200);
                return 'Redirecting to the Research Page ...';
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
                return 'Redirecting to Main page...';
            }
        },

        Project1:{
            description: 'Diabetic Retinopathy Detection',
        },

        Project2:{
            description: 'Real Time Financial Data',
        },

        Project3:{
            description: 'Robot Radar',
        },

        Project4:{
            description: 'Go to Main page',
        },
    };

    return (
        <Layout commands={commands} welcomeMessage="Thhis is where you'll find some of my projects, Use 'cd' to go back to main">
        </Layout>
    );
};

export default Projects;
