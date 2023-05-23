import React, { useState, useEffect } from 'react';

const CPSModal = ({ isOpen, onClose }) => {
    const modalText = `
    <p>As a researcher at the Cyber Physical Systems Lab SUNY Oswego, I developed a Collaborative Adaptive Cruise Control (CACC) system that allows 
    vehicles to communicate with each other and negotiate speed to maintain a safe and efficient driving distance. The system went through four simulation phases, 
    starting with the vehicle sensing phase where it detects its own distance, speed, and relative position. The communication phase allows the vehicle to communicate with other cars in its vicinity. 
    In the control phase, the vehicle uses sensing data to determine the speed for a safe distance with a control algorithm. Finally, in the negotiation phase, each vehicle proposes a speed and acceleration value, 
    and they negotiate with one another to agree on a value that is safe and efficient for the platoon. With this CACC system, we were able to improve traffic flow and reduce the likelihood of accidents in urban areas.</p>

    <p>For further information about this project, you can check it out on <a href="https://github.com/tenbergen/Urban-CPS" style="color: #00FF00; text-decoration: underline;">GitHub</a>.</p>
    
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

export default CPSModal;
