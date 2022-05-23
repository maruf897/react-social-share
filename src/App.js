import './App.css';
import Home from "./app/home/home";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import About from './app/about/about';

function App() {
    return (
        <div>
            <Helmet>
                <title>App Title</title>
                <meta name="og:title" content="React share" />
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <BrowserRouter>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" exact
                        element={<Home />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
