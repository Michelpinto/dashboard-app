import { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Activity from "./Activity";
import { Router, Link, Route, Switch } from "react-router-dom";

// Styling
const Container = styled.div`
    width: 50%;
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

export const Block = styled.div`
    margin-top: 4rem;
    height: 3rem;
`;

const useStyles = makeStyles({
    root: {
        padding: "3rem",
        width: "15rem",
        height: "15rem",
        borderRadius: "1.5rem",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        color: "#345678",
        cursor: "pointer",
    },
});

// Object Array

const Accounts = ({ balance, savBalance, activity, savActivity }) => {
    const [isActive, setIsActive] = useState("checking");
    const classes = useStyles();

    return (
        <Container>
            <Tittle>Accounts</Tittle>
            <Div>
                {/* {accounts.map((acc) => (
                    <Card className={classes.root} key={acc.id}>
                        <h2>{acc.name}</h2>
                        <h4>Acc balance</h4>
                        <p>{acc.id === 0 ? balance : savBalance} €</p>
                    </Card>
                ))} */}
                <Card
                    className={classes.root}
                    onClick={() => {
                        setIsActive("checking");
                    }}
                >
                    <h2>Checking</h2>
                    <h4>Acc balance</h4>
                    <p>{balance} €</p>
                </Card>

                <Card
                    className={classes.root}
                    onClick={() => {
                        setIsActive("savings");
                    }}
                >
                    <h2>Savings</h2>
                    <h4>Acc balance</h4>
                    <p>{savBalance} €</p>
                </Card>
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
