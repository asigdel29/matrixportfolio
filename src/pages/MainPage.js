import React from 'react';
import Console from 'react-console-emulator';
import { useNavigate } from 'react-router-dom';
import MatrixRain from '../MatrixRain';

const MainPage = () => {
    const navigate = useNavigate();

    const commands = {

        default: {
            description: 'Unknown command, available commands are: ls, about, projects, research, misc',
            fn: function () {
                return 'Unknown command, available commands are: ls, about, projects, research, misc';
            }
        },

        ls: {
            description: 'List all pages',
            fn: function () {
                return 'about projects research misc';
            }
        },
        about: {
            description: 'Go to About page',
            fn: function () {
                navigate('/about');
                return 'Redirecting...';
            }
        },
        projects: {
            description: 'Go to Projects page',
            fn: function () {
                navigate('/projects');
                return 'Redirecting...';
            }
        },
        research: {
            description: 'Go to Research page',
            fn: function () {
                navigate('/research');
                return 'Redirecting...';
            }
        },
        misc: {
            description: 'Go to Misc page',
            fn: function () {
                navigate('/misc');
                return 'Redirecting...';
            }
        },
    };

    return (
        <div>
            <MatrixRain />
            <div className="terminal-container">
                <Console commands={commands} autoFocus={true} />
            </div>
        </div>
    );
};
export default MainPage;
