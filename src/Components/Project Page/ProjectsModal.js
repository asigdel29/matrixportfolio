import React, { useState, useEffect } from 'react';
import DBRModalContent from './PageContent/DBRContent.html';
import RealTimeModalContent from './PageContent/RealTimeContent.html';
import RobotRadarModalContent from './PageContent/RobotRadarContent.html';
import CPRModalContent from './PageContent/CPRContent.html';

const ModalComponent = ({ isOpen, onClose, modalText }) => {
    const [visibleText, setVisibleText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const typingSpeed = 8;

    useEffect(() => {
        let intervalId;

        if (isOpen) {
            intervalId = setInterval(() => {
                setVisibleText(prevText => {
                    const nextChar = modalText[typingIndex];
                    return prevText + nextChar;
                });

                setTypingIndex(prevIndex => prevIndex + 1);
            }, typingSpeed);
        }

        return () => clearInterval(intervalId);
    }, [isOpen, typingIndex]);

    useEffect(() => {
        if (!isOpen) {
            setVisibleText('');
            setTypingIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (visibleText.endsWith('undefined')) {
            setVisibleText(prevText => prevText.replace(/undefined$/g, ''));
        }
    }, [visibleText]);

    return (
        <div className={isOpen ? 'modal open' : 'modal'}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <div dangerouslySetInnerHTML={{ __html: visibleText }}></div>
            </div>
        </div>
    );
};

const DBRModal = (props) => <ModalComponent {...props} modalText={DBRModalContent} />;
const RobotRadarModal = (props) => <ModalComponent {...props} modalText={RobotRadarModalContent} />;
const RealTimeModal = (props) => <ModalComponent {...props} modalText={RealTimeModalContent} />;
const CPRModal = (props) => <ModalComponent {...props} modalText={CPRModalContent} />;

export {DBRModal,RobotRadarModal,RealTimeModal,CPRModal};