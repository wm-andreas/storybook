import React from "react";
import theme from "./constants/theme";
import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const decorators = [
  (Story) => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline>
              <Story />
        </CssBaseline>
      </MuiThemeProvider>
  ),
];

export { decorators };
