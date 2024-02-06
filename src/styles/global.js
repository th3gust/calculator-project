import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, button{
        font-family: Montserrat;
    }

    body{
        display: grid;
        place-content: center;
        height: 90vh;
    }
`

export default GlobalStyles