import styled from "styled-components";

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-bottom: 4rem;

    & p {
        font-size: 1.5rem;
        color: #506d8b;
    }

    & img {
        margin-bottom: 2rem;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;

        @media ${(props) => props.theme.breakpoints.lg} {
            width: 7rem;
            height: 7rem;
        }
    }
`;

export const Tabs = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: fit-content;
`;

export const Button = styled.button`
    display: flex;
    gap: 1.5rem;
    align-items: center;

    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #345678;
    transition: all 0.2s;

    &:hover {
        color: #506d8b;
        transform: translateX(2px);
    }
`;

export const Line = styled.span`
    width: 16.5rem;
    margin-top: 3rem;
    border: solid 0.15px #506d8b;

    @media ${(props) => props.theme.breakpoints.lg} {
        width: 12.5rem;
    }
`;
