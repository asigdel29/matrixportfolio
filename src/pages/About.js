import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';
import '../Styles/styles.css';
import ResumeModal from '../Components/ModalContent/ResumeModal';
import BioModal from '../Components/ModalContent/BioModal';

const About = () => {
    const navigate = useNavigate();
    const [isBioOpen, setIsBioOpen] = useState(false);
    const [isAnimatingClose, setIsAnimatingClose] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const closeModal = (modalType) => {
        if (isClosing) return;

        setIsClosing(true);
        setTimeout(() => {
            if (modalType === 'bio') {
                setIsBioOpen(false);
            } else if (modalType === 'resume') {
                setIsResumeOpen(false);
            }
            setIsClosing(false);
        }, 1500);
    };

    const commands = {
        ls: {
            description: 'Show everything on the page',
            fn: function () {
                return 'Resume\nLinkedin\nGithub\nEmail\nBio';
            }
        },

        about: {
            description: 'You are here',
            fn: function () {
                return 'You are already at the about page';
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

        Resume: {
            description: 'Open my resume',
            fn: function () {
                setTimeout(function () {
                    setIsResumeOpen(true);
                }, 1200);
                return 'Here it comes...';
            }
        },

        Linkedin:{
            description: 'Go to Linkedin profile',
            fn: function () {
                setTimeout(function () {
                    window.open('https://www.linkedin.com/in/asigdel/', '_blank');
                }, 1200);
                return 'Redirecting to the Linkedin Profile ...';
            }
        },

        Github:{
            description: 'Go to Github profile',
            fn: function () {
                setTimeout(function () {
                    window.open('https://www.github.com/asigdel29/', '_blank');
                }, 1200);
                return 'Redirecting to the Github Profile ...';
            }
        },

        Email: {
            description: 'Shoot me an email',
            fn: function () {
                setTimeout(function () {
                    window.open('mailto:sigdelanubhav@gmail.com', '_blank');
                }, 1200);
                return 'I tend to respond quick';
            }
        },

        Bio: {
            description: 'A little about me',
            fn: function () {
                setTimeout(function () {
                    setIsBioOpen(true);
                }, 1200);
                return 'Get to know me more...';
            }
        }
    };

    return (
        <Layout commands={commands} welcomeMessage="Yoou've made it to the About page. Enter the command 'ls' to find out more. Use 'cd' to go back to the main page.">
            {isBioOpen && !isAnimatingClose && !isClosing && (
                <BioModal isOpen={isBioOpen} onClose={() => closeModal('bio')} />
            )}
            {isResumeOpen && !isAnimatingClose && !isClosing && (
                <ResumeModal isOpen={isResumeOpen} onClose={() => closeModal('resume')} />
            )}
        </Layout>
    );
};

export default About;
