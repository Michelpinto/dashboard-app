import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import illustration from "../../../Assets/illustration.svg";

const Button = styled.button`
    width: 40rem;
    height: 9rem;
    border-radius: 10px;
    border: none;
    background-color: #345678;
    color: #fff;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
`;

const Icon = styled.button`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    cursor: pointer;

    & i {
        font-size: 3rem;
        color: #345678;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`;

const useStyles = makeStyles((theme) => ({
    card: {
        width: "75%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        gap: "10rem",
        backgroundColor: theme.palette.background.default,
        padding: "3rem",
        color: "#345678",
    },
}));

const Wallet = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Button>
                <Icon>
                    <i className="ri-add-line"></i>
                </Icon>
                <Div>
                    <h3>Add a Wallet</h3>
                    <p>Create your portfolio</p>
                </Div>
            </Button>
            <img
                src={illustration}
                alt="illustration"
                style={{ width: "32rem", color: "#345678" }}
            />
        </Card>
    );
};

export default Wallet;
