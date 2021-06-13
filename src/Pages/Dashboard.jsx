import { Sidebar, DashboardContainer, Wallet } from "../Components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.section`
    min-height: auto;
    padding: 3rem;

    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #345678;
    transition: all 0.2s;
    &:hover {
        color: #506d8b;
        transform: translateX(2px);
    }
`;

const Dashboard = () => {
    return (
        <Wrapper>
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path="/Dashboard">
                        <DashboardContainer />
                    </Route>

                    <Route exact path="/Dashboard/Wallet">
                        <Wallet />
                    </Route>
                </Switch>
            </Router>

            <Link style={{ textDecoration: "none" }} to="/">
                <Button>
                    <i className="ri-logout-circle-r-line"></i>
                </Button>
            </Link>
        </Wrapper>
    );
};

export default Dashboard;
