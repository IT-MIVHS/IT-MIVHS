import './App.css';
import { start_observe } from "./observer.js";
import React, { useEffect } from 'react';
import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Project from './components/project/project.jsx';
import { Suspense } from 'react';

function App() {
    useEffect(() => {
        start_observe();
    });

    return (
        <Suspense fallback={<div className="custom-loader"></div>}>
            <div className="App">
                <Header />
                <Home />
                <About />
                <Project />
            </div>
        </Suspense>
    );
}

export default App;
