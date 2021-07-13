import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Globalstyles";
import theme from "./Device";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </>
    );
}

export default App;
