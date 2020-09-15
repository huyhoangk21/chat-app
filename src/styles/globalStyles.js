import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    font-size: 16px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
