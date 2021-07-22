import { Sidebar, DashboardContainer, Wallet } from "../Components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.section`
    padding: 3rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1100px) {
        padding: 3rem 2.5rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 3rem 1.5rem;
    }
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
