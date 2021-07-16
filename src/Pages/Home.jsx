import { Header, Hero } from "../Components";

import styled from "styled-components";
import Img from "../Assets/money.jpg";

const Wrapper = styled.div`
    height: 100vh;
    padding: 3rem;
    background: url(${Img}) center no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 1.5rem;
    }
`;

const Home = () => {
    return (
        <Wrapper>
            <Header />
            <Hero />
        </Wrapper>
    );
};

export default Home;
