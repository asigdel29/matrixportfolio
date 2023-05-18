import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Misc from './pages/Misc';
import MainPage from './pages/MainPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/misc" element={<Misc />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
    </Router>
);

export default App;
