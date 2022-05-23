import './App.css';
// import Home from "./app/home/home";
import { Helmet } from "react-helmet";
import { Route, Router, Link, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import About from './app/about/about';

function App() {
    return (

        <BrowserRouter>
            <div>
                <Helmet>
                    <title>App Title</title>
                    <meta name="og:title" content="React share" />
                    <meta name="description" content="App Description" />
                    <meta name="theme-color" content="#008f68" />
                </Helmet>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
export default App;
