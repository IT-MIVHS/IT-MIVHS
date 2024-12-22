import './App.css';
import { start_observe } from "./observer.js";
import React, { useEffect, Suspense } from 'react';
import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Project from './components/project/project.jsx';
import Contact from './components/contact/contact.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RobotComponents from './components/robotComponent/robotComponents.jsx';
import BackgroundCircle from './components/bgComponents/bgCircle.jsx';

function App() {
    useEffect(() => {
        start_observe();
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Suspense fallback={<div className="custom-loader"></div>}>
                    <BackgroundCircle />
                    <RobotComponents />
                    <div className="App w-full sm:max-w-7xl mx-auto">
                        {/* Header tetap ada di semua halaman */}
                        <Header />
                        <Home />
                        <About />
                        <Project />
                        <Contact />
                    </div>
                </Suspense>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
