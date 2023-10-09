const RobotRadarContent = `
<p>
In a collaborative effort with the Cyber Physical Systems Laboratory at SUNY Oswego, I embarked on a journey to enhance the capabilities of Raspberry Pi-powered robots. These surrogate platforms, designed for autonomous systems, already employed a plethora of sensors like line detectors, distance sensors, and inertial sensors. Paired with ultrasonic translateralization beacons, they boasted an impressive location awareness. Yet, there was room for improvement.
</p>

<p>
A significant challenge arose when multiple robots detected an obstacle; they couldn't discern if it was the same one. This differentiation was crucial for autonomous team navigation. Hence, the objective was clear: design and implement an obstacle "radar" application that not only detects obstacles but can also differentiate between them when detected by multiple robots.
</p>

<p>
Utilizing agile software development methodologies, I created a robust solution. The radar was programmed in Python, efficiently collecting LIDAR sensor readings. Through intricate trigonometric computations, it achieved a remarkable 95% accuracy in calculating target coordinates. This ensured the robots could identify and navigate around obstacles with unparalleled precision.
</p>

<p>
Key features of the application include:
<ul>
<li>Ability to control the GoPiGo2 robots and read sensor data</li>
<li>Display obstacles on a user-friendly interface</li>
<li>Heuristic approach to differentiate between obstacles</li>
<li>Consideration of robot and obstacle movement, both absolute and relative to the robot's position</li>
</ul>
</p>

<p>
This project was realized in cooperation with Bastian Tenbergen. It required not just technical prowess but also adept stakeholder communication, understanding constraints, and working towards the project goals effectively.
</p>

<p>
For a closer look into the technicalities and codebase, you can visit the repository: <a href="https://github.com/asigdel29/RobotRadar" style="color: #00FF00; text-decoration: underline;">GitHub</a>.
</p>
`;

export default RobotRadarContent;
