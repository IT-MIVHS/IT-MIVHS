import './App.css';
import React, { useEffect } from 'react';
import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Project from './components/project/project.jsx';
import { Suspense } from 'react';

function App() {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "./observer.js";
        script.async = true;

        if (!Array.from(document.body.children).find(element => element.tagName === "SCRIPT")) {
            document.body.appendChild(script);
        }
    }, []);

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
