import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import Banner from "./Components/Banner";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Nav />
                        <Banner />
                        <Link to="/contact">Contact us</Link>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
