import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function footer() {
  return (
    <Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ color: "white", textAlign: "center", marginTop: "5%" }}
      >
        Made with L❤️ve by Sahdev Rajput
      </Typography>
      <Box bgcolor="yellow" margin="193px -8px -8px -8px" padding="15px">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: "black", textAlign: "center", fontWeight: "bold" }}
        >
          Copyright @ Sahdev Rajput,2022
        </Typography>
      </Box>
    </Box>
  );
}
export default footer;
