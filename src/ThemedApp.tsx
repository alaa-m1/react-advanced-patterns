import { Theme, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { getTheme } from "theme/getTheme";
import { CssBaseline } from "@mui/material";
import { useThemeMode } from "shared/hooks";
import "./assets/style/App.scss";

const ThemedApp = ({ children }: ThemedAppProps) => {
  const [currentThemeMode] = useThemeMode();
  const theme = useMemo<Theme>(
    () => (currentThemeMode === "light" ? getTheme("light") : getTheme("dark")),
    [currentThemeMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

type ThemedAppProps = { children: React.ReactNode };

export default ThemedApp;
