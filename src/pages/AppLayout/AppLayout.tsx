import {
  Box,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Button,
  FormControlLabel,
  Typography,
  IconButton,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import logoSrc from "assets/images/phoenix.png";
import { LinkInfo } from "types";
import { StyledLink } from "shared";
import { Sidebar, Footer, ThemeSwitch } from "./components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";

type NavigationProps = {
  links: Array<LinkInfo>;
};

const AppLayout = ({ links }: NavigationProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box
        className="navigator-main-container"
        sx={{ flexGrow: 0, color: "secondary.dark" }}
      >
        <AppBar
          className="navigator-container"
          sx={{
            position: "relative",
            paddingRight: "0px !important",
            zIndex: "10001",
          }}
        >
          <Toolbar>
            {isSmallScreen ? (
              <Box className="logo-container">
                <Link to="/">
                  <img src={logoSrc} alt="Logo" />
                </Link>
              </Box>
            ) : (
              <>
                <Box className="logo-container">
                  <Link to="/">
                    <img src={logoSrc} alt="Logo" />
                  </Link>
                </Box>
                <Box className="link-container">
                  <Box>
                    {links.map((link, index) => (
                      <StyledLink
                        key={index}
                        to={link.path}
                        isactive={
                          pathname === link.path ? "active" : "inActive"
                        }
                      >
                        {link.label}
                      </StyledLink>
                    ))}
                  </Box>
                </Box>
              </>
            )}
            {isSmallScreen && (
              <IconButton
                aria-label="Open menu drawer"
                onClick={() => setOpen(!open)}
              >
                <MenuOutlinedIcon></MenuOutlinedIcon>
              </IconButton>
            )}
            <ThemeSwitch />
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Box sx={{ flexGrow: 0 }}>
          <Sidebar isSmallScreen={isSmallScreen} fullWidth={open} onCloseSideBar={(v) => setOpen(v)} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <main>
            <Outlet />
          </main>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default AppLayout;
