import React, { useState, useEffect } from 'react';
import cpsModalContent from './PageContent/cpsModalContent.html';
import freeMoCapModalContent from './PageContent/freeMoCapModalContent.html';
import internationalTradeModalContent from './PageContent/internationalTradeModalContent.html';

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
    },  [isOpen, typingIndex]);

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

const CPSModal = (props) => <ModalComponent {...props} modalText={cpsModalContent} />;
const FreeMoCapModal = (props) => <ModalComponent {...props} modalText={freeMoCapModalContent} />;
const InternationalTradeModal = (props) => <ModalComponent {...props} modalText={internationalTradeModalContent} />;

export { CPSModal, FreeMoCapModal, InternationalTradeModal };