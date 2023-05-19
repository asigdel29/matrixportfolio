import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';
import '../Styles/styles.css';

const Modal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>
                    As an international student from Nepal pursuing a double major in computer science and cognitive science,
                    I have always been fascinated by the intersection of technology and the human mind. This curiosity led me
                    to pursue a career in software engineering, where I can apply my technical and cognitive skills to solve
                    real-world problems.
                </p>
                <p>
                    I have developed a wide variety of skills from my previous internship, research assistantships and academic
                    studies. During my undergraduate studies, I had the opportunity to work on several projects that allowed me
                    to develop my programming skills and gain a deeper understanding of computational systems. I also had the
                    opportunity to intern at a startup company, where I learned the importance of teamwork and effective communication
                    in the software development process.
                </p>
                <p>
                    Currently, I am looking for opportunities in software engineering. In my spare time, I enjoy solving coding challenges
                    to further enhance my skills and stay up-to-date with the latest technologies. I am currently working on a calibrated
                    peer review tool which functions as a highly scalable web application that assists the process of coordinating and
                    evaluating peer reviews of student work.
                </p>
                <p>
                    I am open to roles as a software engineer, data scientist, and machine learning engineer. If you have any questions
                    or would like a copy of my resume, I'd love to connect!
                </p>
                <p>
                    Skills Include:
                    Certifications: AWS Academy Cloud Foundations, AWS Academy Cloud Security Foundations, IBM Applied Data Science
                    Specialization
                    Computer Science: Java, C, C#, C++, Scala, Prolog, Go, Python, Lisp, AWS, Docker, React, Angular, CSS
                    Data Analytics: SQL, R, NoSQL, Tableau, Excel
                    Project Management: DevOps, Agile Development, Git, Kubernetes, Continuous integration and continuous delivery (CI/CD),
                    Machine Learning: TensorFlow, Keras, Natural Language Processing, Spark
                </p>
            </div>
        </div>
    );
};

const About = () => {
    const navigate = useNavigate();
    const [isBioOpen, setIsBioOpen] = useState(false);

    const commands = {
        ls: {
            description: 'Show everything on the page',
            fn: function () {
                return 'Resume\nLinkedin\nGithub\nEmail\nBio';
            }
        },

        about: {
            description: 'You are here',
            fn: function () {
                return 'You are already at the about page';
            }
        },

        projects: {
            description: 'Go to Projects page',
            fn: function () {
                setTimeout(function () {
                    navigate('/projects');
                }, 1200);
                return 'Redirecting to the projects Page ...';
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
                return 'Redirecting to the Main Page ...';
            }
        },

        Resume: {
            description: 'Go to Resume page',
            fn: function () {
                setTimeout(function () {
                    window.open('https://cs.oswego.edu/~asigdel/Resume.pdf', '_blank');
                }, 1200);
                return 'Redirecting to the resume page...';
            }
        },

        Linkedin:{
            description: 'Go to Linkedin profile',
            fn: function () {
                setTimeout(function () {
                    window.open('https://www.linkedin.com/in/asigdel/', '_blank');
                }, 1200);
                return 'Redirecting to the Linkedin Profile ...';
            }
        },

        Github:{
            description: 'Go to Github profile',
            fn: function () {
                setTimeout(function () {
                    window.open('https://www.github.com/asigdel29/', '_blank');
                }, 1200);
                return 'Redirecting to the Github Profile ...';
            }
        },

        Email: {
            description: 'Shoot me an email',
            fn: function () {
                setTimeout(function () {
                    window.open('mailto:sigdelanubhav@gmail.com', '_blank');
                }, 1200);
                return 'I tend to respond quick';
            }
        },

        Bio: {
            description: 'A little about me',
            fn: function () {
                setIsBioOpen(true);
            }
        }
    };

    return (
        <Layout commands={commands}>
            {isBioOpen && (
                <Modal onClose={() => setIsBioOpen(false)} />
            )}
            <button onClick={commands.Bio.fn} style={{ backgroundColor: 'black', color: '#00FF00', fontFamily: 'monospace', zIndex: 100, visibility: 'hidden', }}>Bio</button>
        </Layout>
    );
}

export default About;
