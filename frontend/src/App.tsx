import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PlayerPage from './pages/PlayerPage';
import CoachPage from './pages/CoachPage';
import logo from './assets/logo.png';
import {useEffect} from "react";

export default function App() {
    function toggleTheme() {
        const colorScheme = document.documentElement.getAttribute('data-color-scheme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-color-scheme', colorScheme);
        localStorage.setItem('color-scheme', colorScheme);
    }

    useEffect(() => {
        const colorScheme = localStorage.getItem('color-scheme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        document.documentElement.setAttribute('data-color-scheme', colorScheme);

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
            if(!localStorage.getItem('color-scheme')) {
                document.documentElement.setAttribute('data-color-scheme', event.matches ? 'dark' : 'light');
            }
        });

    }, []);

    return (
        <BrowserRouter>
            <header>
                <nav className="container">
                    <NavLink to="/">Player</NavLink>
                    <NavLink to="/coach">Coach</NavLink>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<PlayerPage />} />
                <Route path="/coach" element={<CoachPage />} />
            </Routes>
            <footer style={{flex: 1}}>
                <img src={logo} className="logo" alt="Brand Logo" />
                <button className="theme-toggle" onClick={() => toggleTheme()}>🌙</button>
            </footer>
        </BrowserRouter>
    );
}
