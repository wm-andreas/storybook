const { createMuiTheme, responsiveFontSizes } = require("@material-ui/core");

const wmPalette = {
  green: {
    100: "#01AD6F",
    70: "#00D186",
    20: "#97EBBD",
    10: "#D4FDE6",
    5: "#EAFFF4",
  },
  black: {
    100: "#000000",
    90: "#353E44",
    50: "#7F8589",
    40: "#B3B8BC",
    30: "#D1D7DB",
    20: "#EBEEEF",
    10: "F6F8FA",
  },
  blue: {
    100: "#2394C3",
    70: "#3DADDC",
    20: "#DBEFF8",
  },
};


const headings = {
  fontFamily: ["Helvetica Neue", "Helvetica", "Arial"].join(","),
  fontWeight: "bold"
}


const htmlFontSize = 16;

const pxToRem = (inputPx, base = htmlFontSize) => (1 / base) * inputPx;
const pxToRemCssValue = (inputPx, base = htmlFontSize) =>
  `${pxToRem(inputPx, base)}rem`;

let WSGTheme = createMuiTheme({
  props: {
    MuiButton: {
      disableElevation: true,
      color: "primary",
    },
  },
  palette: {
    primary: {
      main: wmPalette.green[70],
      dark: wmPalette.green[100],
      light: wmPalette.green[50],
      contrastText: "#ffffff",
    },
    secondary: {
      main: wmPalette.blue[70],
      dark: wmPalette.blue[100],
      light: wmPalette.blue[20],
      contrastText: "#ffffff",
    },
    text: {
      primary: "#353E44",
      secondary: "#353E44",
    },
    background: {
      default: '#ffffff',
      alternate: wmPalette.black[20],
    },
    // SRC: https://material-ui.com/customization/default-theme/?expand-path=$.typography
    // error: {},
    // warning: {},
    // info: {},
    // success: {},
    /*
    action: {
        active: rgba(0, 0, 0, 0.54)
        hover: rgba(0, 0, 0, 0.04)
        hoverOpacity: 0.04
        selected: rgba(0, 0, 0, 0.08)
        selectedOpacity: 0.08
        disabled: rgba(0, 0, 0, 0.26)
        disabledBackground: rgba(0, 0, 0, 0.12)
        disabledOpacity: 0.38
        focus: rgba(0, 0, 0, 0.12)
        focusOpacity: 0.12
        activatedOpacity: 0.12
    }
    */
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: "8px",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "8px"
      }
    },
    MuiTab: {
      root: {
        textTransform: "none",
        fontWeight: "normal",
      },
    },
    MuiTooltip: {
      root: {
        
      },
      arrow: {
        color: "#ffffff"
      },
      tooltip: {
        backgroundColor: "#ffffff",
        color: "#000000"
      }
    },
    MuiCssBaseline: {
      "@global": {
        actionButton: {
          fontWeight: "bold"
        }
      }
    }
  },
  shadows: [
    "0px 4px 8px rgba(0, 0, 0, 0.08)",
    "0px 4px 8px rgba(0, 0, 0, 0.08)",
    "0px 4px 8px rgba(0, 0, 0, 0.08)",
    "0px 4px 9px rgba(0, 0, 0, 0.08)",
    "0px 4px 9px rgba(0, 0, 0, 0.08)",
    "0px 4px 9px rgba(0, 0, 0, 0.08)",
    "0px 4px 10px rgba(0, 0, 0, 0.09)",
    "0px 4px 10px rgba(0, 0, 0, 0.09)",
    "0px 4px 10px rgba(0, 0, 0, 0.09)",
    "0px 4px 11px rgba(0, 0, 0, 0.09)",
    "0px 4px 11px rgba(0, 0, 0, 0.09)",
    "0px 4px 11px rgba(0, 0, 0, 0.10)",
    "0px 4px 12px rgba(0, 0, 0, 0.10)",
    "0px 4px 12px rgba(0, 0, 0, 0.10)",
    "0px 4px 12px rgba(0, 0, 0, 0.10)",
    "0px 4px 13px rgba(0, 0, 0, 0.10)",
    "0px 4px 13px rgba(0, 0, 0, 0.10)",
    "0px 4px 13px rgba(0, 0, 0, 0.11)",
    "0px 4px 14px rgba(0, 0, 0, 0.11)",
    "0px 4px 14px rgba(0, 0, 0, 0.11)",
    "0px 4px 14px rgba(0, 0, 0, 0.11)",
    "0px 4px 15px rgba(0, 0, 0, 0.11)",
    "0px 4px 15px rgba(0, 0, 0, 0.12)",
    "0px 4px 15px rgba(0, 0, 0, 0.12)",
    "0px 4px 16px rgba(0, 0, 0, 0.12)",
    "0px 4px 16px rgba(0, 0, 0, 0.12)",
    "0px 4px 16px rgba(0, 0, 0, 0.12)",
  ],
  typography: {
    h1: {
      fontFamily: ["Helvetica Neue", "Helvetica", "Arial"].join(","),
      fontWeight: "bold",
      fontSize: pxToRemCssValue(56),
      ...headings
    },
    h2: {
      fontSize: pxToRemCssValue(50),
      ...headings

    },
    h5: {
      fontSize: pxToRemCssValue(20),
      ...headings
    },
    h6: {
      fontSize: pxToRemCssValue(18),
      ...headings
    }
  },
});

WSGTheme = responsiveFontSizes(WSGTheme);

/*
"0px 4px 8px rgba(0, 0, 0, 0.08)",
"0px 4px 8px rgba(0, 0, 0, 0.08)",
"0px 4px 8px rgba(0, 0, 0, 0.08)",
"0px 4px 9px rgba(0, 0, 0, 0.08)",
"0px 4px 9px rgba(0, 0, 0, 0.08)",
"0px 4px 9px rgba(0, 0, 0, 0.08)",
"0px 4px 10px rgba(0, 0, 0, 0.08)",
"0px 4px 10px rgba(0, 0, 0, 0.08)",
"0px 4px 10px rgba(0, 0, 0, 0.08)",
"0px 4px 11px rgba(0, 0, 0, 0.08)",
"0px 4px 11px rgba(0, 0, 0, 0.08)",
"0px 4px 11px rgba(0, 0, 0, 0.08)",
"0px 4px 12px rgba(0, 0, 0, 0.08)",
"0px 4px 12px rgba(0, 0, 0, 0.08)",
"0px 4px 12px rgba(0, 0, 0, 0.08)",
"0px 4px 13px rgba(0, 0, 0, 0.08)",
"0px 4px 13px rgba(0, 0, 0, 0.08)",
"0px 4px 13px rgba(0, 0, 0, 0.08)",
"0px 4px 14px rgba(0, 0, 0, 0.08)",
"0px 4px 14px rgba(0, 0, 0, 0.08)",
"0px 4px 14px rgba(0, 0, 0, 0.08)",
"0px 4px 15px rgba(0, 0, 0, 0.08)",
"0px 4px 15px rgba(0, 0, 0, 0.08)",
"0px 4px 15px rgba(0, 0, 0, 0.08)",
"0px 4px 16px rgba(0, 0, 0, 0.08)",
"0px 4px 16px rgba(0, 0, 0, 0.08)",
"0px 4px 16px rgba(0, 0, 0, 0.08)",
*/

export default WSGTheme;
export { wmPalette };
