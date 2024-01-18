import { IconButton, Box, Typography, ListItemButton } from "@mui/material";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { LinkInfo } from "types";
import { StyledList } from "./components";
import { StyledLink, sideBarLinksDetails } from "shared";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import clsx from "clsx";

type CustomDrawerProps = {
  fullWidth: boolean;
  isSmallScreen: boolean;
  onCloseSideBar: (value: boolean) => void;
};

export const Sidebar = ({
  fullWidth,
  isSmallScreen,
  onCloseSideBar,
}: CustomDrawerProps) => {
  const drawerLinks: Array<LinkInfo> = [
    ...sideBarLinksDetails,
    { path: "", label: "" },
  ];
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  return (
    <Box
      className={clsx(
        "sidebar-container",
        { "sidebar-full": fullWidth },
        { "sidebar-min": !fullWidth }
      )}
      sx={{
        height: "100%",
        backgroundColor: "secondary.light",
        maxWidth: isSmallScreen ? 150 : 250,
      }}
    >
      {!fullWidth && (
        <IconButton
          aria-label="Open menu drawer"
          onClick={() => onCloseSideBar(!fullWidth)}
          sx={{ mt: 1 }}
        >
          {fullWidth ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </IconButton>
      )}
      {fullWidth && (
        <StyledList
          sx={{ width: "100%", maxWidth: isSmallScreen ? 150 : 250 }}
          aria-labelledby="nested-list-subheader"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ListItemButton sx={{ padding: "0px", marginBottom: "10px" }}>
              <StyledLink
                to={"/react-advanced-patterns"}
                isactive={
                  pathname === "/react-advanced-patterns"
                    ? "active"
                    : "inActive"
                }
                style={{ width: "100%", padding: "8px 16px" }}
              >
                React Patterns
              </StyledLink>
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
                  sx={{ padding: "0px" }}
                >
                  <StyledLink
                    to={`/react-advanced-patterns?p=${link.path}`}
                    isactive={
                      searchParams.get("p") === link.path
                        ? "active"
                        : "inActive"
                    }
                    style={{ width: "100%", padding: "8px 16px" }}
                  >
                    {link.label}
                  </StyledLink>
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
                  <Typography sx={{ color: "primary.main" }}>About</Typography>
                </Link>
              </ListItemButton>
            </>
          )}
        </StyledList>
      )}
    </Box>
  );
};
