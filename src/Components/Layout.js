// import React from 'react';
import MatrixRain from './MatrixRain';
import Console from 'react-console-emulator';
import React, { useState, useEffect } from 'react';

const Layout = ({ commands, children }) => {
   // const navigate = useNavigate();
    const [dynamicWelcome, setDynamicWelcome] = useState('');
    const [isTypingDone, setIsTypingDone] = useState(false);

    const welcomeMessage = "Heere in the Matrix if you're stuck, you can always ask for help";
    const welcomeText = welcomeMessage.split('');

    useEffect(() => {
        let messageIndex = 0;
        const welcomeMessageInterval = setInterval(() => {
            if (messageIndex < welcomeText.length) {
                setDynamicWelcome((prev) => prev + welcomeText[messageIndex]);
                messageIndex++;
            } else {
                clearInterval(welcomeMessageInterval);
            }
        }, 80);

        return () => clearInterval(welcomeMessageInterval);
    }, []);

    const terminalStyle = {
            backgroundColor: '#000000a1',
            minHeight: '300px',
            minWidth: '500px',
            maxWidth: '500%',
            maxHeight: '100%',
            border: '5px solid #007500',
            borderRadius: '5px',
    };

    const terminalinput ={
        color: '#0BDA51',
        fontSize: '15px',
        fontFamily: 'monospace'
    }

    const terminalinputStyle={
            display: 'inline-flex',
            width: '100%'
    }

    const terminaltext={
        paddingTop: '3px',
        color: '#0BDA51'
    }

    const inputstyle={
        fontSize: '15px',
        color: '#0BDA51',
        fontFamily: 'monospace'
    }

    return (
        <div style={{ position: 'relative' }}>
            <MatrixRain style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />
            <div
                className="terminal-container"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                }}
            >
                <p style={{ color: '#32CD32', fontFamily: 'monospace' }}>
                    {dynamicWelcome.replace("undefined", "")}
                </p>

                <Console
                    commands={commands}
                    autoFocus={true}
                    style={terminalStyle}
                    contentStyle={terminalinput}
                    inputAreaStyle={terminalinputStyle}
                    promptLabelStyle={terminaltext}
                    inputTextStyle={inputstyle}
                    promptLabel={'Anu@Matrix:~$'}
                />
            </div>
            {children}
        </div>
    );
};

export default Layout;