import React, { useState, useEffect } from 'react';

const FreeMoCapModal = ({ isOpen, onClose }) => {
    const modalText = `

    <p>As a researcher for the Cognitive Dynamics Lab at SUNY Oswego, I developed a research-grade markerless motion capture program using OpenPose and DeepLabCu for data collection. 
    To ensure high accuracy, I calibrated the software using Charuco Boards and achieved an accuracy rate of 99.3%. I also streamlined the data collection process 
    by developing custom scripts in Python, resulting in an increase in efficiency of up to 25%. Additionally, I conducted a study using motion capture technology to investigate free recall 
    and explore how the search and retrieval process within our brains changes when given the same task multiple times. This research has the potential to shed light on the neural mechanisms 
    underlying memory processes and has important implications for improving our understanding of human cognition.</p>
    
    <p>For further information about this project, you can check it out on <a href="https://github.com/asigdel29/freemocap">GitHub</a></p>

  `;

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

export default FreeMoCapModal;
