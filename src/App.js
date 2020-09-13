import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";

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
                        <Link to="/contact">Contact us</Link>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
