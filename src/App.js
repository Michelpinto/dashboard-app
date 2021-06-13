import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
