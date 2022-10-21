import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
body {
    width: 100%;
    height: 100%;
    background-color: #ECF0F1;
}
`;