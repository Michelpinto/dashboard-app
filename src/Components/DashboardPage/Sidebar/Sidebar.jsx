import { Link } from "react-router-dom";

import styled from "styled-components";
import { Profile, Tabs, Button, Line } from "./styles";
import profile from "../../../Assets/user.jpg";

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

const Sidebar = () => {
    return (
        <SideBar>
            <Profile>
                <img src={profile} alt="profile_picture" />
                <p>Michel Pinto</p>
            </Profile>

            <Tabs>
                <Link style={{ textDecoration: "none" }} to="/Dashboard">
                    <Button>
                        <i className="ri-dashboard-line"></i>
                        <p>Dashboard</p>
                    </Button>
                </Link>

                <Link style={{ textDecoration: "none" }} to="/Dashboard/Wallet">
                    <Button>
                        <i className="ri-wallet-line"></i>
                        <p>Wallet</p>
                    </Button>
                </Link>

                <Button>
                    <i className="ri-bank-card-line"></i>
                    <p>Transactions</p>
                </Button>
            </Tabs>
            <Line></Line>

            <Tabs>
                <Button>
                    <i className="ri-account-circle-line"></i>
                    <p>Account</p>
                </Button>
                <Button>
                    <i className="ri-settings-2-line"></i>
                    <p>Settings</p>
                </Button>
            </Tabs>
        </SideBar>
    );
};

export default Sidebar;
