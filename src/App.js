import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <h1>Home page</h1>
                        <Link to="/contact">Contact us</Link>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
