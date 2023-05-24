import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';
import DBRModal from "../Components/Project Page/ProjectsModal";
import RobotModal from "../Components/Project Page/RobotModal";
import RealTimeModal from "../Components/Project Page/RealTimeModal";
import CPRModal from "../Components/Project Page/CPRModal";

const Projects = () => {
    const navigate = useNavigate();
    const [isAnimatingClose, setIsAnimatingClose] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isProject1Open, setIsProject1Open] = useState(false);
    const [isProject2Open, setIsProject2Open] = useState(false);
    const [isProject3Open, setIsProject3Open] = useState(false);
    const [isProject4Open, setIsProject4Open] = useState(false);

    const closeModal = (modalType) => {
        if (isClosing) return;

        setIsClosing(true);
        setTimeout(() => {
            if (modalType === 'project1') {
                setIsProject1Open(false);
            } else if (modalType === 'project2') {
                setIsProject2Open(false);
            } else if (modalType === 'project3') {
                setIsProject3Open(false);
            }else if (modalType === 'project4') {
                setIsProject4Open(false);
            }
            setIsClosing(false);
        }, 1500);
    };

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
            fn: function () {
                setTimeout(function () {
                    setIsProject1Open(true);
                }, 1200);
                return 'One Convolutional Neural Net Project description coming right up...';
            }
        },

        Project2:{
            description: 'Real Time Financial Data',
            fn: function () {
                setTimeout(function () {
                    setIsProject2Open(true);
                }, 1200);
                return 'Fintech?.....';
            }
        },

        Project3:{
            description: 'Robot Radar',
            fn: function () {
                setTimeout(function () {
                    setIsProject3Open(true);
                }, 1200);
                return "Meep Morp Zeeep, Oh wait this is just a radar...";
            }
        },

        Project4:{
            description: 'Calibrated Peer Review Tool',
            fn: function () {
                setTimeout(function () {
                    setIsProject4Open(true);
                }, 1200);
                return 'Can this be the next Brightspace?...';
            }
        },
    };

    return (
        <Layout commands={commands} welcomeMessage="Ennter command 'ls' to see some cool stuff done with professors. Use 'cd' to go back to the main page.">
            {isProject1Open && !isAnimatingClose && !isClosing && (
                <DBRModal isOpen={isProject1Open} onClose={() => closeModal('cps')} />
            )}
            {isProject2Open && !isAnimatingClose && !isClosing && (
                <RealTimeModal isOpen={isProject2Open} onClose={() => closeModal('motionCapture')} />
            )}
            {isProject3Open && !isAnimatingClose && !isClosing && (
                <RobotModal isOpen={isProject3Open} onClose={() => closeModal('internationalTrade')} />
            )}
            {isProject4Open && !isAnimatingClose && !isClosing && (
                <CPRModal isOpen={isProject4Open} onClose={() => closeModal('internationalTrade')} />
            )}
        </Layout>
    );
};

export default Projects;
