// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components';
import "./index.css";
import App from "./App";
// import theme from './theme';
import { worker } from "./mocks/browser";
worker.start();

// console.log(theme);
// I KEEP GETTING AN ERROR THAT THE THEME MODULE CAN'T BE RESOLVED -- path doesn't work

// trying a different method

const theme = {
    colors: {
        powderWhite: "#FFFDF9",
        persianGreen: "#06B49A",
        lightBlue: "#AFDBD2",
        onyx: "#36313D"
    },
    // fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

ReactDOM.render(<ThemeProvider theme={ theme }><App /></ThemeProvider>, document.getElementById("root"));
