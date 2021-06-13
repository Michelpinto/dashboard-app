import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export default makeStyles((muiBaseTheme) => ({
    card: {
        width: "35rem",
        height: "100%",
        color: "#506d8b",

        padding: "3rem",
    },

    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: -muiBaseTheme.spacing(1),
        },
        textAlign: "center",
        marginBottom: "2rem",
    },

    divider: {
        marginTop: "3rem",
    },
    margin: {
        // margin: "-2rem",
    },
}));

export const Title = styled.h1`
    margin-bottom: 2rem;
`;

export const Text = styled.p`
    font-size: 1.5rem;
`;

export const Forms = styled.div`
    display: flex;
    flex-direction: column;

    & h3 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
`;

export const Button = styled.button`
    margin-top: 2rem;
    background-color: #32465b;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    height: 4rem;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SecondForms = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
`;
