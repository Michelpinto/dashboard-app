import { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Activity from "./Activity";
import { Router, Link, Route, Switch } from "react-router-dom";

// Styling
const Container = styled.div`
    width: 50%;

    @media screen and (max-width: 1100px) {
        width: 47.5%;
    }
`;

const Div = styled.div`
    display: flex;
    gap: 3rem;

    & h2 {
        font-weight: 400;
        font-size: 2rem;
    }

    & h4 {
        font-size: 1.4rem;
        color: #b1b1b1;
    }

    & p {
        font-size: 1.7rem;
        font-weight: 600;
    }
`;

const Tittle = styled.h1`
    margin-bottom: 2rem;
`;

const Block = styled.div`
    margin-top: 4rem;
    height: 3rem;
`;

const CardDiv = styled.div`
    padding: 3rem;
    width: 15rem;
    height: 15rem;
    border-radius: 1.5rem;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: #506d8b;
    cursor: pointer;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    @media screen and (max-width: 1000px) {
        padding: 2rem;
        width: 13.5rem;
        height: 13.5rem;
    }
`;

// Object Array

const Accounts = ({ balance, savBalance, activity, savActivity }) => {
    const [isActive, setIsActive] = useState("checking");

    return (
        <Container>
            <Tittle>Accounts</Tittle>
            <Div>
                <CardDiv
                    onClick={() => {
                        setIsActive("checking");
                    }}
                >
                    <h2>Checking</h2>
                    <h4>Acc balance</h4>
                    <p>{balance} €</p>
                </CardDiv>

                <CardDiv
                    onClick={() => {
                        setIsActive("savings");
                    }}
                >
                    <h2>Savings</h2>
                    <h4>Acc balance</h4>
                    <p>{savBalance} €</p>
                </CardDiv>
            </Div>
            <Block>
                <h1>Recent activity</h1>
            </Block>

            <Activity
                activity={activity}
                savActivity={savActivity}
                isActive={isActive}
            />
        </Container>
    );
};

export default Accounts;
