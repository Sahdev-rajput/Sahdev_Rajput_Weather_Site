import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined"; //Backdrops
function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        alignItems: "center",
        backgroundColor: "yellow",
        margin: "-8px",
        width: "103%"
      }}
    >
      <Toolbar
        style={{
          height: "40px",
          color: "black"
        }}
      >
        <ThunderstormOutlinedIcon
          sx={{ color: "red", fontSize: "35px", marginLeft: "1px" }}
        />
        <Typography
          variant="h6"
          color="inherit"
          style={{ fontWeight: "bold" }}
          component="div"
        >
          Sahdev Rajput Weather Site
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
