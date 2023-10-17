import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  Box,
  Typography,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import { MouseEvent, useState } from "react";

import { Link } from "react-router-dom";
import logoSrc from "assets/images/phoenix.png";
import { LinkInfo } from "types";
import { StyledList } from "./components";
import { sideBarLinksDetails } from "shared";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import clsx from "clsx";

type CustomDrawerProps = {
  fullWidth: boolean;
  isSmallScreen: boolean;
  onCloseSideBar: (value: boolean) => void;
};
const drawerWidth = 240;
export const Sidebar = ({
  fullWidth,
  isSmallScreen,
  onCloseSideBar,
}: CustomDrawerProps) => {
  const drawerLinks: Array<LinkInfo> = [
    ...sideBarLinksDetails,
    { path: "", label: "" },
  ];
  return (
    <>
      <Box
        className={clsx(
          "sidebar-container",
          { "sidebar-full": fullWidth },
          { "sidebar-min": !fullWidth }
        )}
        sx={{
          height: "100%",
          backgroundColor: "secondary.light",
        }}
      >
        {!fullWidth && (
          <IconButton
            aria-label="Open menu drawer"
            onClick={() => onCloseSideBar(!fullWidth)}
          >
            {fullWidth ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
        )}
        {fullWidth && (
          <StyledList
            sx={{ width: "100%", maxWidth: 360 }}
            aria-labelledby="nested-list-subheader"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ListItemButton>
                <Link style={{ width: "100%" }} to={"/advanced-patterns"}>
                  <Typography sx={{ color: "primary.main" }}>
                    React Patterns
                  </Typography>
                </Link>
              </ListItemButton>

              <IconButton
                aria-label="Open menu drawer"
                onClick={() => onCloseSideBar(!fullWidth)}
              >
                {fullWidth ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
              </IconButton>
            </Box>
            {drawerLinks.map((link, index) => {
              if (link.label !== "")
                return (
                  <ListItemButton
                    key={index}
                    // onClick={() => setOpen(false)}
                  >
                    <Link
                      style={{ width: "100%" }}
                      to={`/advanced-patterns?p=${link.path}`}
                    >
                      <Typography
                        sx={{ color: "primary.main" }}
                        className="sidebar-item"
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  </ListItemButton>
                );
              return <div key={index}>&nbsp;</div>;
            })}
            {isSmallScreen && (
              <>
                <ListItemButton>
                  <Link style={{ width: "100%" }} to={"/"}>
                    <Typography sx={{ color: "primary.main" }}>Home</Typography>
                  </Link>
                </ListItemButton>
                <ListItemButton>
                  <Link style={{ width: "100%" }} to={"/about"}>
                    <Typography sx={{ color: "primary.main" }}>
                      About
                    </Typography>
                  </Link>
                </ListItemButton>
              </>
            )}
          </StyledList>
        )}
      </Box>
    </>
  );
};
