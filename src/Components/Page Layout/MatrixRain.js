import React, { useEffect } from 'react';

const MatrixRain = () => {
    useEffect(() => {
        const canvas = document.getElementById('matrix-rain');
        const context = canvas.getContext('2d');

        // Function to set canvas dimensions
        const setCanvasDimensions = () => {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        }

        // Initial set
        setCanvasDimensions();

        // Event listener for window resize
        window.addEventListener('resize', setCanvasDimensions);

        const characters = 'エウエアエイウアエイウアエイアアエイアイアイウイアウエエアウエエエイエイエイエイアウエウエイアウエウウイエウアイエアエアウイウイエアアイアイエウエウアウエエエイエウアイエウウアウイエウウエアイエアエウアイ';
        const columns = canvas.width / 20;
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#0F0';
            context.font = '20px Courier';
            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                context.fillText(text, i * 20, drops[i] * 20);
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const matrixInterval = setInterval(draw, 33);

        return () => {
            clearInterval(matrixInterval);
            // Clean up the event listener on component unmount
            window.removeEventListener('resize', setCanvasDimensions);
        }
    }, []);

    return (
        <canvas id="matrix-rain" className="matrix-rain"></canvas>
    );
};

export default MatrixRain;
