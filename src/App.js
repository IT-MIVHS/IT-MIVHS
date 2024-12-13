import './App.css';
import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Project from './components/project/project.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Project />
        </div>
    );
}

export default App;
