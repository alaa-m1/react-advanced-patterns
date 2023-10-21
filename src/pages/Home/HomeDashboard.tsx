import { Box, Typography } from "@mui/material";
import { ExternalLink } from "shared";

export const HomeDashboard = () => {
  return (
    <Box m={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "secondary.dark",
          mb: 3,
        }}
      >
        <Typography fontSize="16px" color="primary.light">
          Alaa Mohammad
        </Typography>
        <Typography color="secondary.main">
          Frontend Developer | React - JavaScript - TypeScript - Test Automation
          - Next.js | Software Developer
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <ExternalLink
          url="https://www.linkedin.com/in/alaa-mohammad-767622199/"
          title="LinkedIn"
        />
        <ExternalLink
          url="https://www.xing.com/profile/alaa_mohammad8/cv"
          title="Xing"
        />
        <ExternalLink url="https://github.com/alaa-m1" title="GitHub" />
      </Box>
    </Box>
  );
};

export default HomeDashboard;
