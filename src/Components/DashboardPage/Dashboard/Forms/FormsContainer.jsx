import {
    Card,
    TextField,
    Avatar,
    Divider,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
} from "@material-ui/core";

import useStyles, {
    Title,
    Text,
    Forms,
    Button,
    SecondForms,
    Div,
    CardDiv,
} from "./styles";

const faces = [
    "http://i.pravatar.cc/300?img=1",
    "http://i.pravatar.cc/300?img=2",
    "http://i.pravatar.cc/300?img=3",
    "http://i.pravatar.cc/300?img=4",
];

const FormsContainer = ({
    value,
    handleChange,
    handleTransfer,
    handleIntraTransfer,
}) => {
    const classes = useStyles();

    return (
        <CardDiv>
            <Title>Quick Payments</Title>
            <div>
                {faces.map((face) => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                ))}
            </div>
            <Text>Remy Sharp and others...</Text>

            <Forms>
                <h3>Account number</h3>
                <TextField
                    id="outlined-number"
                    value={value.accountNumber}
                    onChange={handleChange("accountNumber")}
                    placeholder="Only 4 digits"
                    label="Account Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <h3>Amount</h3>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={value.amount}
                        type="number"
                        onChange={handleChange("amount")}
                        startAdornment={
                            <InputAdornment position="start">€</InputAdornment>
                        }
                        labelWidth={60}
                    />
                </FormControl>
                <Button onClick={handleTransfer}>Send money</Button>
                <Divider className={classes.divider} />

                <h3>Account transfers</h3>
                <Div>
                    <SecondForms>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="To"
                                type="Text"
                                value={value.accountName}
                                onChange={handleChange("accountName")}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">
                                    Amount
                                </InputLabel>
                                <OutlinedInput
                                    // id="outlined-adornment-amount"
                                    value={value.secondAmount}
                                    type="number"
                                    onChange={handleChange("secondAmount")}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            €
                                        </InputAdornment>
                                    }
                                    labelWidth={60}
                                />
                            </FormControl>
                        </div>
                    </SecondForms>
                    <Button onClick={handleIntraTransfer}>Send money</Button>
                </Div>
            </Forms>
        </CardDiv>
    );
};

export default FormsContainer;
