import React from 'react';
import MatrixRain from './MatrixRain';
import Console from 'react-console-emulator';
//import { useNavigate } from 'react-router-dom';

const Layout = ({ commands, children }) => {
   // const navigate = useNavigate();
    const terminalStyle = {
            backgroundColor: 'black',
            minHeight: '300px',
            minWidth: '500px',
            maxWidth: '500%',
            maxHeight: '100%',
            border: '5px solid #007500',
            borderRadius: '5px',
    };

    const terminalinput ={
        color: '#007500',
        fontSize: '15px',
        fontFamily: 'monospace'
    }

    const terminalinputStyle={
            display: 'inline-flex',
            width: '100%'
    }

    const terminaltext={
        paddingTop: '3px',
        color: '#007500'
    }

    const inputstyle={
        fontSize: '15px',
        color: '#007500',
        fontFamily: 'monospace'
    }

    return (
        <div style={{ position: 'relative' }}>
            <MatrixRain style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> {/* Render the MatrixRain component */}
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

                <Console
                    commands={commands}
                    autoFocus={true}
                    style={terminalStyle}
                    contentStyle={terminalinput}
                    inputAreaStyle={terminalinputStyle}
                    promptLabelStyle={terminaltext}
                    inputTextStyle={inputstyle}
                    promptLabel={'Anu@Matrix:~$'}
                    welcomeMessage={"Here in the Matrix if you're stuck, you can always ask for help"}
                />
            </div>

            {children}
        </div>
    );
};

export default Layout;