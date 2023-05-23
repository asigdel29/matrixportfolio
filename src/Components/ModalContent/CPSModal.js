import React, { useState, useEffect } from 'react';

const CPSModal = ({ isOpen, onClose }) => {
    const modalText = `
    <p>As an international student from Nepal with a bachelors double major in computer science and cognitive science, I have always been fascinated by the intersection of technology and the human mind. This curiosity led me to pursue a career in software engineering, where I can apply my technical and cognitive skills to solve real-world problems.</p>

    <p>I am currently pursuing a Masters in Science in BioMedical Health Informatics.</p>

    <p>I have developed a wide variety of skills from my previous internship, research assistantships, and academic studies. During my undergraduate studies, I had the opportunity to work on several projects that allowed me to develop my programming skills and gain a deeper understanding of computational systems. I also had the opportunity to intern at a startup company, where I learned the importance of teamwork and effective communication in the software development process.</p>

    <p>Currently, I am looking for opportunities in software engineering. In my spare time, I enjoy solving coding challenges to further enhance my skills and stay up-to-date with the latest technologies. I am currently working on a calibrated peer review tool which functions as a highly scalable web application that assists the process of coordinating and evaluating peer reviews of student work.</p>

    <p>I am open to roles as a software engineer, data scientist, and machine learning engineer. If you have any questions or would like a copy of my resume, I'd love to connect!</p>

    <p>Skills Include:</p>
    <ul>
      <li>Certifications: AWS Academy Cloud Foundations, AWS Academy Cloud Security Foundations, IBM Applied Data Science Specialization</li>
      <li>Computer Science: Java, C, C#, C++, Scala, Prolog, Go, Python, Lisp, AWS, Docker, React, Angular, CSS</li>
      <li>Data Analytics: SQL, R, NoSQL, Tableau, Excel</li>
      <li>Project Management: DevOps, Agile Development, Git, Kubernetes, Continuous integration and continuous deployment (CI/CD)</li>
      <li>Machine Learning: TensorFlow, Keras, Natural Language Processing, Spark</li>
    </ul>
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
