import React from "react";
import { Box, Typography } from "@mui/material";
import { ColoredDevider, ExternalLink } from "shared";
import { ProfilePhoto } from "./components";

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
        <ProfilePhoto />
        <Typography fontSize="20px" color="primary.light">
          Alaa Mohammad
        </Typography>
        <Typography
          color="secondary.main"
          fontSize="16px"
          style={{ textAlign: "center" }}
        >
          Senior Frontend Developer | React - JavaScript - TypeScript - Next.js
          - Test Automation | Software Developer
        </Typography>
      </Box>
      <ColoredDevider />
      <Typography
        fontSize="18px"
        color="primary.light"
        style={{ textAlign: "center",marginBottom:"10px" }}
      >
        Samples of my projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <ExternalLink
            url="https://phoenix-ecommerce.netlify.app/"
            title="E-commerce:"
          />
          <Typography color="primary.light">
            React, Redux, React Query, TypeScript, MUI, Firebase, Cypress, SASS,
            Localization, Theming…
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <ExternalLink
            url="https://shops-finder-nextjs.vercel.app/"
            title="Shops Finder:"
          />
          <Typography color="primary.light">
            Nextjs 14 with App Router, Fully authentication using NextAuth,
            Responsive Web Design using Tailwind CSS, TypeScript, MongoDB,
            cloudinary …
          </Typography>
        </Box>
      </Box>
      <ColoredDevider />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
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
