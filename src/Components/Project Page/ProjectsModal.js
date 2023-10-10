import React, { useState, useEffect } from 'react';
import DBRModalContent from './PageContent/DBRContent';
import RealTimeModalContent from './PageContent/RealTimeContent';
import RobotRadarModalContent from './PageContent/RobotRadarContent';
import CPRModalContent from './PageContent/CPRContent';
import TeacherAttendanceMonitoringSystemContent from './PageContent/TeacherAttendanceMonitoringSystemContent';
import FPSGameContent from './PageContent/FPSGameContent';
import FAREContent from './PageContent/FAREContent';
import CPRImage from './PageContent/CPR1.png';
import CPRImage2 from './PageContent/CPR2.png';
//import robotRadarImage1 from './PageContent/topview.png';
import robotRadarImage2 from './PageContent/radarGUI.png';

const ModalComponent = ({ isOpen, onClose, modalText, images }) => {
    const [visibleText, setVisibleText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const typingSpeed = 8;

    {images && images.map((img, idx) => (
        <img key={idx} src={img} alt={`Modal Image ${idx + 1}`} />
    ))}

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
                {images && images.map((img, idx) => (
                    <img key={idx} src={img} alt={`Modal Image ${idx + 1}`} />
                ))}
            </div>
        </div>
    );
};

const DBRModal = (props) => <ModalComponent {...props} modalText={DBRModalContent} />;
const RobotRadarModal = (props) => <ModalComponent {...props} modalText={RobotRadarModalContent} images={[robotRadarImage2]} />;
const RealTimeModal = (props) => <ModalComponent {...props} modalText={RealTimeModalContent} />;
const CPRModal = (props) => <ModalComponent {...props} modalText={CPRModalContent} images={[CPRImage, CPRImage2]} />;
const TeacherAttendanceModal = (props) => <ModalComponent {...props} modalText={TeacherAttendanceMonitoringSystemContent} />;
const FPSGameModal = (props) => <ModalComponent {...props} modalText={FPSGameContent} />;
const FAREModal = (props) => <ModalComponent {...props} modalText={FAREContent} />;

export { DBRModal, RobotRadarModal, RealTimeModal, CPRModal, TeacherAttendanceModal, FPSGameModal, FAREModal };