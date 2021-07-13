import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { GlobalStyles } from "./styles/Globalstyles";

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

            <GlobalStyles />
        </>
    );
}

export default App;
