import React from 'react';
import Console from 'react-console-emulator';

const Terminal = ({ commands }) => (
    <div>
        <Console commands={commands} autoFocus={true} />
    </div>
);

export default Terminal;
