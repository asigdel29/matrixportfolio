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
        console.log("Flag 1")
        console.log("Falling characters string" + characters)
        console.log("Binary to Katakana Mapping:\n0110 -> エウ\n1000 -> エア\n0111 -> エイ\n\n0100 -> ウア\n0111 -> エイ\n0100 -> ウア\n0111 -> エイ\n0000 -> アア\n0111 -> エイ\n0011 -> アイ\n0011 -> アイ\n1010 -> ウイ\n0010 -> アウ\n1111 -> エエ\n0010 -> アウ\n1111 -> エエ\n0111 -> エイ\n0111 -> エイ\n0111 -> エイ\n0111 -> エイ\n0010 -> アウ\n1110 -> エウ\n0111 -> エイ\n0010 -> アウ\n1101 -> エウ\n1110 -> エウ\n1101 -> エウ\n0101 -> ウイ\n1101 -> エウ\n0001 -> アイ\n1100 -> エア\n0010 -> アウ\n1100 -> エア\n1010 -> ウイ\n0101 -> ウイ\n1100 -> エア\n0011 -> アイ\n0011 -> アイ\n0111 -> エイ\n0110 -> エウ\n1101 -> エウ\n0010 -> アウ\n1111 -> エエ\n0111 -> エイ\n0111 -> エイ\n0000 -> アア\n1011 -> ウエ\n0100 -> ウア\n0110 -> エウ\n0011 -> アイ\n1010 -> ウイ\n0000 -> アア\n1111 -> エエ\n0111 -> エイ\n0110 -> エウ\n0011 -> アイ\n1101 -> エウ\n0110 -> エウ\n0010 -> アウ\n0100 -> ウア\n0101 -> ウイ\n1101 -> エウ\n1001 -> ウエ\n1011 -> ウエ\n0001 -> アイ\n1000 -> エア\n1101 -> エウ\n0001 -> アイ");
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
