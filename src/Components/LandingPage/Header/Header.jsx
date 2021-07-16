import React from "react";
import { Container, Content, Btns, Button, UnList, List } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container>
            <Content>
                <h1>FinPay</h1>
                <UnList>
                    <List>Careers</List>
                    <List>About us</List>
                    <List>Contact us</List>
                </UnList>
            </Content>

            <Btns>
                <Button>Sign Up</Button>

                <Link to="/Dashboard">
                    <Button primary>Log In</Button>
                </Link>
            </Btns>
        </Container>
    );
};

export default Header;
