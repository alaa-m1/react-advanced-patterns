import React from "react";
import { Box, Typography } from "@mui/material";
import { ColoredDevider, ExternalLink } from "shared";
import { ProfilePhoto } from "./components";
import parse from "html-react-parser";

export const HomeDashboard = () => {
  const ABOUT_ME = `<Strong>Hi, I'm Alaa Mohammad, I'm a senior frontend developer</Strong>.<br/>
  I have worked in frontend development fields over the last six years.💻 <br/>
  Before that I worked for over seven years as a software developer 🖥️.</br>
  <Strong>My principles:</Strong> Work hard 👨‍💻, be kind, exercise regularly and enjoy live with my family 👨‍👩‍👧‍👦 .<br/>
  I am self-motivated. I enjoy new challenges, collaborating with other developers and developing good software.`;
  return (
    <Box m={2}>
      <Box mb={3}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ProfilePhoto />
        </Box>
        <Typography fontSize="18px" color="primary.light" mb="10px">
          {parse(ABOUT_ME)}
        </Typography>
        <Typography
          color="secondary.main"
          fontSize="16px"
          fontWeight="bold"
          style={{ textAlign: "center" }}
        >
          Senior Frontend Developer | React - JavaScript - TypeScript - Next.js
          - Test Automation | Software Developer
        </Typography>
      </Box>
      <ColoredDevider />
      <Typography
        fontSize="18px"
        fontWeight="bold"
        color="primary.light"
        style={{ textAlign: "center", marginBottom: "10px" }}
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
      <Typography
        fontSize="18px"
        fontWeight="bold"
        color="primary.light"
        style={{ textAlign: "center", marginBottom: "10px" }}
      >
        Contact me
      </Typography>
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
