import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';
import { DBRModal, RobotRadarModal, RealTimeModal, CPRModal, TeacherAttendanceModal, FPSGameModal, FAREModal } from "../Components/Project Page/ProjectsModal";

const Projects = () => {
    const navigate = useNavigate();
    const [isAnimatingClose, setIsAnimatingClose] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isDBRModalOpen, setIsDBRModalOpen] = useState(false);
    const [isRobotRadarModalOpen, setIsRobotRadarModalOpen] = useState(false);
    const [isRealTimeModalOpen, setIsRealTimeModalOpen] = useState(false);
    const [isCPRModalOpen, setIsCPRModalOpen] = useState(false);
    const [isTeacherAttendanceModalOpen, setIsTeacherAttendanceModalOpen] = useState(false);
    const [isFPSGameModalOpen, setIsFPSGameModalOpen] = useState(false);
    const [isFAREModalOpen, setIsFAREModalOpen] = useState(false);

    const closeModal = (modalType) => {
        if (isClosing) return;

        setIsClosing(true);
        setTimeout(() => {
            switch(modalType) {
                case 'dbr':
                    setIsDBRModalOpen(false);
                    break;
                case 'radar':
                    setIsRobotRadarModalOpen(false);
                    break;
                case 'realtime':
                    setIsRealTimeModalOpen(false);
                    break;
                case 'cpr':
                    setIsCPRModalOpen(false);
                    break;
                case 'teacher':
                    setIsTeacherAttendanceModalOpen(false);
                    break;
                case 'fps':
                    setIsFPSGameModalOpen(false);
                    break;
                case 'fare':
                    setIsFAREModalOpen(false);
                    break;
            }
            setIsClosing(false);
        }, 1500);
    };

    const commands = {
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                return 'Here are the project names. Enter a name to learn more: \nCPRTool\nLuminex\nFinTrack\nRoboScan\nTeacherAttendance\nFPSGame\nFARE';
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

        CPRTool:{
            description: 'Calibrated Peer Review Tool',
            fn: function () {
                setTimeout(function () {
                    setIsCPRModalOpen(true);
                }, 1200);
                return 'Can this be the next BrightSpace?...';
            }
        },

        TeacherAttendance: {
            description: 'Teacher Attendance Monitoring System',
            fn: function () {
                setTimeout(function () {
                    setIsTeacherAttendanceModalOpen(true);
                }, 1200);
                return 'Fetching details about Teacher Attendance Monitoring System...';
            }
        },

        FPSGame: {
            description: 'FPS Game (Untitled)',
            fn: function () {
                setTimeout(function () {
                    setIsFPSGameModalOpen(true);
                }, 1200);
                return 'Fetching details about FPS Game...';
            }
        },

        FARE: {
            description: 'FARE (Freelance Activities & Relations Ecosystem)',
            fn: function () {
                setTimeout(function () {
                    setIsFAREModalOpen(true);
                }, 1200);
                return 'Fetching details about FARE...';
            }
        },
    };

    return (
        <Layout commands={commands} welcomeMessage="Ennter command 'ls' to see some cool stuff I built. Use 'cd' to go back to the main page." >
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
            {isTeacherAttendanceModalOpen && !isClosing && (
                <TeacherAttendanceModal isOpen={isTeacherAttendanceModalOpen} onClose={() => closeModal('teacher')} />
            )}
            {isFPSGameModalOpen && !isClosing && (
                <FPSGameModal isOpen={isFPSGameModalOpen} onClose={() => closeModal('fps')} />
            )}
            {isFAREModalOpen && !isClosing && (
                <FAREModal isOpen={isFAREModalOpen} onClose={() => closeModal('fare')} />
            )}
        </Layout>
    );
};

export default Projects;
