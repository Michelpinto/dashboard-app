import styled from "styled-components";

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 400px) {
        display: none;
    }

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

        @media ${(props) => props.theme.breakpoints.sm} {
            width: 5rem;
            height: 5rem;
        }

        @media ${(props) => props.theme.breakpoints.xs} {
            & p {
                display: none;
            }
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

    @media ${(props) => props.theme.breakpoints.sm} {
        gap: 1rem;
    }

    @media screen and (max-width: 500px) {
        gap: 0.5rem;
    }

    @media ${(props) => props.theme.breakpoints.xs} {
        & p {
            display: none;
        }
    }
`;

export const Line = styled.span`
    width: 16.5rem;
    margin-top: 3rem;
    border: solid 0.15px #506d8b;

    @media screen and (max-width: 1000px) {
        width: 12.5rem;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        display: none;
    }
`;
