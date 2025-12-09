import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MatrixBackground from './components/MatrixBackground';
import HomeView from './views/HomeView';
import TerminalView from './views/TerminalView';
import ProjectsView from './views/ProjectsView';
import ManifestoView from './views/ManifestoView';

const AUTHOR_NAME = "808THRONE";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-zinc-300 selection:bg-green-500 selection:text-black font-mono">

        {/* VISUAL LAYERS */}
        <MatrixBackground />
        <div className="scanlines"></div>
        <div className="crt-flicker"></div>
        <div className="vignette"></div>

        <Navigation />

        <main className="relative z-10 animate-in fade-in duration-500">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/terminal" element={<TerminalView />} />
            <Route path="/projects" element={<ProjectsView />} />
            <Route path="/manifesto" element={<ManifestoView />} />
          </Routes>
        </main>

        <footer className="relative z-10 border-t border-zinc-900 py-8 text-center font-mono text-xs text-zinc-700 mt-auto bg-black/80">
          <p>SYSTEM ID: {AUTHOR_NAME} // VERSION 3.0.0 // DOOM KERNEL</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
