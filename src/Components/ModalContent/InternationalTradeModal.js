import React, { useState, useEffect } from 'react';

const InternationalTradeModal = ({ isOpen, onClose }) => {
    const modalText = `
    <p>As a Data Analyst for the School of Business at SUNY Oswego, I utilized my expertise in data acquisition and organization to generate actionable 
    insights and develop innovative data visualization strategies. I conducted complex data analyses using Python, Tableau, and Gephi, and used these tools 
    to create compelling visual representations of my findings. By leveraging my skills in data analysis and visualization, I was able to provide valuable insights
     to the School of Business that helped inform decision-making and drive improvements in performance.</p>
     
     <p>For further information about this project, you can check out my QUEST research symposium <a href="https://docs.google.com/presentation/d/1aIy3tss3UV1IjCYLcwTVSv51hs2AkBwCuqDLCaZFXB4/edit#slide=id.p" style="color: #00FF00; text-decoration: underline;">presentation</a>.</p>

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

export default InternationalTradeModal;
