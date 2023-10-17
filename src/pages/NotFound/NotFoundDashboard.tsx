import { Box, Link, Typography } from "@mui/material";
import { Link as RouterDomLink } from "react-router-dom";
import { ColoredDevider } from "shared";

const NotFoundDashboard=()=>{
return (
  <Box
  className="central-container"
    sx={{
      color:"secondary.dark"
    }}
  >
        <Typography fontSize="16px" color="primary.light">404</Typography>
        <Typography color="primary.light">PAGE NOT FOUND</Typography>
        <ColoredDevider/>
        <Link component={RouterDomLink} to='/' sx={{textDecoration:'none', color:"secondary.main"}}>Home Page</Link>
    </Box>
)
}
export default NotFoundDashboard;