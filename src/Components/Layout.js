import React from 'react';
import MatrixRain from './MatrixRain';
import Console from 'react-console-emulator';
import { useNavigate } from 'react-router-dom';

const Layout = ({ commands, children }) => {
    const navigate = useNavigate();

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
                <Console commands={commands} autoFocus={true} />
            </div>
            {children}
        </div>
    );
};

export default Layout;
