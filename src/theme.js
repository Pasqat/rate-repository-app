import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    appBarBackground: "#24292e",
    mainBackground: "#e1e4e8",
    error: "#d73a4a",
  },
  fontSizes: {
    title: 20,
    body: 16,
    subheading: 18,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  border: {
    defaultRadius: 4,
  },
};

export default theme;
