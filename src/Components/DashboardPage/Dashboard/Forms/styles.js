import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export default makeStyles((muiBaseTheme) => ({
    card: {
        width: "35rem",
        height: "100%",
        color: "#506d8b",

        padding: "3rem",

        "@media (min-width: 1100px)": {
            card: {
                width: "32.5rem",
            },
        },
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

export const CardDiv = styled.div`
    height: 100%;
    width: 35rem;
    color: #506d8b;

    padding: 3rem;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    /* @media ${(props) => props.theme.breakpoints.xl} {
        width: 33.5rem;
        padding: 2rem;
    } */

    @media screen and (max-width: 1100px) {
        padding: 2rem;
        width: 32.5rem;
    }
`;

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
