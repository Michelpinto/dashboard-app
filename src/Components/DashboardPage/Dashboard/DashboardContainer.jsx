import { useState } from "react";
import Accounts from "./Accounts/Accounts";

import FormsContainer from "./Forms/FormsContainer";
import styled from "styled-components";

// Styles

const CardDiv = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f9f9f9;
    padding: 2rem;
    color: #345678;

    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    @media ${(props) => props.theme.breakpoints.lg} {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 400px) {
        width: 85%;
    }
`;

// Objects
const accounts = [
    {
        id: 0,
        name: "Checking",
    },

    {
        id: 1,
        name: "Savings",
    },
];

const DashboardContainer = () => {
    const [value, setValue] = useState({
        accountNumber: "",
        amount: "",
        accountName: "",
        secondAmount: "",
    });

    const [balance, setBalance] = useState(600);
    const [savBalance, setSavBalance] = useState(900);
    const [activity, setActivity] = useState([
        {
            type: "Cinema",
            date: "May 22, 10:30 PM",
            movement: -30,
        },

        {
            type: "Netflix",
            date: "May 21, 09:00 AM",
            movement: -9.99,
        },
        {
            type: "Nike",
            date: "May 12, 10:30 AM",
            movement: -250,
        },
        {
            type: "Rent",
            date: "Feb 05, 12:00 AM",
            movement: -1700,
        },
        {
            type: "Grosseries",
            date: "Jan 02, 05:40 PM",
            movement: -200,
        },
    ]);
    const [savActivity, setSavActivity] = useState([
        {
            type: "Deposit",
            date: "Feb 22, 10:30 PM",
            movement: 900,
        },
    ]);

    // dates
    const today = new Date();
    const day = `${today.getDate()}`.padStart(2, 0);
    const month = today.toLocaleString("default", { month: "short" });
    const hours = `${today.getHours() % 12 || 12}`.padStart(2, 0);
    const min = `${today.getMinutes()}`.padStart(2, 0);

    // Functions
    const handleChange = (prop) => (e) => {
        setValue({ ...value, [prop]: e.target.value });
    };

    const handleTransfer = () => {
        // Destructuring
        const { amount, accountNumber } = value;
        let digits = /^[0-9]{4}$/.test(accountNumber);

        // Handling the transfer
        if (amount > 0 && balance >= amount && digits === true) {
            setBalance(balance - amount);
            setActivity((array) => [
                {
                    type: "Payment",
                    date: `${month} ${day}, ${hours}:${min} ${
                        hours >= 12 ? "AM" : "PM"
                    }`,
                    movement: `-${amount}`,
                },
                ...array,
            ]);
        }
    };

    const handleIntraTransfer = () => {
        const { secondAmount, accountName } = value;

        if (
            secondAmount > 0 &&
            savBalance >= secondAmount &&
            accountName === "checking"
        ) {
            setSavBalance(savBalance - secondAmount);
            setBalance(parseInt(balance) + parseInt(secondAmount));
            setActivity((array) => [
                {
                    type: "Deposit",
                    date: `${month} ${day}, ${hours}:${min} ${
                        hours >= 12 ? "AM" : "PM"
                    }`,
                    movement: `${secondAmount}`,
                },
                ...array,
            ]);
            setSavActivity((array) => [
                {
                    type: "Payment",
                    date: `${month} ${day}, ${hours}:${min} ${
                        hours >= 12 ? "AM" : "PM"
                    }`,
                    movement: `-${secondAmount}`,
                },
                ...array,
            ]);
        }

        if (
            secondAmount > 0 &&
            balance >= secondAmount &&
            accountName === "savings"
        ) {
            setBalance(balance - secondAmount);
            setSavBalance(parseInt(savBalance) + parseInt(secondAmount));
            setActivity((array) => [
                {
                    type: "Payment",
                    date: `${month} ${day}, ${hours}:${min} ${
                        hours >= 12 ? "AM" : "PM"
                    }`,
                    movement: `-${secondAmount}`,
                },
                ...array,
            ]);
            setSavActivity((array) => [
                {
                    type: "Deposit",
                    date: `${month} ${day}, ${hours}:${min} ${
                        hours >= 12 ? "AM" : "PM"
                    }`,
                    movement: `${secondAmount}`,
                },
                ...array,
            ]);
        }
    };

    return (
        <CardDiv>
            <Accounts
                accounts={accounts}
                balance={balance}
                savBalance={savBalance}
                activity={activity}
                savActivity={savActivity}
            />
            <FormsContainer
                value={value}
                handleChange={handleChange}
                handleTransfer={handleTransfer}
                handleIntraTransfer={handleIntraTransfer}
            />
        </CardDiv>
    );
};

export default DashboardContainer;
