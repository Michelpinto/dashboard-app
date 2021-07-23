import { Content, Info, Text, Div } from "./styles";
import { v4 as uuidv4 } from "uuid";

const Activity = ({ activity, savActivity, isActive }) => {
    return (
        <Div>
            {isActive === "checking" &&
                activity.map((acc) => (
                    <Content key={uuidv4()}>
                        <Info>
                            <p>{acc.type}</p>
                            <p>{acc.date}</p>
                        </Info>
                        <Text>{acc.movement} €</Text>
                    </Content>
                ))}
            {isActive === "savings" &&
                savActivity.map((acc) => (
                    <Content key={uuidv4()}>
                        <Info>
                            <p>{acc.type}</p>
                            <p>{acc.date}</p>
                        </Info>
                        <Text>{acc.movement} €</Text>
                    </Content>
                ))}
        </Div>
    );
};

export default Activity;
