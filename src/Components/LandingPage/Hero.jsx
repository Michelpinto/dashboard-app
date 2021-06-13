import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Title = styled.h1`
    font-size: 8rem;
    font-weight: 600;
`;

const Text = styled.p`
    font-size: 2rem;
`;

const Hero = () => {
    return (
        <Container>
            <Title>
                Banking <br />
                made simple.
            </Title>
            <Text>
                Create your account with the bank of the future.
                <br /> Everything you need in one app.
            </Text>
            <p>Copyright © by Michel Pinto 2021</p>
        </Container>
    );
};

export default Hero;
