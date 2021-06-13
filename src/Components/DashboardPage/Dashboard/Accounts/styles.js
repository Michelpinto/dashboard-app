import styled from "styled-components";

export const Container = styled.div`
    /* margin-top: 2rem; */
`;

// export const Block = styled.div`
//     height: 3rem;
// `;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 2rem 0;
    /* font-size: 1.5rem; */
    border-bottom: 1px solid #c4c4c4;

    &:last-child {
        border: none;
    }
`;

export const Info = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 30rem;

    & p {
        font-weight: 400;
        font-size: 1.5rem;
    }
`;

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const Div = styled.div`
    overflow-y: scroll;
    max-height: 39rem;
`;
