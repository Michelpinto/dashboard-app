import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


*, input, button {
    font-family: 'Roboto', sans-serif;
}

html {
        font-size: 62.5%;

        @media ${(props) => props.theme.breakpoints.md} {
        font-size: 50%;
    }
}

a {
    text-decoration: none;
}
`;
