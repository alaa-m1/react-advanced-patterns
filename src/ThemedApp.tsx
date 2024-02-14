import { Theme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { getTheme } from "theme/getTheme";
import { CssBaseline } from "@mui/material";
import { useThemeMode } from "shared/hooks";
import "./assets/style/App.scss";
import { ThemeProvider } from "styled-components";
const ThemedApp = ({ children }: ThemedAppProps) => {
  const [currentThemeMode] = useThemeMode();
  const theme = useMemo<Theme>(
    () => (currentThemeMode === "light" ? getTheme("light") : getTheme("dark")),
    [currentThemeMode]
  );
  const styledTheme = {
    main: currentThemeMode === "light" ? "#fff" : "#121212",
  };
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={styledTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

type ThemedAppProps = { children: React.ReactNode };

export default ThemedApp;
