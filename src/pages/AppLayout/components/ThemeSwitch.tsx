import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "shared";

export const ThemeSwitch = () => {
  const [currentThemeMode, setCurrentThemeMode] = useThemeMode();
  return (
    <IconButton
      sx={{
        ml: 1,
        "& path": { color: currentThemeMode === "dark" ? "#ff9800" : "#000" },
      }}
      onClick={() =>
          setCurrentThemeMode(currentThemeMode === "dark" ? "light" : "dark")
      }
    >
      {currentThemeMode === "dark" ? (
        <Brightness7Icon sx={{ "& path": { color: "warning.main" } }} />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};
