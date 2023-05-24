import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';
import { DBRModal, RobotRadarModal, RealTimeModal, CPRModal } from "../Components/Project Page/ProjectsModal";

const Projects = () => {
    const navigate = useNavigate();
    const [isAnimatingClose, setIsAnimatingClose] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isDBRModalOpen, setIsDBRModalOpen] = useState(false);
    const [isRobotRadarModalOpen, setIsRobotRadarModalOpen] = useState(false);
    const [isRealTimeModalOpen, setIsRealTimeModalOpen] = useState(false);
    const [isCPRModalOpen, setIsCPRModalOpen] = useState(false);

    const closeModal = (modalType) => {
        if (isClosing) return;

        setIsClosing(true);
        setTimeout(() => {
            if (modalType === 'dbr') {
                setIsDBRModalOpen(false);
            } else if (modalType === 'radar') {
                setIsRobotRadarModalOpen(false);
            } else if (modalType === 'realtime') {
                setIsRealTimeModalOpen(false);
            } else if (modalType === 'cpr') {
                setIsCPRModalOpen(false);
            }
            setIsClosing(false);
        }, 1500);
    };

    const commands = {
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                return 'CPR\nLuminex\nFinTrack\nRoboScan';
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

        Luminex:{
            description: 'Diabetic Retinopathy Detection',
            fn: function () {
                setTimeout(function () {
                    setIsDBRModalOpen(true);
                }, 1200);
                return 'One Convolutional Neural Net Project description coming right up...';
            }
        },

        FinTrack:{
            description: 'Real Time Financial Data',
            fn: function () {
                setTimeout(function () {
                    setIsRealTimeModalOpen(true);
                }, 1200);
                return 'Fintech?.....';
            }
        },

        RoboScan:{
            description: 'Robot Radar',
            fn: function () {
                setTimeout(function () {
                    setIsRobotRadarModalOpen(true);
                }, 1200);
                return "Hold your horses...";
            }
        },

        CPR:{
            description: 'Calibrated Peer Review Tool',
            fn: function () {
                setTimeout(function () {
                    setIsCPRModalOpen(true);
                }, 1200);
                return 'Can this be the next BrightSpace?...';
            }
        },
    };

    return (
        <Layout commands={commands} welcomeMessage="Ennter command 'ls' to see some cool stuff done with professors. Use 'cd' to go back to the main page.">
            {isDBRModalOpen && !isClosing && (
                <DBRModal isOpen={isDBRModalOpen} onClose={() => closeModal('dbr')} />
            )}
            {isRealTimeModalOpen && !isClosing && (
                <RealTimeModal isOpen={isRealTimeModalOpen} onClose={() => closeModal('realtime')} />
            )}
            {isRobotRadarModalOpen && !isClosing && (
                <RobotRadarModal isOpen={isRobotRadarModalOpen} onClose={() => closeModal('radar')} />
            )}
            {isCPRModalOpen && !isClosing && (
                <CPRModal isOpen={isCPRModalOpen} onClose={() => closeModal('cpr')} />
            )}
        </Layout>
    );
};

export default Projects;
