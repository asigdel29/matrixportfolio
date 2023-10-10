import React, { useState, useEffect } from 'react';
import repoContent from './Page Content/Repo'; // Assuming you've stored the content in these files
import cogsciContent from './Page Content/CogSci';
import sweContent from './Page Content/SWE';

const ModalComponent = ({ isOpen, onClose, modalText, images }) => {
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
                {images && images.map((img, idx) => (
                    <img key={idx} src={img} alt={`Modal Image ${idx + 1}`} />
                ))}
            </div>
        </div>
    );
};

const CognitiveScienceLinks = (props) => <ModalComponent {...props} modalText={cogsciContent} />;
const SoftwareEngineeringLinks = (props) => <ModalComponent {...props} modalText={sweContent} />;
const Repositories  = (props) => <ModalComponent {...props} modalText={repoContent} />;

export { CognitiveScienceLinks, SoftwareEngineeringLinks, Repositories };
