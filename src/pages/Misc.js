import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';
import { CognitiveScienceLinks, SoftwareEngineeringLinks, Repositories } from "../Components/Misc Page/MiscModal";

const Misc = () => {
    const navigate = useNavigate();
    const [isCognitiveScienceOpen, setIsCognitiveScienceOpen] = useState(false);
    const [isSoftwareEngineeringOpen, setIsSoftwareEngineeringOpen] = useState(false);
    const [isRepositoriesOpen, setIsRepositoriesOpen] = useState(false);

    const closeModal = (modalType) => {
        if (modalType === 'cognitiveScience') {
            setIsCognitiveScienceOpen(false);
        } else if (modalType === 'softwareEngineering') {
            setIsSoftwareEngineeringOpen(false);
        } else if (modalType === 'repositories') {
            setIsRepositoriesOpen(false);
        }
    };

    const commands = {
        ls: {
            description: 'List all modals on the page',
            fn: function () {
                return 'CogSci\nSWE\nRepositories';
            }
        },

        about: {
            description: 'Go to About page',
            fn: function () {
                navigate('/about');
                return 'Redirecting to About page...';
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

        research: {
            description: 'Go to Research page',
            fn: function () {
                setTimeout(function () {
                    navigate('/research');
                }, 1200);
                return 'Redirecting to the Research Page ...';
            }
        },

        CogSci: {
            description: 'View details on Cognitive Science Links',
            fn: function () {
                setTimeout(() => {
                    setIsCognitiveScienceOpen(true);
                }, 1200);
                return "Diving deep into cognitive science...";
            }
        },
        SWE: {
            description: 'View details on Software Engineering Links',
            fn: function () {
                setTimeout(() => {
                    setIsSoftwareEngineeringOpen(true);
                }, 1200);
                return "Discover the world of software engineering...";
            }
        },
        Repositories: {
            description: 'Some cool code I wrote to hack through life',
            fn: function () {
                setTimeout(() => {
                    setIsRepositoriesOpen(true);
                }, 1200);
                return "Exploring the depths of repositories...";
            }
        }
    };

    return (
        <Layout commands={commands} welcomeMessage="Thhere's a lot of unorganized stuff you'll find here. Use 'cd' to go back to main , Use 'help' to know more about the links">
            {isCognitiveScienceOpen && (
                <CognitiveScienceLinks isOpen={isCognitiveScienceOpen} onClose={() => closeModal('cognitiveScience')} />
            )}
            {isSoftwareEngineeringOpen && (
                <SoftwareEngineeringLinks isOpen={isSoftwareEngineeringOpen} onClose={() => closeModal('softwareEngineering')} />
            )}
            {isRepositoriesOpen && (
                <Repositories isOpen={isRepositoriesOpen} onClose={() => closeModal('repositories')} />
            )}
        </Layout>
    );
};

export default Misc;
