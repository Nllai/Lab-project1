import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
