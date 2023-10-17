import { Box, Link, Typography } from "@mui/material";
import { Link as RouterDomLink } from "react-router-dom";
import { ColoredDevider } from "shared";

const AboutDashboard=()=>{
return (
    <Box
    className="central-container"
      sx={{
        color:"secondary.dark"
      }}
    >
        <Typography fontSize="16px" color="primary.light">Alaa Mohammad</Typography>
        <Typography color="primary.light">Frontend Developer | React - JavaScript - TypeScript - Test Automation - Next.js | Software Developer</Typography>
        <ColoredDevider/>
        <Link component={RouterDomLink} to='/' sx={{textDecoration:'none', color:"secondary.main"}}>Home Page</Link>
    </Box>
)
}
export default AboutDashboard;