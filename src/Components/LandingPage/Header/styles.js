import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 6rem;
`;

export const UnList = styled.ul`
    display: flex;
    gap: 3rem;
    font-size: 1.5rem;
`;

export const List = styled.li`
    list-style: none;
    cursor: pointer;

    &:hover {
        color: #5a5a5a;
    }
`;

export const Btns = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

export const Button = styled.button`
    height: 3rem;
    width: 6rem;
    border-radius: 5px;
    color: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 8px 16px 36px -11px rgba(0, 0, 0, 0.49);

    background-color: ${(props) => (props.primary ? "#9ca89c" : "#1d1d1d")};
`;
