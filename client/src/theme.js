// color design tokens export
// export const colorTokens = {
//   grey: {
//     0: "#FFFFFF",
//     10: "#F6F6F6",
//     50: "#F0F0F0",
//     100: "#E0E0E0",
//     200: "#C2C2C2",
//     300: "#A3A3A3",
//     400: "#858585",
//     500: "#666666",
//     600: "#4D4D4D",
//     700: "#333333",
//     800: "#1A1A1A",
//     900: "#0A0A0A",
//     1000: "#000000",
//   },
//   primary: {
//     50: "#E6FBFF",
//     100: "#CCF7FE",
//     200: "#99EEFD",
//     300: "#66E6FC",
//     400: "#33DDFB",
//     500: "#00D5FA",
//     600: "#00A0BC",
//     700: "#006B7D",
//     800: "#00353F",
//     900: "#001519",
//   },
// };

export const colorTokens = {
  grey: {
  0: "#FFFFFF",
  10: "#F5F5F5",
  50: "#EBEBEB",
  100: "#D9D9D9",
  200: "#BFBFBF",
  300: "#A6A6A6",
  400: "#8C8C8C",
  500: "#737373",
  600: "#595959",
  700: "#404040",
  800: "#262626",
  900: "#0D0D0D",
  1000: "#000000",
  },
  primary: {
  50: "#E6F4F1",
  100: "#CCE9E3",
  200: "#99D3C7",
  300: "#66BDAB",
  400: "#33968F",
  500: "#007F73",
  600: "#00655C",
  700: "#004B45",
  800: "#003030",
  900: "#001919",
  },
  };

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
